import PageHeader from '../components/shared/PageHeader.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import Reveal, { RevealGroup, RevealItem } from '../components/shared/Reveal.jsx'
import { SITE } from '../data/site.js'
import { LeafIcon, ClipboardIcon, CheckIcon, MapPinIcon } from '../components/shared/Icons.jsx'

const values = [
  {
    icon: ClipboardIcon,
    title: 'A real assessment, every time',
    description:
      'No flat-rate guessing. Every quote starts with an actual look at your property, its surroundings, and what your business needs from a clean.',
  },
  {
    icon: LeafIcon,
    title: 'Eco-friendly by default',
    description:
      'We use environmentally-friendly cleaning solutions across every job — safer for your staff, your clients, and the spaces kids and vulnerable people use.',
  },
  {
    icon: CheckIcon,
    title: 'Hi-touch surfaces, not just floors',
    description:
      'Phones, switches, doorknobs — the surfaces people actually touch all day get deliberate attention, not just the visible ones.',
  },
  {
    icon: MapPinIcon,
    title: 'Perth-wide, reliably scheduled',
    description:
      "From Fremantle to Joondalup, cleans are scheduled around how your business actually runs — not squeezed in whenever's convenient for us.",
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A Perth cleaning company built around showing up properly."
        description="Competitive Commercial Cleaning provides commercial cleaning services across Perth and surrounding suburbs — offices, aged care, childcare, schools, gyms, restaurants and strata properties."
      />

      <section className="section-py bg-base">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-muted">
              Keeping a workplace clean is about more than appearances — it affects the health and
              productivity of everyone who uses the space. We focus on doing the assessment
              properly up front, so the clean itself matches what your property actually needs,
              rather than a generic checklist applied to every job the same way.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Every clean follows the same approach: dirt and debris removed first, then
              eco-friendly sanitizing with particular attention to high-touch surfaces, then
              carpets, windows and bins finished off — so the whole space reads as clean, not just
              the parts that are easy to see.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The details that actually matter to a clean workplace."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {values.map((v) => (
              <RevealItem key={v.title} className="card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-bronze/15 text-gold-strong">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-py bg-base">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Servicing {SITE.serviceAreas.join(', ')} &amp; nearby Perth suburbs.
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              Based at {SITE.address.full}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
