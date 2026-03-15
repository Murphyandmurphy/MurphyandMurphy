import { PortfolioProject } from './PortfolioCard'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'cruising-to-100-roi',
    type: 'half',
    title: 'Cruising to 100% ROI',
    categories: ['Website Design'],
    backgroundColor: 'bg-gray-50',
    link: '/work/website/cruising-to-100-roi',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Modern lake house interior with mountain views"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'pathfinder-wealth',
    type: 'half',
    title: 'Charting New Territory',
    categories: ['Branding'],
    backgroundColor: 'bg-gray-50',
    link: '/work/branding/pathfinder-wealth-management',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Pathfinder brand identity"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'mountain-retreat',
    type: 'third',
    title: 'Mountain Retreat',
    categories: ['Branding'],
    backgroundColor: 'bg-gray-50',
    link: '/work/branding/mountain-retreat',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Mountain retreat branding"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'lakeside-dining',
    type: 'third',
    title: 'Lakeside Dining',
    categories: ['Design'],
    backgroundColor: 'bg-gray-50',
    link: '/work/design/lakeside-dining',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Lakeside dining design"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },

  {
    id: 'scenic-restaurant',
    type: 'third',
    title: 'Scenic Restaurant',
    categories: ['Digital & Social'],
    backgroundColor: 'bg-gray-50',
    link: '/work/digital/scenic-restaurant',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Scenic restaurant digital"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
]
