import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SITE } from '../../data/site.js'
import Button from '../shared/Button.jsx'
import { PhoneIcon, LeafIcon, ClipboardIcon, MapPinIcon } from '../shared/Icons.jsx'

const headline = ['Competitive by name.', 'Reliable by nature.', 'Spotless, every time.']

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const wordItem = {
  hidden: { opacity: 0, y: 32, rotateX: -35 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(100deg, rgba(13,8,33,0.95), rgba(13,8,33,0.82) 45%, rgba(13,8,33,0.55)), linear-gradient(0deg, rgba(13,8,33,0.6), transparent 45%), url('https://images.unsplash.com/photo-1756392401364-555393fe8bc8?auto=format&fit=crop&w=1920&q=75')",
      }}
    >
      <div className="pointer-events-none absolute -right-40 -top-44 h-[620px] w-[620px] rounded-full opacity-30 blur-3xl mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.55), transparent 65%)' }} />
      <div className="pointer-events-none absolute -bottom-52 -left-44 h-[560px] w-[560px] rounded-full opacity-25 blur-3xl mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.5), transparent 65%)' }} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />

      <motion.div
        style={{ y, opacity }}
        className="container-px relative mx-auto flex max-w-5xl flex-col items-start pt-28 pb-20"
      >
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow"
        >
          <MapPinIcon className="h-3.5 w-3.5" />
          Commercial Cleaning — Perth &amp; Surrounds
        </motion.span>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          style={{ perspective: 800 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]"
        >
          {headline.map((line, li) => (
            <span key={li} className="block overflow-hidden pb-1">
              {line.split(' ').map((word, wi) => (
                <motion.span key={wi} variants={wordItem} className="mr-3 inline-block last:mr-0">
                  {word === 'Competitive' ? (
                    <span style={{ color: 'var(--color-gold-strong)' }}>{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          Competitively priced, never corner-cut. Offices, schools, gyms, aged care and strata
          properties across Perth — cleaned on a schedule you can set your watch to, using
          eco-friendly products that are safe for your staff, clients and kids.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <Button to="/contact">Get a Free Quote</Button>
          <Button href={SITE.phoneHref} variant="outline" icon={false}>
            <PhoneIcon className="h-4 w-4" />
            Call {SITE.phone}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-faint"
        >
          <span className="flex items-center gap-2">
            <LeafIcon className="h-4 w-4 text-gold-strong" />
            Eco-friendly products
          </span>
          <span className="flex items-center gap-2">
            <ClipboardIcon className="h-4 w-4 text-gold-strong" />
            Custom quote after a real walkthrough
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-gold-strong" />
            Perth-wide coverage
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
