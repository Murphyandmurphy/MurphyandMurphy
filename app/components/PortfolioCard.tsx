'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
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

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Branding':         { bg: '#FDE8EE', text: '#1c1c1e' },
  'Design':           { bg: '#EDE8F7', text: '#1c1c1e' },
  'Website Design':   { bg: '#E2F4EB', text: '#1c1c1e' },
  'Digital & Social': { bg: '#FEF3E2', text: '#1c1c1e' },
}

function CategoryLozenge({ category }: { category: string }) {
  const colors = CATEGORY_COLORS[category] ?? { bg: '#F0F0F0', text: '#555555' }
  return (
    <span
      className="inline-block text-sm px-5 py-1.5 rounded-full"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {category}
    </span>
  )
}

export function PortfolioHalf({ project, delay = 0 }: PortfolioCardProps) {
  const inner = (
    <>
      <div className={`relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden mb-4 ${project.backgroundColor}`}>
        {project.content}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map(cat => <CategoryLozenge key={cat} category={cat} />)}
        </div>
        <h3 className="text-2xl font-medium" style={{ color: '#1c1c1e' }}>{project.title}</h3>
      </div>
    </>
  )

  return (
    <motion.div
      className="col-span-1 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {project.link ? (
        <Link href={project.link}>{inner}</Link>
      ) : (
        inner
      )}
    </motion.div>
  )
}

export function PortfolioThird({ project, delay = 0 }: PortfolioCardProps) {
  const inner = (
    <>
      <div className={`aspect-square rounded-lg overflow-hidden mb-4 relative ${project.backgroundColor}`}>
        {project.content}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map(cat => <CategoryLozenge key={cat} category={cat} />)}
        </div>
        <h3 className="text-2xl font-medium" style={{ color: '#1c1c1e' }}>{project.title}</h3>
      </div>
    </>
  )

  return (
    <motion.div
      className="col-span-1 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {project.link ? (
        <Link href={project.link}>{inner}</Link>
      ) : (
        inner
      )}
    </motion.div>
  )
}
