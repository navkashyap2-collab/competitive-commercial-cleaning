import { motion } from 'framer-motion'
import { SITE } from '../../data/site.js'
import Button from '../shared/Button.jsx'
import { PhoneIcon } from '../shared/Icons.jsx'

export default function FinalCTA() {
  return (
    <section className="section-py relative overflow-hidden">
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-border px-8 py-16 text-center sm:px-14"
        style={{ background: 'linear-gradient(135deg, var(--color-bronze-soft), #140b2c 60%, var(--color-base))' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          <span className="kicker">Ready when you are</span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Get a quote built around your actual space.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Tell us about your property and we&rsquo;ll get back to you with a custom quote — no
            guesswork, no generic rate card.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Button to="/contact">Get a Free Quote</Button>
            <Button href={SITE.phoneHref} variant="outline" icon={false}>
              <PhoneIcon className="h-4 w-4" />
              {SITE.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
