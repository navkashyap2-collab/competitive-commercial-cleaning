import { Link } from 'react-router-dom'
import { SITE } from '../../data/site.js'
import { services } from '../../data/services.js'
import { MailIcon, MapPinIcon, PhoneIcon } from '../shared/Icons.jsx'
import logo from '../../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-cover bg-center pb-16 md:pb-0"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(28,16,59,0.92), rgba(28,16,59,0.72) 55%, rgba(28,16,59,0.58)), url('https://images.unsplash.com/photo-1760129744728-740e32a95f73?auto=format&fit=crop&w=1920&q=80&bri=70')",
      }}
    >
      <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/">
            <span className="inline-flex items-center rounded-xl bg-ink px-4 py-2.5">
              <img src={logo} alt={SITE.name} className="h-14 w-auto" />
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            On-demand commercial cleaning across {SITE.serviceAreas.slice(0, 3).join(', ')} and
            surrounding Perth suburbs.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-ink">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services#${s.slug}`}
                  className="text-sm text-ink-muted transition-colors hover:text-gold-strong"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-ink">Company</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/about" className="text-sm text-ink-muted transition-colors hover:text-gold-strong">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sm text-ink-muted transition-colors hover:text-gold-strong">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-ink-muted transition-colors hover:text-gold-strong">
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-ink">Get in touch</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-ink-muted">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-muted">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-strong" />
              <a href={SITE.phoneHref} className="hover:text-gold-strong">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-muted">
              <MailIcon className="h-4 w-4 shrink-0 text-gold-strong" />
              <a href={SITE.emailHref} className="hover:text-gold-strong">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-ink-faint sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Servicing {SITE.serviceAreas.join(', ')} & nearby suburbs.</p>
        </div>
      </div>
    </footer>
  )
}
