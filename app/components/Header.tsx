'use client'
import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  theme?: 'light' | 'dark'
}

export default function Header({ theme = 'light' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const color = theme === 'dark' ? '#ffffff' : '#1c1c1e'
  const hoverClass = theme === 'dark' ? 'hover:text-white/70' : 'hover:text-gray-600'
  const burgerBg = theme === 'dark' ? 'bg-white' : 'bg-black'

  return (
    <header className="px-6 py-6 md:px-8 lg:px-12">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className={`text-[24px] md:text-[32px] font-semibold tracking-tight ${hoverClass}`} style={{ color }}>
            Murphy+Murphy
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/about" className={`text-[18px] md:text-[23px] leading-relaxed relative group ${hoverClass}`} style={{ color }}>
            Expertise
            <span className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-500 ease-out group-hover:w-full`} style={{ backgroundColor: color }}></span>
          </a>
          <a href="/contact" className={`text-[18px] md:text-[23px] leading-relaxed relative group ${hoverClass}`} style={{ color }}>
            Contact
            <span className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-500 ease-out group-hover:w-full`} style={{ backgroundColor: color }}></span>
          </a>
        </nav>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden flex flex-col space-y-1 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 ${burgerBg} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${burgerBg} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${burgerBg} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="max-w-[1800px] mx-auto">
        <nav className={`md:hidden mt-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pt-4 border-t" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.2)' : '#e5e7eb' }}>
            <a href="/about" className={`text-[18px] py-2 ${hoverClass}`} style={{ color }}>Expertise</a>
            <a href="/contact" className={`text-[18px] py-2 ${hoverClass}`} style={{ color }}>Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
