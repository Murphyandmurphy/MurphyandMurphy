import { PortfolioProject } from './PortfolioCard'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'pathfinder-wealth-management',
    type: 'half',
    title: 'Pathfinder Wealth Management',
    categories: ['Branding'],
    backgroundColor: 'bg-gray-50',
    link: '/work/branding/pathfinder-wealth-management',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/pathfinder-hero.jpg"
          alt="Pathfinder Wealth Management"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'bloom-interiors',
    type: 'half',
    title: 'Bloom Interiors',
    categories: ['Website Design'],
    backgroundColor: 'bg-gray-50',
    link: '/work/website/bloom-interiors',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/bloom-hero.jpg"
          alt="Bloom Interiors"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'nova-fitness-app',
    type: 'third',
    title: 'Nova Fitness',
    categories: ['Digital & Social'],
    backgroundColor: 'bg-gray-50',
    link: '/work/digital/nova-fitness-app',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/nova-hero.jpg"
          alt="Nova Fitness"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
]
