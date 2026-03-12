export interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
  pill?: string;
}

export interface StatItem {
  label: string;
  value: string;
  sublabel?: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  type: 'Consumer' | 'Driver' | 'Partner';
  location: string;
}

export const HERO_STATS: StatItem[] = [
  {
    label: 'Cities & towns',
    value: '5000+',
    sublabel: 'Across India',
  },
  {
    label: 'Partners',
    value: '10,000+',
    sublabel: 'Cabs • Travellers • Trucks',
  },
  {
    label: 'Happy customers',
    value: '59,999+',
    sublabel: 'Trips completed',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: 'local_taxi',
    title: 'Cab Services',
    description: 'Pocket-friendly city & outstation rides with verified drivers and clean AC cars.',
    pill: 'Local • One Way • Round Trip',
  },
  {
    icon: 'airport_shuttle',
    title: 'Travellers & Buses',
    description: 'Comfortable tempo travellers, vans and buses for group travel and tours.',
    pill: 'Family Trips • Tours • Pilgrimage',
  },
  {
    icon: 'diamond',
    title: 'Luxury Cars',
    description: 'Make weddings, VIP events and business travel unforgettable with premium cars.',
    pill: 'Wedding • Corporate • Airport',
  },
  {
    icon: 'local_shipping',
    title: 'Transport & Trucks',
    description: 'Reliable logistics, medium & heavy vehicles for goods and project movement.',
    pill: 'MCVs • HCVs • Trailers',
  },
];

export const BOOKING_STEPS: StepItem[] = [
  {
    title: 'Choose a service',
    description: 'Select cab, traveller, luxury car, truck, or rental type in a single interface.',
  },
  {
    title: 'Enter trip details',
    description: 'Add pickup, drop, dates and duration. You can also offer your own fare.',
  },
  {
    title: 'Get matched instantly',
    description: 'We assign a verified vehicle and professional driver that fits your need.',
  },
  {
    title: 'Confirm & travel',
    description: 'Track status, contact driver and enjoy a smooth, on-time journey.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Booking a ride is easy, drivers are punctual and cars are always clean. I love that I can offer my price.',
    name: 'Durga Bahadur',
    role: 'Consumer',
    type: 'Consumer',
    location: 'Uttar Pradesh',
  },
  {
    quote:
      'HurryUp Cabs is a must-have for hassle-free city travel. Multiple ride options and great safety features.',
    name: 'Saurabh Awasthi',
    role: 'Service Provider',
    type: 'Driver',
    location: 'Uttar Pradesh',
  },
  {
    quote:
      'No commission, only monthly subscription. As a driver I actually take home what I earn. Best app for drivers.',
    name: 'PRIMEX INDRAJEET',
    role: 'Driver & Partner',
    type: 'Partner',
    location: 'Uttar Pradesh',
  },
  {
    quote:
      'We used the cab for regular usage in Lucknow and every time the experience was smooth, safe and affordable.',
    name: 'Beena',
    role: 'Consumer',
    type: 'Consumer',
    location: 'Uttar Pradesh',
  },
];

