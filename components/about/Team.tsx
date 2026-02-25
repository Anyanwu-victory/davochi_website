"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "David Musa",
    role: "Managing Director",
    image: "/image/team-member-musa.png",
    bio: [
      `Thank you for taking the time to learn more about Davochi Multi Homes. I am honored to share our story of growth and our unwavering commitment to excellence. Since our incorporation on July 7th, 2013, we have dedicated ourselves to building a reputation for integrity and delivery excellence within Nigeria's re-al estate sector. 
      
      Based in Abuja, our focus remains on providing value-driven property solutions across residential, commercial, and mixed-use developments.

      Our seasoned and purpose-driven management team possesses deep industry experience, allowing us to combine local market intelligence with global best practices. Our philosophy is anchored on accountability, transparency, and long-term value creation. 
      
      We strive to stay ahead by utilizing sound planning, regulatory compliance, and efficient project management to ensure every development—from luxury villas to retail malls—aligns with market realities and client expectations.
      
      Whether you are looking for a premium residence, a commercial hub, or a strategic investment opportunity, we are here to provide comfort and security. Our team is dedicated to helping you achieve your goals through personalized property solutions, flexible payment structures, and a commitment to quality that ensures every home we create is built for today and secured for the future.`
    ],
  },

  {
    id: 2,
    name: "Chinyere David Musa",
    role: "General Manager",
    image: "/image/team-member-chinyere.png",
    bio: [
      `On behalf of the operations team at Davochi Multi Homes, I want to thank you for choosing us as your real estate partner. Since our company was incorporated on July 7th, 2013, we have focused on building a reputation for delivery excellence and providing value-driven property solutions. 
      
      As General Manager, my primary focus is overseeing our administration and client relations to ensure that every interaction you have with us reflects our commitment to service excellence.

      Our operational philosophy is built on accountability and transparency, ensuring that your journey with us is clear and reliable. We manage a fully integrated suite of services—from residential development and land sales to property and facility management—designed to meet your evolving needs. By combining local market intelligence with global best practices, we ensure that the management and maintenance of your assets are handled with professional care.
     
      Our mission is to deliver high-quality real estate solutions that provide sustainable value while keeping our clients’ goals at the heart of every decision. We strive for excellence through continuous improvement and operational efficiency, ensuring that we build for today while planning responsibly for your future. We prioritize superior standards in our execution to ensure your property remains a source of pride and value.`
      
    ],
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="team" className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 py-5 ">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-12"
        >
          <div className="">
            {/* Label */}
            <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
              The Core Team
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
              Meet the Minds Behind Davochi
            </h2>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-16 md:space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16"
            >
              {/* Image Section - Top on mobile, Left on desktop */}
              <div className="w-full md:w-70 lg:w-[320px] shrink-0">
                <div className="relative">
                  {/* Yellow Border */}
                  <div className="absolute left-0  bottom-0 w-1 md:w-1.5 bg-[#FBBD00] z-10 h-1/2" />

                  {/* Image Container */}
                  <div className="relative h-150 md:h-150 lg:h-134 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content Section - Bottom on mobile, Right on desktop */}
              <div className="flex-1">
                {/* Role Label */}
                <p className="text-[#FFBA32] text-lg md:text-[20px] font-semibold font-inter capitalize tracking-wide mb-6">
                  {member.role}
                </p>

                {/* Name */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-mono font-normal text-gray-900 mb-6">
                  {member.name}
                </h3>

                {/* Bio Paragraphs */}
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
