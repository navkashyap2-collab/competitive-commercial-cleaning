import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../../data/site.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Process() {
  return (
    <section className="section-py bg-surface" id="how-it-works">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How it works"
          title="A real process, not just a wipe-down."
          description="Every clean starts with an actual look at your space — not a guess."
        />

        <div className="mt-16 flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-[56px_1fr] gap-6 py-7 ${i === 0 ? 'border-t border-border' : 'border-t border-border'}`}
            >
              <span className="font-display text-2xl font-bold text-bronze/85">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
