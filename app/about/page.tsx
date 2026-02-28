'use client'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBFAF7' }}>
      <Header />
      
      {/* Hero Section */}
      <main className="px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Introduction Text */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl" style={{ color: '#115E3C' }}>
              We&apos;re a collaborative of{" "}
              <span className="line-through">food-world</span> brand and marketing specialists who help restaurants, hotels, bars, and destinations build brands that make people stop scrolling and start booking.
            </p>
          </motion.div>

          {/* Photo Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <img 
                src="images/3.jpg" 
                alt="Your team or company photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Our Menu Section */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[100px] md:text-[215px] font-bold uppercase mb-8 custom-heading leading-[0.8]" style={{ color: '#115E3C' }}>
                  à la carte<br />set menu
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[40px] md:text-[40px] mb-8 leading-[1.2]" style={{ color: '#115E3C' }}>
                  Simply need to update to your menus?<br />
                  Website not converting?<br />
                  Socials not getting clicks?<br />
                  Need a new brand?<br />
                  Just want some fresh ideas?
                </p>
                <p className="text-[18px] md:text-[23px] leading-relaxed mb-6" style={{ color: '#115E3C' }}>  
                  Whatever you need to get cookin, we can help with one-off projects or we can create a bespoke set-monthly package that gets you where you need to be.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Branding Section */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-16">
              <div className="md:col-span-3">
                <h2 className="text-[40px] md:text-[120px] font-bold uppercase mb-8 custom-heading leading-[0.8]" style={{ color: '#115E3C' }}>
                  BRANDING
                </h2>
                <p className="text-[18px] md:text-[26px] leading-[1.2] mb-6 w-2/3" style={{ color: '#115E3C' }}>  
                  They say if marketing is like asking someone on a date, Branding is the reason they say yes. We cook up brands that people fall in love with.  
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-[18px] leading-relaxed mb-6" style={{ color: '#115E3C' }}>  
                  Logo & identity design<br />
                  Brand strategy<br />
                  Brand positioning<br />
                  Brand naming<br />
                  Brand visual identity<br />
                  Brand guidelines<br />
                  Tone of voice<br />
                  Photography & imagery<br />
                  Copywriting
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Section */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-16">
              <div className="md:col-span-3">
                <h2 className="text-[40px] md:text-[120px] font-bold uppercase mb-8 custom-heading leading-[0.8]" style={{ color: '#115E3C' }}>
                  DESIGN
                </h2>
                <p className="text-[18px] md:text-[26px] leading-[1.2] mb-6 w-2/3" style={{ color: '#115E3C' }}>  
                  From menus that make mouths water to websites that convert browsers into bookers, our design work makes your brand impossible to ignore.  
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-[18px] leading-relaxed mb-6" style={{ color: '#115E3C' }}>  
                  Website design<br />
                  Menu design<br />
                  Print materials<br />
                  Signage & wayfinding<br />
                  Packaging design<br />
                  Digital assets<br />
                  Social media templates<br />
                  Marketing collateral<br />
                  Photography direction
                </p>
              </div>
            </div>
          </motion.div>

          {/* Digital Section */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-16">
              <div className="md:col-span-3">
                <h2 className="text-[40px] md:text-[120px] font-bold uppercase mb-8 custom-heading leading-[0.8]" style={{ color: '#115E3C' }}>
                  DIGITAL
                </h2>
                <p className="text-[18px] md:text-[26px] leading-[1.2] mb-6 w-2/3" style={{ color: '#115E3C' }}>  
                  Digital experiences that turn scrollers into diners and browsers into loyal customers. We build the online presence that brings people through your doors.  
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-[18px] leading-relaxed mb-6" style={{ color: '#115E3C' }}>  
                  Website development<br />
                  E-commerce platforms<br />
                  Social media strategy<br />
                  Digital marketing<br />
                  SEO optimization<br />
                  Online booking systems<br />
                  Email marketing<br />
                  Content creation<br />
                  Analytics & reporting
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}