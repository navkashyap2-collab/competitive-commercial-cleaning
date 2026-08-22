import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col ${alignClass} mx-auto max-w-2xl`}>
      {eyebrow && <span className="kicker mb-3">{eyebrow}</span>}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
