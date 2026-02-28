'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { getCaseStudyBySlug } from '../../../data/caseStudiesData'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

interface CaseStudyPageProps {
  params: {
    category: string
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.category, params.slug)
  const [isExpanded, setIsExpanded] = useState(false)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
      <Header />
      
      {/* Hero Section */}
      <main className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
        <div className="max-w-[1800px] mx-auto">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to work
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="md:col-span-2">
              <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-normal leading-tight mb-6" style={{ color: '#000000ff' }}>
                {caseStudy.title}
              </h1>
              
              {/* Description with Read More functionality */}
              <div className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 mb-8">
                <p className="mb-4">{caseStudy.description}</p>
                
                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && caseStudy.expandedDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0.0, 0.2, 1],
                        opacity: { duration: 0.3 },
                        height: { duration: 0.5 }
                      }}
                      className="space-y-4 overflow-hidden"
                    >
                      {caseStudy.expandedDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className={paragraph.startsWith('**') ? 'font-medium text-black' : ''}>
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Read More Button */}
              {caseStudy.expandedDescription && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[14px] text-gray-600 hover:text-black transition-colors"
                >
                  {isExpanded ? 'Read less ↑' : 'Read more →'}
                </button>
              )}
            </div>
            
            {/* Deliverables */}
            <div>
              <h3 className="text-[14px] font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Delivered:
              </h3>
              <ul className="space-y-2">
                {caseStudy.deliverables?.map((item, index) => (
                  <li key={index} className="text-[14px] text-gray-700">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hero Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden mb-20"
          >
            <img
              src={caseStudy.heroImage}
              alt={`${caseStudy.title} hero image`}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-12 h-12 mx-auto mb-4">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4l6 18h18l-14.5 10.5L39.5 50 24 36 8.5 50l6-17.5L0 22h18L24 4z"/>
                  </svg>
                </div>
                <h2 className="text-[18px] md:text-[24px] font-normal mb-2">
                  {caseStudy.heroTitle || 'Inspiration'}
                </h2>
                <p className="text-[14px] md:text-[16px] opacity-80">
                  {caseStudy.heroSubtitle || 'The guiding star'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Brief */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6" style={{ color: '#000000ff' }}>
              Project Brief
            </h2>
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
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6" style={{ color: '#000000ff' }}>
              Challenge
            </h2>
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
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6" style={{ color: '#000000ff' }}>
              Strategy
            </h2>
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
            <h2 className="text-[20px] md:text-[24px] font-normal mb-6" style={{ color: '#000000ff' }}>
              Solution
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-4xl">
              {caseStudy.solution}
            </p>
          </motion.section>

          {/* Image Gallery with Descriptions */}
          {caseStudy.imageGallery?.map((imageSection, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              {/* Images */}
              <div className={`grid gap-4 mb-8 ${
                imageSection.images.length === 2 ? 'md:grid-cols-2' : 
                imageSection.images.length === 3 ? 'md:grid-cols-3' : 
                'grid-cols-1'
              }`}>
                {imageSection.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${caseStudy.title} detail ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Description */}
              <h3 className="text-[18px] md:text-[20px] font-normal mb-4" style={{ color: '#000000ff' }}>
                {imageSection.title}
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700">
                {imageSection.description}
              </p>
            </motion.section>
          ))}

        </div>
      </main>

      <Footer />
    </div>
  )
}