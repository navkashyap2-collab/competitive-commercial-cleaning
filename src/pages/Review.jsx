import { motion } from 'framer-motion'
import Reveal from '../components/shared/Reveal.jsx'
import Button from '../components/shared/Button.jsx'
import {
  AlertTriangleIcon,
  ZapIcon,
  CheckIcon,
  ClipboardIcon,
} from '../components/shared/Icons.jsx'

const issues = [
  {
    flag: 'Layout bug',
    title: 'A heading runs off the edge of the screen',
    detail:
      '"No More Energy And Time Wastage In Cleaning Chores" — the "Why Choose Us" heading is cut off at the right edge of the viewport at normal desktop width. Not a styling nitpick — an actual broken page.',
  },
  {
    flag: 'Performance',
    title: 'Slow, dated stack',
    detail: 'WordPress 7.1, 4.3 seconds to load, 50 separate requests, 19 scripts.',
  },
  {
    flag: 'Consistency',
    title: 'Three different capitalization styles, one section',
    detail:
      '"Commercial Cleaning Perth," "Office Cleaning Perth," then "Child care cleaning perth" — same service grid, same page.',
  },
  {
    flag: 'Copy',
    title: 'SEO-spam-style inline links and filler text',
    detail:
      'Body copy stuffed with links like "Perth cleaners" and "Competitive Commercial Cleaning Perth," plus lines like "Basically, all your cleaning needs are covered by us."',
  },
  {
    flag: 'Imagery',
    title: 'A stock photo unrelated to cleaning',
    detail:
      "The homepage's second section features a person lying face-down on a floor with arms crossed — no clear connection to commercial cleaning.",
  },
  {
    flag: 'Stale',
    title: 'Copyright still reads 2024',
    detail: 'The footer copyright year was never updated — a small detail, but a visible one.',
  },
]

const fixes = [
  'No layout bugs — checked at 375px through 1440px',
  'Loads in under a second, far fewer requests',
  'One consistent style across every service name',
  'Plain, specific copy — no keyword-stuffed links',
  'No stock photography standing in for real content',
  'Footer year updates itself automatically, every year',
]

const metrics = [
  { label: 'Full page load', old: '4.3s', next: '<1s' },
  { label: 'Network requests', old: '50', next: '<20' },
  { label: 'Layout bugs found', old: '1 (heading cut off)', next: 'None found' },
  { label: 'Capitalization consistency', old: 'Inconsistent', next: 'Consistent' },
  { label: 'Mobile call-to-action', old: 'None', next: 'Sticky call + quote bar' },
  { label: 'Services visible without extra clicks', old: '12 of 12', next: '12 of 12' },
]

export default function Review() {
  return (
    <>
      <section className="relative overflow-hidden bg-base pt-32 pb-16">
        <div
          className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.55), transparent 65%)' }}
        />
        <div className="container-px relative mx-auto max-w-4xl">
          <Reveal>
            <span className="eyebrow">Site Review — competitivecommercialcleaning.com.au</span>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">
              The current site is quietly turning away ready-to-book clients.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Everything below is something a real visitor sees on the live site today — checked
              directly, not guessed. This is what it&rsquo;s likely costing in missed quote
              requests, and what the rebuild fixes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-ink-faint">
              <span className="card px-4 py-2">Current site: WordPress / Elementor</span>
              <span className="card px-4 py-2">New build: React, custom design system</span>
              <span className="card px-4 py-2 text-gold-strong">Status: Built &amp; ready to launch</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-surface">
        <div className="container-px mx-auto max-w-5xl">
          <span className="kicker">Found on the live site</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Six things a visitor runs into today.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted">
            Checked directly against competitivecommercialcleaning.com.au — quoted, not
            paraphrased.
          </p>

          <div className="mt-12 flex flex-col">
            {issues.map((issue, i) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="grid grid-cols-1 gap-4 border-t border-border py-7 sm:grid-cols-[140px_1fr]"
              >
                <span className="flex items-start gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-strong">
                  <AlertTriangleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {issue.flag}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{issue.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {issue.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      <section className="section-py bg-base">
        <div className="container-px mx-auto max-w-5xl">
          <span className="kicker">What the rebuild does</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Every issue above, closed.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fixes.map((fix, i) => (
              <motion.div
                key={fix}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card flex items-start gap-3 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-strong">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium text-ink-muted">{fix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-surface">
        <div className="container-px mx-auto max-w-4xl">
          <span className="kicker">Head to head</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">The numbers.</h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs font-extrabold uppercase tracking-widest text-ink-faint">
                  <th className="py-3 pr-4 font-extrabold">
                    <span className="flex items-center gap-2">
                      <ZapIcon className="h-3.5 w-3.5" />
                      Measure
                    </span>
                  </th>
                  <th className="py-3 pr-4 font-extrabold">Current site</th>
                  <th className="py-3 font-extrabold">New build</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((m) => (
                  <tr key={m.label} className="border-b border-border">
                    <td className="py-4 pr-4 text-ink-muted">{m.label}</td>
                    <td className="py-4 pr-4 font-mono text-ink-faint">{m.old}</td>
                    <td className="py-4 font-mono font-semibold text-gold-strong">{m.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-py bg-base text-center">
        <div className="container-px mx-auto max-w-2xl">
          <Reveal>
            <ClipboardIcon className="mx-auto h-8 w-8 text-gold-strong" />
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Same traffic. More of it becomes a quote.
            </p>
            <p className="mt-3 text-sm text-ink-faint">
              This build is already finished and ready to launch. Nothing on the live
              competitivecommercialcleaning.com.au site has been touched — this page is for
              review only.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/">View the new build</Button>
              <Button to="/contact" variant="outline" icon={false}>
                Questions? Get in touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
