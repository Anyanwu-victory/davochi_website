'use client'

import { motion } from 'framer-motion'
import SignatureSection from '@/components/animations/DavochiSignature'

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-[74.7px] lg:text-[74.7px] font-normal tracking-tight font-serif">
              Experience Excellence 
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mt-4"
          >
            <p className="text-sm md:text-[16px] text-gray-200 leading-relaxed font-normal">
              Step into a realm of unparalleled grandeur, where the future of luxury is elegantly crafted today
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>

        {/* Gradient Blend - positioned at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-75 bg-linear-to-b from-transparent via-white/50 to-white pointer-events-none z-20" />
      </div>

      {/* Signature Section - overlaps the hero */}
      <div className="relative -mt-40 z-30 pb-10">
        <div className="container-custom px-4">
          <SignatureSection />
        </div>
      </div>
    </section>
  )
}

export default Hero