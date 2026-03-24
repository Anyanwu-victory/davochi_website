// components/Team.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ── Type matching your Sanity schema ─────────────────────────────────────────
interface TeamMember  {
  _id:   string
  name:  string
  role:  string
  image: string
  bio:   string[]
}

interface TeamProps  {
  members: TeamMember[];
}

const Team = ({ members }: TeamProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="team" className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 py-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-12"
        >
          <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
            The Core Team
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
            Meet the Minds Behind Davochi
          </h2>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-16 md:space-y-20">
          {members.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16"
            >
              {/* Image */}
              <div className="w-full md:w-70 lg:w-[320px] shrink-0">
                <div className="relative">
                  <div className="absolute left-0 bottom-0 w-1 md:w-1.5 bg-[#FBBD00] z-10 h-1/2" />
                  <div className="relative h-150 md:h-150 lg:h-134 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover object-center h-full mt-5"
                        loading="lazy"
                        
                      />
                    ) : (
                      // Fallback placeholder if no image in Sanity
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[#FFBA32] text-lg md:text-[20px] font-semibold font-inter capitalize tracking-wide mb-6">
                  {member.role}
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-mono font-normal text-gray-900 mb-6">
                  {member.name}
                </h3>
                <div className="space-y-4">
                  {member.bio.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-[#585858] text-sm md:text-base leading-relaxed whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;