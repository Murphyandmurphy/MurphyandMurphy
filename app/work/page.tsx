'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PortfolioHalf, PortfolioThird } from '../components/PortfolioCard'
import { portfolioProjects } from '../components/portfolioData'

const CATEGORIES = ['Branding', 'Design', 'Website Design', 'Digital & Social'] as const
type Category = typeof CATEGORIES[number]


export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null)

  const filteredProjects = activeFilter
    ? portfolioProjects.filter(p => p.categories.includes(activeFilter))
    : portfolioProjects

  const halfProjects = filteredProjects.filter(p => p.type === 'half')
  const thirdProjects = filteredProjects.filter(p => p.type === 'third')

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
      <Header />

      <main className="px-6 md:px-12 lg:px-24 pt-16 pb-32">
        <div className="max-w-[1800px] mx-auto">

          {/* Page title */}
          <motion.h1
            className="text-[40px] md:text-[64px] font-normal leading-none tracking-tighter mb-16"
            style={{ color: '#1c1c1e' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Work
          </motion.h1>

          {/* Filter bar */}
          <motion.div
            className="mb-12 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-[14px] text-gray-500 mr-1">Filter by:</span>
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(isActive ? null : cat)}
                  className="relative text-[14px] font-normal pb-0.5 group"
                  style={{ color: isActive ? '#1c1c1e' : '#6b7280' }}
                >
                  {cat}
                  <span
                    className={`absolute left-0 bottom-0 h-[1.5px] bg-current transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </button>
              )
            })}
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                className="text-[13px] text-gray-400 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            )}
          </motion.div>

          {/* Portfolio grid */}
          {filteredProjects.length === 0 ? (
            <p className="text-gray-400 text-[16px]">No projects in this category yet.</p>
          ) : (
            <div>
              {halfProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {halfProjects.map((project, index) => (
                    <PortfolioHalf key={project.id} project={project} delay={index * 0.1} />
                  ))}
                </div>
              )}
              {thirdProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {thirdProjects.map((project, index) => (
                    <PortfolioThird key={project.id} project={project} delay={index * 0.1} />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  )
}
