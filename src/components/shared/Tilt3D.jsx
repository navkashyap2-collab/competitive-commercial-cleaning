import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

export default function Tilt3D({ children, className = '', maxTilt = 8, glare = true }) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt])
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt])
  const glareBackground = useTransform([springX, springY], ([gx, gy]) => {
    return `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(34,211,238,0.16), transparent 55%)`
  })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  )
}
