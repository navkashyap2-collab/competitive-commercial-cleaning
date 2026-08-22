import PageHeader from '../components/shared/PageHeader.jsx'
import Reveal from '../components/shared/Reveal.jsx'
import Button from '../components/shared/Button.jsx'
import { services } from '../data/services.js'
import { iconMap } from '../components/shared/Icons.jsx'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="One standard of clean, whatever the space."
        description="Twelve cleaning specialties across Perth — pick a service below, or get in touch if your space needs a mix of a few."
      />

      <section className="bg-base pb-8">
        <div className="container-px mx-auto flex max-w-6xl flex-col">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            const reverse = i % 2 === 1
            return (
              <Reveal
                key={service.slug}
                id={service.slug}
                as="div"
                direction={reverse ? 'left' : 'right'}
                className="scroll-mt-28 border-t border-border py-14"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80">
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent" />
                  </div>

                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-bronze/15 text-gold-strong">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-ink sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Button to="/contact" variant="outline" className="!py-2.5 !px-5 !text-xs">
                        Get a quote for this
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
          <div className="border-t border-border" />
        </div>
      </section>
    </>
  )
}
