const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const BuildingIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h1M8 11h1M8 15h1M15 7h1M15 11h1M15 15h1" />
  </svg>
)

export const BriefcaseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
)

export const CarpetIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 5v14M17 5v14M3 10h4M3 14h4M17 10h4M17 14h4" />
  </svg>
)

export const HeartIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20.8 8.6c0 4.4-8.8 10.4-8.8 10.4S3.2 13 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
  </svg>
)

export const ChildcareIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="7" r="3" />
    <path d="M5 21c0-3.87 3.13-7 7-7s7 3.13 7 7" />
  </svg>
)

export const RestaurantIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11" />
    <path d="M17 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4 2.5-1.5 2.5-4-1-4-2.5-4Zm0 8v10" />
  </svg>
)

export const SchoolIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M2 9 12 4l10 5-10 5-10-5Z" />
    <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
  </svg>
)

export const DumbbellIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6.5 6.5 3 10l1.5 1.5L8 8l8 8-3.5 3.5L14 21l3.5-3.5L21 14l-1.5-1.5L16 16l-8-8 3.5-3.5L10 3 6.5 6.5Z" />
  </svg>
)

export const PressureIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3c3 3.5 5 6.5 5 9.5a5 5 0 0 1-10 0C7 9.5 9 6.5 12 3Z" />
  </svg>
)

export const WindowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M4 12h16M12 3v18" />
  </svg>
)

export const KeyIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.5 12.5 19 4M16 6l2 2M13 9l2 2" />
  </svg>
)

export const TrashIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 6 8 7 8-7" />
  </svg>
)

export const MapPinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const LeafIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 20c8 0 16-4 16-16-8 0-16 4-16 16Z" />
    <path d="M4 20c4-6 8-9 16-14" />
  </svg>
)

export const ClipboardIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 11h6M9 15h4" />
  </svg>
)

export const AlertTriangleIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
)

export const ZapIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
)

export const MinusIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const XIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5 15.09 9l7.16.62-5.41 4.72 1.64 7-6.48-3.9-6.48 3.9 1.64-7-5.41-4.72L8.91 9 12 2.5Z" />
  </svg>
)

export const GoogleIcon = (p) => (
  <svg viewBox="0 0 48 48" {...p}>
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17Z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46Z" />
    <path fill="#FBBC05" d="M11.69 28.18A13.98 13.98 0 0 1 10.94 24c0-1.45.25-2.86.7-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7Z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07Z" />
  </svg>
)

export const ArrowRightIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ChevronDownIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const iconMap = {
  building: BuildingIcon,
  briefcase: BriefcaseIcon,
  carpet: CarpetIcon,
  heart: HeartIcon,
  childcare: ChildcareIcon,
  restaurant: RestaurantIcon,
  school: SchoolIcon,
  dumbbell: DumbbellIcon,
  pressure: PressureIcon,
  window: WindowIcon,
  key: KeyIcon,
  trash: TrashIcon,
}
