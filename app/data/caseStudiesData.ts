// app/data/caseStudiesData.ts

export interface CaseStudy {
  slug: string
  category: string
  title: string
  description: string
  expandedDescription?: string
  deliverables: string[]
  heroImage: string
  heroTitle?: string
  heroSubtitle?: string
  projectBrief: string
  challenge: string
  strategy: string
  solution: string
  imageGallery: {
    title: string
    description: string
    images: string[]
  }[]
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'pathfinder-wealth-management',
    category: 'branding',
    title: 'Brand Identity for Pathfinder.\nGiving a new wealth management firm the confidence to navigate any terrain.',
    description: 'A complete brand overhaul for a forward-thinking financial advisory firm looking to stand out in a crowded market.',
    expandedDescription: `Pathfinder came to us with a strong reputation but an identity that didn't reflect their ambition.

We built a brand system rooted in clarity and confidence — one that speaks to high-net-worth clients without feeling cold or corporate.`,
    deliverables: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Stationery'],
    heroImage: '/images/pathfinder-hero.webp',
    heroTitle: 'Pathfinder Wealth Management',
    heroSubtitle: 'Redefining trust in financial services',
    projectBrief: 'Pathfinder needed a brand identity that reflected their modern, client-first approach to wealth management.',
    challenge: 'The existing brand felt dated and generic — indistinguishable from dozens of competitors. It was undermining confidence in an otherwise exceptional service.',
    strategy: 'We conducted stakeholder interviews and competitor analysis to identify white space in the market. The strategy centred on warmth and precision — two qualities rarely combined in finance.',
    solution: 'A refined wordmark paired with a bespoke icon system, a warm neutral palette, and a typography suite that balances authority with approachability. Delivered as a full brand guidelines document.',
    imageGallery: [
      {
        title: 'Brand Identity',
        description: 'Logo variations, colour palette, and typography in use.',
        images: ['/images/pathfinder-g1a.jpg', '/images/pathfinder-g1b.jpg'],
      },
      {
        title: 'Stationery & Collateral',
        description: 'Business cards, letterhead, and presentation templates.',
        images: ['/images/pathfinder-g2a.jpg', '/images/pathfinder-g2b.jpg'],
      },
    ],
  },

  {
    slug: 'bloom-interiors',
    category: 'website',
    title: 'Bloom Interiors',
    description: 'A luxury interior design studio website built to convert high-value enquiries and showcase their portfolio with elegance.',
    expandedDescription: `Bloom Interiors had a stunning portfolio but a website that was letting them down.

We designed and built a bespoke site that puts their work front and centre — with an enquiry flow designed to attract serious clients.`,
    deliverables: ['UX Design', 'Website Design', 'Web Development', 'CMS Setup'],
    heroImage: '/images/bloom-hero.jpg',
    heroTitle: 'Bloom Interiors',
    heroSubtitle: 'Where design meets considered living',
    projectBrief: 'A full website redesign for a high-end interior design studio, focused on portfolio presentation and lead quality.',
    challenge: 'The old site was template-based and failed to communicate the premium nature of their work. Bounce rates were high and enquiry quality was low.',
    strategy: 'We mapped the client journey from first impression to enquiry submission, identifying key moments where trust needed to be established. Photography and white space became the primary design tools.',
    solution: 'A custom-built site with full-screen project galleries, an editorial-style journal, and a streamlined enquiry form. Built on a headless CMS so the team can update content independently.',
    imageGallery: [
      {
        title: 'Homepage & Navigation',
        description: 'Immersive hero, clean navigation, and curated project grid.',
        images: ['/images/bloom-g1a.jpg', '/images/bloom-g1b.jpg'],
      },
      {
        title: 'Project Pages',
        description: 'Full-bleed imagery with project narrative and details.',
        images: ['/images/bloom-g2a.jpg', '/images/bloom-g2b.jpg'],
      },
    ],
  },

  {
    slug: 'nova-fitness-app',
    category: 'digital',
    title: 'Nova Fitness',
    description: 'End-to-end UX and UI design for a fitness app targeting busy professionals who want results without the noise.',
    expandedDescription: `Nova Fitness had a clear product vision but needed a design partner to bring it to life.

We led the UX research, information architecture, and full UI design — from onboarding through to daily workout tracking.`,
    deliverables: ['UX Research', 'App Design', 'Prototype', 'Design System'],
    heroImage: '/images/nova-hero.jpg',
    heroTitle: 'Nova Fitness',
    heroSubtitle: 'Smarter training for ambitious people',
    projectBrief: 'Design the complete user experience for a fitness app targeting time-poor professionals, from concept through to developer-ready UI.',
    challenge: 'The fitness app market is saturated. Nova needed a product that felt genuinely different — simpler, smarter, and built around real user behaviour rather than vanity metrics.',
    strategy: 'We ran discovery workshops and user interviews with 12 target users to surface the core jobs-to-be-done. The design strategy prioritised speed of use — every key action achievable in under three taps.',
    solution: 'A clean, high-contrast UI with an adaptive workout engine at its core. Delivered as a full Figma design system with 200+ components, annotated for handoff to the development team.',
    imageGallery: [
      {
        title: 'Onboarding Flow',
        description: 'Personalisation screens and first-run experience.',
        images: ['/images/nova-g1a.jpg', '/images/nova-g1b.jpg'],
      },
      {
        title: 'Dashboard & Tracking',
        description: 'Daily dashboard, workout logging, and progress views.',
        images: ['/images/nova-g2a.jpg', '/images/nova-g2b.jpg'],
      },
    ],
  },
]

export const getCaseStudyBySlug = (category: string, slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(study => study.category === category && study.slug === slug)
}

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudiesData.filter(study => study.category === category)
}

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesData
}
