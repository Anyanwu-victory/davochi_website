"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Service {
  _id:         string
  title:       string
  description: string
  icon:        string
}

interface ServiceProps {
  services: Service[];
}

const Services = ({ services }: ServiceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ── Use string | null to match Sanity's _id type ─────────────────────────
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (_id: string) => {
    setActiveId(activeId === _id ? null : _id);
  };

  return (
    <section ref={ref} id="services" className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-[#FBBD00] mb-4 text-sm uppercase tracking-widest font-mono">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-bold capitalize leading-tight mb-6 lg:mb-10">
              What we offer our clients
            </h2>

            <p className="text-gray-500 font-sans font-medium text-sm md:text-base leading-relaxed mb-10 max-w-150 lg:mb-10">
              We exist to create value-driven properties that blend luxury with
              functionality, and to provide unforgettable client experiences
              powered by professionalism, authenticity, and heart.
            </p>

            {/* Service Items */}
            <div className="flex flex-col gap-3">
              {services.map((service, index) => {
                // ── Compare against _id, not id ───────────────────────────
                const isActive = activeId === service._id;

                return (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="flex gap-5 p-4 rounded-[7px] transition-all duration-300 cursor-pointer bg-[#F5F6FA]"
                      onClick={() => handleToggle(service._id)}
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 flex items-center justify-center shrink-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={48}
                          height={48}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col w-full">
                        <h3
                          className={`font-mono text-[20px] md:text-[23px] transition-colors duration-300 ${
                            isActive ? "text-[#FBBD00]" : "text-gray-800"
                          }`}
                        >
                          {service.title}
                        </h3>

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
            <div className="relative w-full h-100 sm:h-100 md:h-130 lg:h-150 xl:h-150 overflow-hidden">
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