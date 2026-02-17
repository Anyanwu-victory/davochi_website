'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
      text: 'Working with Devachi was an absolute pleasure. They transformed our vision into reality with exceptional attention to detail. The quality of craftsmanship is outstanding!',
      highlight: 'Excellent Communication',
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      rating: 5,
      text: 'The team at Devachi delivered beyond our expectations. Their professionalism and commitment to excellence made the entire construction process smooth and stress-free.',
      highlight: 'Quality & Timeliness',
    },
    {
      name: 'Emily Davis',
      role: 'Business Owner',
      rating: 5,
      text: 'Devachi helped us build our dream commercial space. Their innovative designs and sustainable approach perfectly aligned with our business values.',
      highlight: 'Innovative Design',
    },
    {
      name: 'David Wilson',
      role: 'Real Estate Developer',
      rating: 5,
      text: 'As a developer, I appreciate Devachi\'s attention to detail and commitment to quality. They consistently deliver projects on time and within budget.',
      highlight: 'Professional Service',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why you should Experience <span className="text-gold-500">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Highlight */}
              <div className="inline-block bg-gold-100 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
