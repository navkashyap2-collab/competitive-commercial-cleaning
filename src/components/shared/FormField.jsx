import { AnimatePresence, motion } from 'framer-motion'

export const inputClasses =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-colors duration-200 focus:border-gold-strong focus:outline-none'

export default function FormField({ label, error, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink">{label}</label>
      {hint && <p className="mt-1 text-xs text-ink-faint">{hint}</p>}
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-xs font-medium text-danger"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
