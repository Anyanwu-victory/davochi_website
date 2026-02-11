'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Home, PaintBucket, Shield } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Building2,
      title: 'Architectural Development',
      description: 'Innovative designs that blend aesthetics with functionality',
    },
    {
      icon: Home,
      title: 'Construction & Building',
      description: 'Expert construction services for residential and commercial projects',
    },
    {
      icon: PaintBucket,
      title: 'Interior Designs Services',
      description: 'Transform spaces with our creative interior design solutions',
    },
    {
      icon: Shield,
      title: 'Property Credit Insurance',
      description: 'Secure your investment with comprehensive insurance coverage',
    },
  ]

  return (
    <section ref={ref} id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What we offer our <span className="text-gold-500">clients</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We provide comprehensive real estate solutions tailored to meet your unique needs. 
              From architectural design to construction and property management, we deliver 
              excellence at every stage.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
