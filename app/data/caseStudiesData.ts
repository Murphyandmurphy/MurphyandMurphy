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
  finalImage?: string
  relatedProjects?: {
    title: string
    category: string
    image: string
    link: string
  }[]
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'pathfinder-wealth-management',
    category: 'branding',
    title: 'Charting new territory in Wealth Management',
    description: 'Pathfinder was recently founded by a group of wealth management specialists determined to transform the industry. Drawing on deep industry expertise, Pathfinder knows strong that a trusted partner — they just needed to create a unique visual landscapes and providing clear roadmaps that help clients navigate toward their goals with confidence and clarity.',
    deliverables: [
      'Brand Identity',
      'Website', 
      'Guidelines'
    ],
    heroImage: '/images/wakatipu.jpg',
    heroTitle: 'Inspiration',
    heroSubtitle: 'The guiding star',
    projectBrief: 'Pathfinder approached us to create a complete brand identity that would establish them as trusted guides in the wealth management landscape. They needed a visual system that conveyed expertise, reliability, and forward-thinking innovation while remaining approachable to high-net-worth individuals seeking financial guidance.',
    challenge: 'The wealth management industry is crowded with similar messaging around trust and expertise. Pathfinder needed to differentiate themselves while building instant credibility in a sector where reputation takes years to establish. The challenge was creating a brand that felt both established and innovative.',
    strategy: 'We developed a brand strategy centered on the concept of navigation and pathfinding. Using the metaphor of exploration and guidance, we created a visual identity that positions Pathfinder as expert navigators helping clients chart their financial futures. The approach balances professionalism with a sense of discovery and possibility.',
    solution: 'The final brand identity features a distinctive star compass symbol that represents guidance and direction. The visual system uses a sophisticated color palette of deep teals and clean typography to convey both stability and innovation. All brand touchpoints reinforce the navigation theme while maintaining the gravitas expected in wealth management.',
    imageGallery: [
      {
        title: 'Brand Development Process',
        description: 'The brand development process involved extensive research into the wealth management landscape and competitor analysis. We explored various visual metaphors before settling on the navigation theme that would become central to the brand identity.',
        images: ['/images/wakatipu.jpg', '/images/wakatipu.jpg']
      },
      {
        title: 'Visual Identity System',
        description: 'The comprehensive visual identity system includes the star compass logo, color palette, typography guidelines, and application examples. Every element was designed to work cohesively across digital and print applications.',
        images: ['/images/wakatipu.jpg']
      }
    ],
    finalImage: '/images/wakatipu.jpg',
    relatedProjects: [
      {
        title: 'A Rebrand for the ages',
        category: 'Branding',
        image: '/images/wakatipu.jpg',
        link: '/work/branding/rebrand-for-ages'
      },
      {
        title: 'Rebranding for global expansion',
        category: 'Digital',
        image: '/images/wakatipu.jpg',
        link: '/work/digital/global-expansion'
      }
    ]
  },
  
  {
    slug: 'cruising-to-100-roi',
    category: 'website',
    title: 'Cruising to 100% ROI',
    description: 'Pathfinder was recently founded by a group of wealth management specialists determined to transform the industry. Drawing on deep industry expertise, Pathfinder serves as more than a trusted partner — they act as stewards of their clients\' financial futures. They focus on education and peace of mind, simplifying complex financial landscapes and providing clear roadmaps that help clients navigate toward their goals with confidence and clarity.',
    expandedDescription: '**Translating guidance into visual language**\n\nTo embody Pathfinder\'s role as a trusted guide, we built the visual identity around the star—the universal symbol of navigation and direction-finding. At the heart of the brand, we wanted the guiding element to be the most pronounced attribute, so the star became the inspiration and focal point of the Pathfinder logo. We crafted a modular icon that feels solid, grounded, and adaptable to various applications.\n\nTo achieve delicate balance in the visual identity system, we paired the clean and approachable sans-serif typeface used in the logo with a more classic secondary typeface for headings and titles, establishing a sophisticated yet approachable presence.\n\nThese foundational elements are enriched by supporting textures inspired by natural landscapes and geological structures that represent the multifaceted nature of life\'s journey. From smooth, dune-like patterns to structured geological strata, these organic textures add depth and meaning to the brand, reflecting how Pathfinder guides clients through both the gentle transitions and challenging terrain of their financial landscapes.',
    deliverables: [
      'Website Redesign',
      'Digital Strategy',
      'Performance Marketing',
      'User Experience Design'
    ],
    heroImage: '/images/wakatipu.jpg',
    heroTitle: 'Digital Excellence',
    heroSubtitle: 'Navigating digital waters',
    projectBrief: 'Our cruise line client faced declining online bookings and increased competition in the luxury travel market. They needed a complete digital overhaul that would not only improve their online presence but demonstrate clear ROI through increased conversions and reduced customer acquisition costs.',
    challenge: 'The cruise industry had become increasingly competitive with multiple players vying for the same demographic. Our client\'s existing website was outdated, conversion rates were poor, and marketing spend was not delivering adequate returns. The challenge was to create a digital experience that would stand out while delivering measurable business results.',
    strategy: 'We developed a comprehensive digital strategy focusing on user experience optimization, conversion rate improvement, and targeted marketing campaigns. The approach included extensive user research, competitive analysis, and a data-driven design process that prioritized measurable outcomes over aesthetic preferences.',
    solution: 'The solution involved a complete website redesign with streamlined booking flows, enhanced visual storytelling, and optimized conversion paths. We implemented advanced analytics, A/B testing protocols, and integrated marketing automation to create a seamless experience from first touch to booking confirmation.',
    imageGallery: [
      {
        title: 'User Experience Research',
        description: 'Extensive user research revealed key pain points in the booking journey and opportunities for improvement in the overall digital experience.',
        images: ['/images/wakatipu.jpg', '/images/wakatipu.jpg', '/images/wakatipu.jpg']
      },
      {
        title: 'Website Redesign',
        description: 'The new website features improved navigation, enhanced visual storytelling, and streamlined booking processes that significantly improved conversion rates.',
        images: ['/images/wakatipu.jpg']
      }
    ],
    finalImage: '/images/wakatipu.jpg'
  }
]

// Helper functions
export const getCaseStudyBySlug = (category: string, slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(study => study.category === category && study.slug === slug)
}

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudiesData.filter(study => study.category === category)
}

export const getAllCategories = (): string[] => {
  return [...new Set(caseStudiesData.map(study => study.category))]
}

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesData
}