'use client'
import { use } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
          <p className="text-gray-500 text-[18px]">Project not found.</p>
        </main>
        <div className="bg-white"><Footer /></div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FBF7FA' }}>

      {/* Hero — full viewport height, image extends beyond fold, title sits at bottom */}
      <div className="relative h-[120vh]">

        {/* Fixed header on top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header theme="dark" />
        </div>

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Title pinned to bottom of the section (just below viewport fold) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 lg:px-24 pb-16">
          <div className="max-w-[1800px] mx-auto">
            <motion.h1
              className="text-[40px] md:text-[72px] lg:text-[96px] font-medium leading-none tracking-tighter text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              {caseStudy.title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="px-6 md:px-12 lg:px-24 pt-20 pb-32">
        <div className="max-w-[1800px] mx-auto">

          {/* Project header — description + deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            <div className="md:col-span-2">
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
                        <p key={index}>{paragraph}</p>
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
