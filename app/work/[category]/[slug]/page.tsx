'use client'
import { use } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { getCaseStudyBySlug } from '../../../data/caseStudiesData'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

interface CaseStudyPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { category, slug } = use(params)
  const caseStudy = getCaseStudyBySlug(category, slug)
  const [isExpanded, setIsExpanded] = useState(false)

  if (!caseStudy) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
        <Header />
        <main className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
          <div className="max-w-[1800px] mx-auto">
            <Link href="/work" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to work
            </Link>
            <p className="text-gray-500 text-[18px]">Project not found.</p>
          </div>
        </main>
        <div className="bg-white"><Footer /></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
      <Header />

      <main className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
        <div className="max-w-[1800px] mx-auto">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to work
            </Link>
          </motion.div>

          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="md:col-span-2">
              <h1 className="text-[28px] md:text-[48px] font-medium leading-tight mb-6" style={{ color: '#1c1c1e' }}>
                {caseStudy.title}
              </h1>

              <div className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-4">
                <p>{caseStudy.description}</p>
              </div>

              <AnimatePresence>
                {isExpanded && caseStudy.expandedDescription && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-4">
                      {caseStudy.expandedDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className={paragraph.startsWith('**') ? 'font-medium text-black' : ''}>
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {caseStudy.expandedDescription && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[14px] text-gray-500 hover:text-black transition-colors"
                >
                  {isExpanded ? 'Read less ↑' : 'Read more →'}
                </button>
              )}
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Delivered
              </h3>
              <ul className="space-y-2">
                {caseStudy.deliverables?.map((item, index) => (
                  <li key={index} className="text-[15px] text-gray-700">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-20"
          >
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Brief */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6">Project Brief</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-4xl">
              {caseStudy.projectBrief}
            </p>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6">Challenge</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-4xl">
              {caseStudy.challenge}
            </p>
          </motion.section>

          {/* Strategy */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6">Strategy</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-4xl">
              {caseStudy.strategy}
            </p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6">Solution</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-4xl">
              {caseStudy.solution}
            </p>
          </motion.section>

          {/* Image gallery */}
          {caseStudy.imageGallery?.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className={`grid gap-4 mb-8 ${
                section.images.length === 2 ? 'md:grid-cols-2' :
                section.images.length === 3 ? 'md:grid-cols-3' :
                'grid-cols-1'
              }`}>
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${caseStudy.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-[18px] md:text-[20px] font-normal mb-3">{section.title}</h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700">
                {section.description}
              </p>
            </motion.section>
          ))}

        </div>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  )
}
