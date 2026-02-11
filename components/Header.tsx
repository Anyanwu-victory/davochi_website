'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'
import { cn } from '@/lib/utils'

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      // The border fully expands over the first 200px of scroll
      const scrollY = window.scrollY
      const maxScroll = 200 // Adjust this value to control expansion speed
      const progress = Math.min(scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'House Types', href: '#house-types' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Calculate border width (starts at ~60% and expands to 100%)
  const borderWidth = 80 + (scrollProgress * 40) // 60% to 100%
  
  // Calculate background opacity
  const bgOpacity = scrollProgress * 0.95 // 0 to 0.95
  
  // Border opacity (visible at start, fades out as it expands)
  const borderOpacity = 1 - scrollProgress // 1 to 0

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:bg-transparent bg-black">
      {/* Background layer with expanding opacity */}
      <div 
        className="absolute inset-0 bg-black backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Content layer */}
      <div className="relative">
        <div className="container-custom px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-20 text-white">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold relative z-10"
            >
              <Image 
                src="/Logo.svg" 
                alt="Logo" 
                width={100} 
                height={100} 
                className="inline-block ml-2" 
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-gold-500"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block relative z-10"
            >
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Book a Tour
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white relative z-10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Expanding Border Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ease-out"
          style={{ 
            width: `${borderWidth}%`,
            backgroundColor: 'white',
            opacity: borderOpacity
          }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-white relative"
          >
            <div className="container-custom py-4 space-y-4 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-2 border-white text-white hover:bg-white/10"
              >
                Book a Tour
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header