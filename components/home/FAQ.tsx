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
      question: 'How do I know which service I need for my business?',
      answer: 'Yes, we offer comprehensive financing options through our partner banks. Our team will guide you through the mortgage application process and help you secure the best rates available.',
    },
    {
      question: 'What happens if I don’t file an Annual Report?',
      answer: 'Absolutely! We provide construction services on client-owned land. Our team will work with you to understand your vision and deliver a property that exceeds your expectations.',
    },
    {
      question: 'Do I need a Registered Agent if I already have a business address?',
      answer: 'Yes, all our properties can be customized to match your preferences. From floor plans to finishes, we work closely with you to create your ideal space.',
    },
    {
      question: 'What’s the difference between a Business Amendment and a Foreign Qualification?',
      answer: 'We offer flexible payment plans tailored to your financial situation. Our standard schedule includes initial deposit, milestone payments during construction, and final payment upon completion.',
    },
    {
      question: 'How do I prove my business is in good standing?',
      answer: 'We offer flexible payment plans tailored to your financial situation. Our standard schedule includes initial deposit, milestone payments during construction, and final payment upon completion.',
    },
    {
      question: 'What if my business was revoked, can I get it back?',
      answer: 'We offer flexible payment plans tailored to your financial situation. Our standard schedule includes initial deposit, milestone payments during construction, and final payment upon completion.',
    },
  ]

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          
            {/* Label */}
            <p className="text-[#FBBD00] mb-4 text-sm capitalize tracking-widest font-mono">
              Frequently Asked Questions
            </p>

          
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-bold capitalize leading-tight mb-6 lg:mb-10">
              What do you want to Know?
            </h2>
        </motion.div>

        <div className="mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white  overflow-hidden border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full  pl-0 pr-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-light text-gray-900 pr-8 font-mano text-sm md:text-xl lg:text-2xl">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gold-500 transition-transform duration-300 shrink-0',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden "
              >
                <div className="pl-6 pb-6 text-gray-600 leading-relaxed lg:text-[19px] bg-gray-100 lg:pr-12">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ
