import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE, NAV_LINKS } from '../../data/site.js'
import { services } from '../../data/services.js'
import Button from '../shared/Button.jsx'
import { ChevronDownIcon, MenuIcon, PhoneIcon, XIcon } from '../shared/Icons.jsx'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base/85 py-3 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="flex items-center rounded-xl bg-ink px-4 py-2.5 shadow-lg shadow-black/20">
            <img src={logo} alt={SITE.name} className="h-14 w-auto sm:h-16" />
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.to === '/services' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-gold-strong' : 'text-ink-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <ChevronDownIcon
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, var(--color-gold-strong), var(--color-bronze))',
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-border bg-surface p-3 shadow-2xl shadow-black/50">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services#${s.slug}`}
                              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/services"
                          className="mt-1 flex items-center justify-center rounded-xl px-3.5 py-2.5 text-sm font-bold text-gold-strong transition-colors hover:bg-white/5"
                        >
                          View all services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-gold-strong' : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, var(--color-gold-strong), var(--color-bronze))' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-gold-strong"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Button to="/contact" icon={false} className="!py-2.5 !px-5 !text-xs">
            Get a Free Quote
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) =>
                link.to === '/services' ? (
                  <div key={link.to}>
                    <div
                      className={`flex items-center rounded-lg text-sm font-semibold transition-colors ${
                        location.pathname === '/services' ? 'text-gold-strong' : 'text-ink-muted'
                      }`}
                    >
                      <NavLink to="/services" className="flex-1 px-4 py-3">
                        {link.label}
                      </NavLink>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-label="Toggle services list"
                        className="px-4 py-3"
                      >
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-3"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services#${s.slug}`}
                              className="block rounded-lg px-4 py-2.5 text-sm text-ink-faint transition-colors hover:text-ink"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive ? 'bg-white/5 text-gold-strong' : 'text-ink-muted'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-ink-muted"
              >
                <PhoneIcon className="h-4 w-4" />
                {SITE.phone}
              </a>
              <div className="px-4 pt-2">
                <Button to="/contact" icon={false} className="w-full justify-center">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
