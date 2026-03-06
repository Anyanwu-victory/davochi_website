"use client";

import {
  motion,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hero" className="">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden mb-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/image/house-hero-image.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 sm:px-24 lg:px-30 xl:px-48  py-4">
        <motion.div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          {/* Label */}
          <div>
            <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
              Our homes
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
              Smart Homes, <br className="hidden md:flex" /> Smart Investments
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="font-inter text-[16px] text-[#585858] whitespace-pre-line  leading-7">
              Imbued with next-gen smart technology, our homes offer unparalleled convenience and security. Every corner, every space is meticulously crafted to cater to the discerning
              dweller's needs. Experience a home that's as intelligent as it is opulent, equipped with AI-powered security systems and power-saving features. Spaces are designed for comfort,
              functionality, and elegance, ensuring that every moment spent is a testament to quality living.
            </p>
          </div>
        </motion.div>

        <div className="mt-5 lg:mt-8">
          <p className="font-inter text-[16px] text-[#585858] ">
            Beyond the tangible, our homes promise an investment that promises an unmatched appreciation. 
          </p>

          <p className="font-inter text-[16px] text-[#585858] mt-5">
            Welcome to the Cosgrove way of life.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;
