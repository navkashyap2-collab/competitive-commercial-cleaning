export const services = [
  {
    slug: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    short: 'General commercial cleaning for any Perth business.',
    description:
      'Day-to-day commercial cleaning covering common areas, kitchens, bathrooms and floors — scheduled around how your business actually operates, not a rigid template.',
    icon: 'building',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    short: 'Keeping offices presentable for staff and clients alike.',
    description:
      'Desks, kitchens, bathrooms and communal areas kept spotless on a schedule that fits your business — so the office looks the part every day, not just before a big meeting.',
    icon: 'briefcase',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'commercial-carpet-cleaning',
    title: 'Commercial Carpet Cleaning',
    short: 'Deep carpet cleaning that lifts embedded dirt and extends carpet life.',
    description:
      'Professional carpet cleaning for high-traffic commercial spaces — lifting embedded dirt and stains, freshening up busy areas, and extending the life of your flooring.',
    icon: 'carpet',
    image:
      'https://images.unsplash.com/photo-1548467323-072c8af90d48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'aged-care-cleaning',
    title: 'Aged Care Cleaning',
    short: 'Infection-control-focused cleaning for aged care facilities.',
    description:
      'Aged care facilities demand a higher hygiene standard. Careful, infection-control-focused cleaning keeps common areas and resident spaces safe, sanitary and welcoming.',
    icon: 'heart',
    image:
      'https://images.unsplash.com/photo-1590844173514-bc81d7efe373?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'child-care-cleaning',
    title: 'Child Care Cleaning',
    short: 'Safe, eco-friendly cleaning for childcare centres.',
    description:
      'Eco-friendly, non-toxic products used throughout childcare centres, so the environment stays genuinely safe and healthy for the kids, educators and families you serve.',
    icon: 'childcare',
    image:
      'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'restaurant-cleaning',
    title: 'Restaurant Cleaning',
    short: 'Hygiene-focused cleaning for kitchens and dining areas.',
    description:
      'Kitchens, dining areas and high-touch surfaces cleaned to the standard a food business needs — hygiene-focused, thorough, and scheduled around your service hours.',
    icon: 'restaurant',
    image:
      'https://images.unsplash.com/photo-1554997433-8e233c02c751?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'school-cleaning',
    title: 'School Cleaning',
    short: 'Classroom and common-area cleaning for schools.',
    description:
      'Classrooms, corridors, halls and amenities kept clean and safe for students and staff, with scheduling built around school hours and term breaks.',
    icon: 'school',
    image:
      'https://images.unsplash.com/photo-1495433923968-85c6751d2df6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'gym-cleaning',
    title: 'Gym Cleaning',
    short: 'Hygienic, welcoming workout environments members can trust.',
    description:
      'High-touch equipment, mats, change rooms and showers get thorough, hygiene-focused attention so members always walk into a clean, welcoming space.',
    icon: 'dumbbell',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'high-pressure-cleaning',
    title: 'High Pressure Cleaning',
    short: 'Exterior surfaces, driveways and walkways cleaned properly.',
    description:
      'High-pressure cleaning for exterior surfaces, driveways, walkways and building facades — restoring the outside of your property to match a clean interior.',
    icon: 'pressure',
    image:
      'https://images.unsplash.com/photo-1605658781469-50bcc2522522?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    short: 'Streak-free windows, inside and out.',
    description:
      "Streak-free window cleaning inside and out — small detail, but it's often the first thing a client notices walking up to your building.",
    icon: 'window',
    image:
      'https://images.unsplash.com/photo-1561236478-a10a7659d498?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'end-of-lease-cleaning',
    title: 'Commercial End of Lease / Vacate Cleaning',
    short: 'Full property cleans that make lease turnover simple.',
    description:
      'A full top-to-bottom clean for commercial lease turnover — kitchens, bathrooms, floors, fixtures and fittings — so tenants and landlords can move forward with a spotless handover.',
    icon: 'key',
    image:
      'https://images.unsplash.com/photo-1542081403278-ba5973c25c7a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'rubbish-removal',
    title: 'Rubbish Removal',
    short: 'Waste cleared, bins sanitized, sorted properly.',
    description:
      'Rubbish and waste cleared from your property, bins emptied and sanitized, with recyclables sorted properly rather than dumped in with general waste.',
    icon: 'trash',
    image:
      'https://images.unsplash.com/photo-1606427689071-0576b2c7c89d?auto=format&fit=crop&w=1200&q=80',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
