import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons.jsx'

const Button = forwardRef(function Button(
  { to, href, children, variant = 'primary', icon = true, className = '', ...rest },
  ref
) {
  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.035 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="group inline-block">
        <Link ref={ref} to={to} className={classes} {...rest}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="group inline-block">
        <a ref={ref} href={href} className={classes} {...rest}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button ref={ref} {...motionProps} className={`group ${classes}`} {...rest}>
      {content}
    </motion.button>
  )
})

export default Button
