import { SITE } from '../../data/site.js'
import { StarIcon, GoogleIcon } from '../shared/Icons.jsx'
import Reveal from '../shared/Reveal.jsx'

export default function GoogleReviews() {
  const { rating, count, url } = SITE.googleReviews

  return (
    <section className="section-py bg-surface">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface-2 px-8 py-12 text-center sm:px-14">
          <GoogleIcon className="h-9 w-9" />

          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-ink">{rating}</span>
            <span className="text-lg text-ink-muted">/ 5</span>
          </div>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-gold-strong" />
            ))}
          </div>

          <p className="text-base text-ink-muted">
            Rated {rating} out of 5 from{' '}
            <span className="font-semibold text-ink">{count} Google reviews</span> — clients
            consistently call out the same thing: the team turns up when they say they will.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold-strong hover:text-gold-strong"
          >
            Read our Google reviews
          </a>
        </Reveal>
      </div>
    </section>
  )
}
