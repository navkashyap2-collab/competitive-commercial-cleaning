import { motion } from 'framer-motion'
import { SITE } from '../../data/site.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function ServiceArea() {
  const areas = [...SITE.serviceAreas, '& nearby suburbs']

  return (
    <section className="section-py bg-base" id="service-area">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where we work" title="Perth-wide, not just the CBD." />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card px-5 py-2.5 text-sm font-semibold text-ink-muted"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
