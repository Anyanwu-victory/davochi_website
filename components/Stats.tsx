'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import DavochiSignature from './animations/DavochiSignature'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '1,200+', label: 'Happy Clients', suffix: '' },
    { number: '1,000+', label: 'Projects Done', suffix: '' },
    { number: '3K', label: 'Properties', suffix: '+' },
    { number: '7', label: 'Years Experience', suffix: 'Y+' },
  ]

  return (
 
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                <span className="text-gold-500">{stat.number}</span>
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <DavochiSignature/>
    </section>
  )
}

export default Stats
