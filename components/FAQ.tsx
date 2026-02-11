'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Can I get a Mortgage / Property Credit Loan?',
      answer: 'Yes, we offer comprehensive financing options through our partner banks. Our team will guide you through the mortgage application process and help you secure the best rates available.',
    },
    {
      question: 'Do you build on my land?',
      answer: 'Absolutely! We provide construction services on client-owned land. Our team will work with you to understand your vision and deliver a property that exceeds your expectations.',
    },
    {
      question: 'Can I customize the property to my taste?',
      answer: 'Yes, all our properties can be customized to match your preferences. From floor plans to finishes, we work closely with you to create your ideal space.',
    },
    {
      question: 'What is the payment schedule?',
      answer: 'We offer flexible payment plans tailored to your financial situation. Our standard schedule includes initial deposit, milestone payments during construction, and final payment upon completion.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What do you want to <span className="text-gold-500">Know?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our services and processes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gold-500 transition-transform duration-300 flex-shrink-0',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
