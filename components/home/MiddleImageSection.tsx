"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";


const MiddleImageSection = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <>
    {/* Image Section */}
      <div className="relative w-full mx-auto  sm:px-8 lg:px-30 xl:px-48">
        {/* Image Container */}
        <div className="relative h-100 md:h-125 lg:h-screen  md:px-10 lg:px-24 mx-auto">
          {/* Full-width Image */}
          <Image
            src="/projectsImage.png"
            alt="Projects Image"
            fill
            className="object-cover md:object-center project-clip-image"
            priority
          />
        </div>

        {/* Text Content - Below image on mobile, overlapping on desktop */}
        <div className="relative mx-6 lg:max-w-6xl xl:max-w-7xl md:mx-10 lg:mx-10 
        xl:mx-auto py-8 md:py-12 lg:pb-6 lg:pt-0 -mt-10">
          <p className="text-[#FBBD00] mb-4 md:mb-5 text-[21px] md:text-base capitalize tracking-wide font-mono">
            Projects
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 justify-between">
            {/* Left - Title */}
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-mono capitalize leading-relaxed
               text-black font-semibold "
              >
                Smart
                <br />
                Opportunities
              </h2>
            </div>

            {/* Right - Description and Button */}
            <div className="w-full md:w-[55%] lg:w-[40%]">
              <p className="leading-relaxed text-[15px] xl:text-base mb-6 text-gray-600">
                We exist to create value-driven properties that blend luxury
                with functionality, and to provide unforgettable client
                experiences powered by professionalism, authenticity, and heart.
              </p>

              <Button
                className="bg-white text-black px-5 py-3 font-semibold inline-flex items-center 
          gap-4 hover:border hover:border-[#FFBA32] transition-all duration-300 shadow-lg"
              >
                Learn More
                <ArrowRight size={24} className="text-[#FFBA32] " />
              </Button>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default MiddleImageSection;