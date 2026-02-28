'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Faq {
  _id:      string
  question: string
  answer:   string
}

interface FaqProps {
  faqs: Faq[]
}

const FAQ = ({ faqs }: FaqProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // ── string | null to match Sanity's _id type ──────────────────────────────
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (_id: string) => {
    setOpenId(openId === _id ? null : _id)
  }

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#FBBD00] mb-4 text-sm capitalize tracking-widest font-mono">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-bold capitalize leading-tight mb-6 lg:mb-10">
            What do you want to Know?
          </h2>
        </motion.div>

        <div className="mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq._id   // ← consistent comparison

            return (
              <motion.div
                key={faq._id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white overflow-hidden border-b border-gray-200"
              >
                <button
                  onClick={() => handleToggle(faq._id)}
                  className="w-full pl-0 pr-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-light text-gray-900 pr-8 font-mano text-sm md:text-xl lg:text-2xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-gold-500 transition-transform duration-300 shrink-0',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-6 pb-6 text-gray-600 leading-relaxed lg:text-[19px] bg-gray-100 lg:pr-12 font-inter">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ