// components/Footer.tsx
'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <>
      {/* Animated CTA Section */}
      <motion.section 
        className="bg-[#115E3C] px-6 py-20 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1800px] mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Have something we could work on together?<br />
            we'd love to chat.
          </motion.h2>
          <motion.p 
            className="text-white text-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Call or drop us a message.
          </motion.p>
    
          <motion.div 
            className="text-[96px] md:text-[176px] text-white footer-script"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Gather together
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#115E3C] px-6 pb-8 md:px-8 lg:px-12">
  <div className="max-w-[1800px] mx-auto">
    <div className="grid md:grid-cols-4 gap-8 text-white text-sm">
      <div>
        <p className="text-[18px] md:text-[23px]">London & Cornwall</p>
      </div>
      <div>
        <p className="text-[18px] md:text-[23px]">studio@gather-together.co.uk</p>
        <p className="text-[18px] md:text-[23px]">+44 (0)1208 816 870</p>
      </div>
      <div>
        <p>Follow us</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:underline">📷</a>
        </div>
      </div>
      <div className="flex justify-end">
        <img 
          src="images/Clean-Creatives-Seal.png" 
          alt="Creative Approved Logo"
          className="w-16 h-16 md:w-30 md:h-30 opacity-50 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
    <div className="mt-8 pt-8">    
      <p className="text-white text-xs">
        All works © Gather Together 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </>
  )
}