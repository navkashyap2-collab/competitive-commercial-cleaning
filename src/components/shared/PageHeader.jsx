import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center pt-32 pb-20"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(13,8,33,0.93), rgba(13,8,33,0.88) 60%, rgba(13,8,33,0.96)), url('https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?auto=format&fit=crop&w=1920&q=75')",
      }}
    >
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.55), transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.5), transparent 65%)' }}
      />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
