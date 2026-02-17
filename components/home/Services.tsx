'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ChevronDown, Building2, TrendingUp, BarChart3, Settings, MessageSquare } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Building2,
    title: 'Real Estate Development',
    description:
      'We develop premium residential and commercial properties across Africa, delivering world-class infrastructure designed for modern living.',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Property Sales & Marketing',
    description:
      'Our expert sales team ensures your property reaches the right buyers through strategic marketing and strong market positioning.',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Real Estate Investment Advisory',
    description:
      'We guide investors through smart property decisions backed by in-depth market analysis, maximizing returns with minimal risk.',
  },
  {
    id: 4,
    icon: Settings,
    title: 'Property & Facility Management',
    description:
      'From maintenance to tenant management, we handle every aspect of your property to keep it in peak condition year-round.',
  },
  {
    id: 5,
    icon: MessageSquare,
    title: 'Real Estate Consultancy',
    description:
      'We provide expert advisory services tailored to your goals—whether buying, selling, leasing, or developing real estate.',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section ref={ref} id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custm px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* Label */}
            <p className="text-[#FBBD00] mb-4 text-sm uppercase tracking-widest font-mono">
              Our Services
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-bold capitalize leading-tight mb-6">
              What we offer our clients
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              We exist to create value-driven properties that blend luxury with
              functionality, and to provide unforgettable client experiences
              powered by professionalism, authenticity, and heart.
            </p>

            {/* Service Items */}
            <div className="flex flex-col gap-3">
              {services.map((service, index) => {
                const isActive = activeId === service.id
                const Icon = service.icon

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Clickable Row */}
                    <button
                      onClick={() => handleToggle(service.id)}
                      className={`w-full flex items-center justify-between gap-4 px-4 py-4 rounded-xl
                        transition-all duration-300 text-left group
                        ${isActive
                          ? 'bg-[#FBBD00]/10 border border-[#FBBD00]/40'
                          : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon Box */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300
                          ${isActive ? 'bg-[#FBBD00]/20' : 'bg-white border border-gray-200 group-hover:border-[#FBBD00]/30'}`}
                        >
                          <Icon
                            size={22}
                            className={`transition-colors duration-300 ${isActive ? 'text-[#FBBD00]' : 'text-gray-700'}`}
                          />
                        </div>

                        {/* Title */}
                        <span className={`font-mono font-semibold text-sm md:text-base transition-colors duration-300
                          ${isActive ? 'text-gray-900' : 'text-gray-800'}`}
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* Chevron */}
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 transition-all duration-300 
                          ${isActive ? 'rotate-180 text-[#FBBD00]' : 'text-gray-400'}`}
                      />
                    </button>

                    {/* Expandable Description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="description"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pt-3 pb-4 text-sm text-gray-500 leading-relaxed border-l-2 border-[#FBBD00] ml-4 mt-1">
                            {service.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE - Image ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/couple_hugging.png"
                alt="Couple viewing property"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services