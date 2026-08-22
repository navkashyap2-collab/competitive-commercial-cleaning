import { services } from '../../data/services.js'
import SectionHeading from '../shared/SectionHeading.jsx'
import ServiceCard from '../shared/ServiceCard.jsx'
import Button from '../shared/Button.jsx'
import Reveal from '../shared/Reveal.jsx'

export default function ServicesShowcase() {
  return (
    <section className="section-py bg-base">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we clean"
          title="One standard of clean, whatever the space."
          description="From daily office cleans to schools and aged-care facilities — whatever kind of commercial space you run, it's covered."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button to="/services" variant="outline">
            View all services
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
