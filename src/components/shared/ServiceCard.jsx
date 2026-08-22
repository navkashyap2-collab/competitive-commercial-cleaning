import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { iconMap } from './Icons.jsx'
import Tilt3D from './Tilt3D.jsx'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tilt3D maxTilt={5} className="h-full rounded-2xl">
        <Link
          to={`/services#${service.slug}`}
          className="card group block h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold-strong/50"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={service.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/10 to-transparent" />
            <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-base/80 text-gold-strong backdrop-blur-sm">
              {Icon && <Icon className="h-5 w-5" />}
            </div>
          </div>
          <div className="p-6 pt-5">
            <h3 className="text-base font-bold text-ink">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.short}</p>
          </div>
        </Link>
      </Tilt3D>
    </motion.div>
  )
}
