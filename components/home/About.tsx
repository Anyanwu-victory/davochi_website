"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative -mt-50 lg:-mt-40"
    >
      {/* ── SVG wrappers use the SAME padding as the content div ─────────────
          This constrains the SVG to the text width, not the full viewport   */}

      {/* DESKTOP SVG */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden lg:block lg:h-100
                      px-6 sm:px-8 lg:px-30 xl:px-48">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1573 500"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_di_40_52)">
            <path
              d="M20 31.628L20 460.014C20 468.619 27.2253 476.105 35.8184 475.636L777.94 435.085C778.977 435.029 780.006 434.864 781.009 434.595L1541.89 230.481C1548.44 228.723 1553 222.781 1553 215.994V31C1553 22.7157 1546.28 16 1538 16L35 16C26.7157 16 20 23.3437 20 31.628Z"
              fill="white"
            />
          </g>
          <defs>
            <filter id="filter0_di_40_52" x="0" y="0" width="1573" height="499.656" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_52" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_52" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_40_52" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* MOBILE + TABLET SVG */}
      <div className="absolute top-0 left-0 w-full h-150 md:h-130 -z-10 pointer-events-none lg:hidden
                      px-6 sm:px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 744 605"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_di_93_355)">
            <path
              d="M9.46631 15.0812L9.46631 585.897C9.46631 590.229 13.3138 594.006 17.6005 593.375L368.656 541.673L728.499 483.535C731.938 482.979 734.466 480.01 734.466 476.526L734.466 277.172V14.6728C734.466 10.7517 731.288 7.57306 727.367 7.57306L16.566 7.57306C12.645 7.57306 9.46631 11.1601 9.46631 15.0812Z"
              fill="white"
            />
          </g>
          <defs>
            <filter id="filter0_di_93_355" x="3.8147e-06" y="1.51396e-05" width="743.933" height="604.804" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="1.89326" />
              <feGaussianBlur stdDeviation="4.73315" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_355" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_355" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="1.89326" dy="1.89326" />
              <feGaussianBlur stdDeviation="4.73315" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_93_355" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative px-6 sm:px-8 lg:px-30 xl:px-48 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between
         text-center lg:text-left gap-8 lg:gap-10 ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 lg:pl-12"
          >
            <p className="text-[#FBBD00] mb-6 md:mb-8 text-[21px] md:text-base capitalize tracking-wide font-mono">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-mono capitalize leading-tight mb-8 md:mb-10 xl:mb-15">
              We Deliver World-Class
              <br />
              Real Estate Across Africa
            </h2>
            <div className="hidden lg:flex justify-center lg:justify-start">
              <LearnMoreButton />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-3/5 max-w-xl lg:pr-12"
          >
            <p className="text-black/60 leading-relaxed text-[12px] md:text-[15px] xl:text-base px-2.5 md:px-0">
              Davochi Multihomes and Interiors is a family-owned real estate and
              development company built on the timeless pillars of hard work,
              integrity, excellence, and luxury craftsmanship. With operations
              headquartered in Abuja, Nigeria, we are committed to redefining
              what modern housing should look and feel like.
            </p>
            <div className="flex justify-center lg:hidden mt-6">
              <LearnMoreButton />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const LearnMoreButton = () => (
  <Link
    href="/about"
    className="group bg-black text-white border border-black px-5 py-3 inline-flex items-center gap-4 rounded-md
               transition-all duration-200 hover:bg-white hover:text-black"
  >
    Learn More
    <ArrowRight size={24} className="text-[#FFBA32] transition-colors duration-200 group-hover:text-black" />
  </Link>
);

export default About;