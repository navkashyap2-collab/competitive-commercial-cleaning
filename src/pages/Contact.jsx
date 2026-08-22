import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/shared/PageHeader.jsx'
import Reveal from '../components/shared/Reveal.jsx'
import FormField, { inputClasses } from '../components/shared/FormField.jsx'
import { SITE } from '../data/site.js'
import { services } from '../data/services.js'
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/shared/Icons.jsx'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`

const SERVICE_OPTIONS = [
  { value: '', label: 'Not sure yet' },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That doesn't look like a valid email."
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const serviceLabel =
        SERVICE_OPTIONS.find((o) => o.value === values.service)?.label ?? 'Not sure yet'
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          phone: values.phone,
          email: values.email,
          service_interest: serviceLabel,
          message: values.message,
          _subject: 'New enquiry from Competitive Commercial Cleaning website',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a quote built around your actual space."
        description="Tell us about your property and we'll get back to you with a custom quote — no guesswork, no generic rate card."
      />

      <section className="section-py bg-base">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-3" direction="up">
              <div className="card p-8">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <motion.svg
                        viewBox="0 0 52 52"
                        className="h-16 w-16 text-gold-strong"
                        initial="hidden"
                        animate="show"
                      >
                        <motion.circle
                          cx="26"
                          cy="26"
                          r="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                        <motion.path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 27l7 7 15-15"
                          variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
                        />
                      </motion.svg>
                      <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                        Message sent
                      </h2>
                      <p className="mt-2 max-w-sm text-sm text-ink-muted">
                        Thanks — we&rsquo;ll get back to you within 1 business day. In the
                        meantime, feel free to call us directly.
                      </p>
                      <a href={SITE.phoneHref} className="btn-ghost mt-6">
                        {SITE.phone}
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      noValidate
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField label="Full name" error={errors.name}>
                          <input
                            type="text"
                            value={values.name}
                            onChange={(e) => update('name', e.target.value)}
                            autoComplete="name"
                            className={inputClasses}
                          />
                        </FormField>
                        <FormField label="Company">
                          <input
                            type="text"
                            value={values.company}
                            onChange={(e) => update('company', e.target.value)}
                            autoComplete="organization"
                            className={inputClasses}
                          />
                        </FormField>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField label="Phone" error={errors.phone}>
                          <input
                            type="tel"
                            value={values.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            autoComplete="tel"
                            className={inputClasses}
                          />
                        </FormField>
                        <FormField label="Email" error={errors.email}>
                          <input
                            type="email"
                            value={values.email}
                            onChange={(e) => update('email', e.target.value)}
                            autoComplete="email"
                            className={inputClasses}
                          />
                        </FormField>
                      </div>

                      <FormField label="Service interest">
                        <select
                          value={values.service}
                          onChange={(e) => update('service', e.target.value)}
                          className={inputClasses}
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      <FormField
                        label="Message"
                        hint="Optional — property size, preferred frequency, anything useful."
                      >
                        <textarea
                          rows={4}
                          value={values.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={inputClasses}
                        />
                      </FormField>

                      {status === 'error' && (
                        <p className="rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
                          Something went wrong sending that. Please try again, or call us directly
                          at {SITE.phone}.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send Message'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" direction="left">
              <div className="card p-8">
                <h2 className="font-display text-lg font-bold text-ink">Direct contact</h2>
                <ul className="mt-6 space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-gold/15 to-bronze/10 text-gold-strong">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Call or text</p>
                      <a
                        href={SITE.phoneHref}
                        className="text-sm text-ink-muted transition-colors hover:text-gold-strong"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-gold/15 to-bronze/10 text-gold-strong">
                      <MailIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Email</p>
                      <a
                        href={SITE.emailHref}
                        className="text-sm text-ink-muted transition-colors hover:text-gold-strong"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-gold/15 to-bronze/10 text-gold-strong">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Address</p>
                      <p className="text-sm text-ink-muted">
                        {SITE.address.line1}
                        <br />
                        {SITE.address.line2}
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="mt-8 rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-xs text-ink-faint">
                  We&rsquo;ll get back to you within 1 business day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
