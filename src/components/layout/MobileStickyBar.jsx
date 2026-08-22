import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE } from '../../data/site.js'
import { PhoneIcon, ArrowRightIcon } from '../shared/Icons.jsx'

export default function MobileStickyBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-base/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={SITE.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm font-semibold text-ink active:bg-white/5"
      >
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold"
        style={{
          background: 'linear-gradient(135deg, var(--color-gold-strong), var(--color-gold))',
          color: '#0d0821',
        }}
      >
        Get a Free Quote
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </motion.div>
  )
}
