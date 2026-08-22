import { LeafIcon, ClipboardIcon, MapPinIcon, CheckIcon, BuildingIcon } from '../shared/Icons.jsx'

const items = [
  { icon: LeafIcon, label: 'Eco-friendly products' },
  { icon: ClipboardIcon, label: 'Custom quote after a real walkthrough' },
  { icon: CheckIcon, label: 'Hi-touch surface sanitizing' },
  { icon: MapPinIcon, label: 'Perth-wide service area' },
  { icon: BuildingIcon, label: '12 cleaning specialties' },
]

const track = [...items, ...items]

export default function TrustMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent sm:w-40" />

      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 [animation-play-state:running] hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-sm font-semibold uppercase tracking-widest text-ink-muted"
          >
            <item.icon className="h-4 w-4 text-gold-strong" />
            {item.label}
            <span className="ml-8 text-bronze/60">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
