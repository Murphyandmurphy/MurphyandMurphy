import { PortfolioProject } from './PortfolioCard'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'cruising-to-100-roi',
    type: 'half',
    title: 'Cruising to 100% ROI',
    categories: ['website'],
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
    id: 'mountain-retreat',
    type: 'half',
    title: 'Mountain Retreat',
    categories: ['Hospitality Design', 'Branding'],
    backgroundColor: 'bg-gray-50',
    link: '/projects/mountain-retreat',
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
    id: 'lakeside-dining',
    type: 'third',
    title: 'Lakeside Dining',
    categories: ['Restaurant Design', 'F&B'],
    backgroundColor: 'bg-gray-50',
    link: '/projects/lakeside-dining',
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
    id: 'alpine-hotel',
    type: 'third',
    title: 'Alpine Hotel',
    categories: ['Hospitality', 'Interior Design'],
    backgroundColor: 'bg-gray-50',
    link: '/projects/alpine-hotel',
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
    id: 'scenic-restaurant',
    type: 'third',
    title: 'Scenic Restaurant',
    categories: ['F&B Design', 'Branding'],
    backgroundColor: 'bg-gray-50',
    link: '/projects/scenic-restaurant',
    content: (
      <div className="absolute inset-0">
        <img
          src="/images/wakatipu.jpg"
          alt="Modern lake house interior with mountain views"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
]