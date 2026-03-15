'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { PortfolioHalf, PortfolioThird } from './components/PortfolioCard'
import { portfolioProjects } from './components/portfolioData'

export default function Home() {
  const [sentenceIndex, setSentenceIndex] = useState(0)

  const sentences = [
    'build great brands.',
    'Tell great stories.',
    'Build websites that convert.',
    'Create socials that stop customers flicking and start clicking.',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF7FA' }}>
      {/* Header with high z-index to stay on top */}
      <div className="relative z-50 bg-white" style={{ backgroundColor: '#FBF7FA' }}>
        <Header />
      </div>
      
      {/* Static Video Background - Fixed behind everything */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe
          src="https://player.vimeo.com/video/465318573?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&badge=0&autopause=0"
          className="w-full h-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
            transform: 'translate(-50%, -50%)',
            border: 'none'
          }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Showreel"
        ></iframe>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
            
      {/* Hero Section - Scrolls over video */}
      <main className="relative z-10 px-6 md:px-8 lg:px-12 h-[66vh] flex items-end pb-12" style={{ backgroundColor: '#FBF7FA' }}>
        <div className="max-w-[1800px] w-full">
          <motion.h1 
            className="text-[40px] md:text-[64px] font-normal leading-none tracking-tighter w-full md:w-2/3"
            style={{ color: '#1c1c1eff' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             We&apos;re a creative collaborative who partner with businesses big and small to build memorable brands on every platform.
          </motion.h1>
        </div>
      </main>

      {/* Video Reveal Section */}
      <section className="relative z-5 h-screen">
        <div className="h-full w-full"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
          </motion.div>
        </div>
      </section>

      <div className="relative z-10" style={{ backgroundColor: '#FBF7FA' }}>

        {/* Animated statements section */}
        <section className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex items-start gap-4 overflow-hidden h-[180px] md:h-[200px] lg:h-[200px]">
              <span className="text-[40px] md:text-[64px] lg:text-[80px] font-normal leading-none tracking-tighter shrink-0" style={{ color: '#1c1c1e' }}>
                We
              </span>
              <div className="overflow-hidden relative min-w-0 flex-1" style={{ isolation: 'isolate' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={sentenceIndex}
                    className="text-[40px] md:text-[64px] lg:text-[80px] font-normal leading-none tracking-tighter"
                    style={{ color: '#1c1c1e', willChange: 'transform' }}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-110%' }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {sentences[sentenceIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 pt-20 pb-32">
          <div className="max-w-[1800px] mx-auto">
            <motion.div
              className="mb-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-[32px] md:text-[48px] font-normal" style={{ color: '#1c1c1eff' }}>
                  Latest work
                </h2>
                <a
                  href="/work"
                  className="text-[14px] md:text-[16px] flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  style={{ color: '#1c1c1eff' }}
                >
                  <span>View all projects</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {portfolioProjects
                    .filter(project => project.type === 'half')
                    .slice(0, 2)
                    .map((project, index) => {
                      const delay = 0.2 + (index * 0.1)
                      return <PortfolioHalf key={project.id} project={project} delay={delay} />
                    })}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioProjects
                    .filter(project => project.type === 'third')
                    .slice(0, 3)
                    .map((project, index) => {
                      const delay = 0.4 + (index * 0.1)
                      return <PortfolioThird key={project.id} project={project} delay={delay} />
                    })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <div className="relative z-50" style={{ backgroundColor: '#FBF7FA' }}>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </div>
  )
}