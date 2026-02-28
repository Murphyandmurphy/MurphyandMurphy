'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export interface PortfolioProject {
  id: string
  type: 'half' | 'third'
  title: string
  categories: string[]
  backgroundColor: string
  link?: string
  content: ReactNode
}

interface PortfolioCardProps {
  project: PortfolioProject
  delay?: number
}

export function PortfolioHalf({ project, delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div 
      className="col-span-1 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      onClick={() => project.link && window.open(project.link, '_blank')}
    >
      <div className={`relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden mb-4 ${project.backgroundColor}`}>
        {project.content}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600">{project.categories.join(' / ')}</p>
        <h3 className="text-xl font-medium" style={{ color: '#000000ff' }}>{project.title}</h3>
      </div>
    </motion.div>
  )
}

export function PortfolioThird({ project, delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div 
      className="col-span-1 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      onClick={() => project.link && window.open(project.link, '_blank')}
    >
      <div className={`aspect-square rounded-lg overflow-hidden mb-4 relative ${project.backgroundColor}`}>
        {project.content}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600">{project.categories.join(' / ')}</p>
        <h3 className="text-xl font-medium" style={{ color: '#000000ff' }}>{project.title}</h3>
      </div>
    </motion.div>
  )
}