'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Home } from 'lucide-react'
import Button from './Button'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cards = [
    {
      icon: Building2,
      title: 'Commercial Building',
      description: 'Transform your business space with our innovative commercial building solutions.',
    },
    {
      icon: Home,
      title: 'Residential Building',
      description: 'Create your dream home with our expert residential construction services.',
    },
  ]

  return (
    <section ref={ref} id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {card.description}
              </p>
              <Button variant="outline" size="sm">
                View More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
