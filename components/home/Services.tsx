"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Building2,
  TrendingUp,
  BarChart3,
  Settings,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: "/real_estate_development.svg",
    title: "Real Estate Development",
    description:
      "We develop premium residential and commercial properties across Africa, delivering world-class infrastructure designed for modern living.",
  },
  {
    id: 2,
    icon: "/property_icon.svg",
    title: "Property Sales & Marketing",
    description:
      "Our expert sales team ensures your property reaches the right buyers through strategic marketing and strong market positioning.",
  },
  {
    id: 3,
    icon: "/investment_icon.svg",
    title: "Real Estate Investment Advisory",
    description:
      "We guide investors through smart property decisions backed by in-depth market analysis, maximizing returns with minimal risk.",
  },
  {
    id: 4,
    icon: "/manager_icon.svg",
    title: "Property & Facility Management",
    description:
      "From maintenance to tenant management, we handle every aspect of your property to keep it in peak condition year-round.",
  },
  {
    id: 5,
    icon: "/consultancy_icon.svg",
    title: "Real Estate Consultancy",
    description:
      "We provide expert advisory services tailored to your goals—whether buying, selling, leasing, or developing real estate.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section ref={ref} id="services" className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 ">
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
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-bold capitalize leading-tight mb-6 lg:mb-10">
              What we offer our clients
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed mb-10 max-w-150 lg:mb-20">
              We exist to create value-driven properties that blend luxury with
              functionality, and to provide unforgettable client experiences
              powered by professionalism, authenticity, and heart.
            </p>

            {/* Service Items */}
            <div className="flex flex-col gap-3">
              {services.map((service, index) => {
                const isActive = activeId === service.id;
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`flex gap-5 p-4 rounded-[7px] transition-all duration-300 cursor-pointer bg-[#F5F6FA]`}
                      onClick={() => handleToggle(service.id)}
                    >
                      {/* ICON */}
                      <div
                        className={`w-12 h-12  flex items-center justify-center shrink-0`}
                      >
                      
                        <Image
                        src={service.icon}
                        alt="services icon"
                        width={48}
                        height={48}
                        />
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="flex flex-col w-full">
                        {/* TITLE */}
                        <h3
                          className={`font-mono  text-[20px] md:text-[23px] transition-colors duration-300 
                            justify-center items-center
        ${isActive ? "text-[#FBBD00]" : "text-gray-800"}`}
                        >
                          {service.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm md:text-[20px] text-gray-500 leading-relaxed">
                                {service.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE - Image ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 lg:mt-40"
          >
            <div
              className=" 
  relative 
  w-full 
  h-10 
  sm:h-100 
  md:h-130 
  lg:h-150 
  xl:h-150 
  overflow-hidden
"
            >
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
  );
};

export default Services;
