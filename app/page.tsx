'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { PortfolioHalf, PortfolioThird } from './components/PortfolioCard'
import { portfolioProjects } from './components/portfolioData'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 8000) // Changed from 5000 to 8000 for slower transitions

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
            transform: 'translate(-50%, -50%)'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Showreel"
        ></iframe>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Section - Scrolls over video */}
      <main className="relative z-10 px-6 md:px-8 lg:px-12 h-[66vh] flex items-end pb-12" style={{ backgroundColor: '#FBF7FA' }}>
        <div className="max-w-[1800px] w-full">
          {/* Animated Headline */}
          <motion.h1 
            className="text-[40px] md:text-[64px] font-normal leading-none tracking-tighter w-full md:w-2/3"
            style={{ color: '#000000ff' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             Designer &amp;<br />Creative Director
          </motion.h1>
        </div>
      </main>

      {/* Video Reveal Section - This creates the reveal effect */}
      <section className="relative z-5 h-screen">
        {/* This div will reveal the video as it scrolls into view */}
        <div className="h-full w-full"></div>
        
        {/* Optional Video Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            {/* You can add overlay content here if needed */}
          </motion.div>
        </div>
      </section>

      {/* Continue with sections below - These will scroll over the video initially, then have their own background */}
      <div className="relative z-10" style={{ backgroundColor: '#FBF7FA' }}>
        
        {/* Services Section */}
        <section className="px-6 md:px-12 lg:px-24 pt-20 pb-32">
          <div className="max-w-[1800px] mx-auto">
            {/* Portfolio Section */}
            <motion.div
              className="mb-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-[32px] md:text-[48px] font-normal" style={{ color: '#000000ff' }}>
                  Latest work
                </h2>
                <a 
                  href="#" 
                  className="text-[14px] md:text-[16px] flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  style={{ color: '#000000ff' }}
                >
                  <span>View all projects</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Portfolio Grid */}
              <div className="mb-8">
                {/* First Row - Two Half-Width Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {portfolioProjects
                    .filter(project => project.type === 'half')
                    .slice(0, 2)
                    .map((project, index) => {
                      const delay = 0.2 + (index * 0.1)
                      return <PortfolioHalf key={project.id} project={project} delay={delay} />
                    })}
                </div>
                
                {/* Second Row - Three Third-Width Cards */}
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

        {/* Client Logos Section */}
        <section className="py-32 bg-white">
          <div className="px-6 md:px-12 lg:px-24">
            <div className="max-w-[1800px] mx-auto">
              <motion.div 
                className="mb-32"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="px-6 md:px-0">
                  <p className="text-[18px] md:text-[40px] custom-heading mb-12" style={{ color: '#115E3C' }}>We've worked with</p>
                </div>
                
                <div className="relative h-[600px] overflow-hidden">
                  {[
                    // First set of 10 logos
                    [
                      { name: 'THE MAYFAIR CHIPPY', image: '/logos/THE_MAYFAIR_CHIPPY.jpg' },
                      { name: 'THE RITZ', image: '/logos/TheRitz.jpg' },
                      { name: 'THISTLY CROSS', image: '/logos/ThistlyCrossCider.jpg' },
                      { name: 'AKARUA', image: '/logos/Akarua.jpg' },
                      { name: 'LITTLE WOLD', image: '/logos/LittleWold_Vineyard.jpg' },
                      { name: 'THE ORPINGTON', image: '/logos/The_Orpington.jpg' },
                      { name: 'BON VIVANT', image: '/logos/BON_VIVANT.jpg' },
                      { name: 'CROWNE PLAZA', image: '/logos/COWNE_PLAZA.jpg' },
                      { name: 'CHARD FARM', image: '/logos/Chard_Farm.jpg' },
                      { name: 'POLUPOKE', image: '/logos/Polupoke.jpg' },
                    ],
                    // Second set of 10 logos
                    [
                      { name: 'QUALITY CHOP', image: '/logos/The_Quality_Chop_House.jpg' },
                      { name: 'GREENHOUSES', image: '/logos/The_Greenhouses.jpg' },
                      { name: 'SOHO FARMHOUSE', image: '/logos/Soho_Farmhouse.jpg' },
                      { name: 'QUIRINALE', image: '/logos/Quirinale.jpg' },
                      { name: 'L&G', image: '/logos/LandG.jpg' },
                      { name: 'NOVOTEL', image: '/logos/Novotel.jpg' },
                      { name: 'JAVA WHISKERS', image: '/logos/JavaWhiskers.jpg' },
                      { name: 'NATOORA', image: '/logos/Natoora.jpg' },
                      { name: 'MUCCIS', image: '/logos/Muccis.jpg' },
                      { name: 'GARGOTTE', image: '/logos/Gargotte.jpg' },
                    ],
                    // Third set of 10 logos
                    [
                      { name: 'RARE TEA', image: '/logos/Rare_Tea_Co.jpg' },
                      { name: 'PICTURE', image: '/logos/Picture.jpg' },
                      { name: 'ARROSTO', image: '/logos/Arrosto.jpg' },
                      { name: 'AKOKO', image: '/logos/Akoko.jpg' },
                      { name: 'OKN1', image: '/logos/OKN1.jpg' },
                      { name: 'NOMAD', image: '/logos/Nomad.jpg' },
                      { name: 'EL&H', image: '/logos/ELandh.jpg' },
                      { name: 'PORTLAND', image: '/logos/Portland.jpg' },
                      { name: 'CLIPSTONE', image: '/logos/Clipstone.jpg' },
                      { name: 'THE IVY', image: '/logos/Thelvy.jpg' },
                    ]
                  ].map((logoSet, setIndex) => (
                    <motion.div
                      key={setIndex}
                      className="absolute inset-0 w-full mix-blend-multiply"
                      initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
                      animate={{ 
                        x: activeSlide === setIndex ? "0%" : direction === 1 ? "-100%" : "100%",
                        opacity: activeSlide === setIndex ? 1 : 0 
                      }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      {/* Changed grid-cols-5 to grid-cols-3 for mobile */}
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-0 md:gap-2 px-6 md:px-0">
                        {logoSet.map((logo, index) => (
                          <motion.div
                            key={logo.name}
                            className="flex items-center justify-center p-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <img
                              src={logo.image}
                              alt={logo.name}
                              className="w-full h-auto max-w-[140px] md:max-w-[180px] lg:max-w-[280px] object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Always opaque */}
      <div className="relative z-50" style={{ backgroundColor: '#FBF7FA' }}>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </div>
  )
}