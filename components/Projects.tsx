'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Devachi Luxury Villa, Baga District',
      location: 'Baga District',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    },
    {
      title: 'Mirvana Heights, Lifecamp',
      location: 'Lifecamp',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    },
    {
      title: 'Devachi Mall, Kubwa',
      location: 'Kubwa',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    },
    {
      title: 'Devachi Shopping Complex, Dei Dei',
      location: 'Dei Dei',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096',
    },
  ]

  return (
    <section ref={ref} id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gold-500">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of exceptional properties that showcase our commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.location}</p>
                <div className="flex items-center gap-2 text-gold-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
