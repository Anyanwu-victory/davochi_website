"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

// ── Type ──────────────────────────────────────────────────────────────────────
interface Testimonial {
  _id:    string
  date:   string
  title:  string
  text:   string
  author: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps)  {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  const startAnimation = () => {
    controlsTop.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });

    controlsBottom.start({
      x: ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const pauseTemporarily = async () => {
    controlsTop.stop();
    controlsBottom.stop();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    startAnimation();
  };

  // Duplicate for infinite scroll effect
  const doubled = [...testimonials, ...testimonials];


  return (
    <>
      <motion.div
      className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 mb-16">
          {/* Label */}
          <p className="text-[#FBBD00] mb-4 text-sm capitalize tracking-widest font-mono">
            Testimonials
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-bold capitalize leading-tight mb-6 lg:mb-10">
            Why you should Experience Excellence
          </h2>
        </motion.div>

    <section className=" overflow-hidden relative pb-24">
      
      {/* Blur Edges (FIXED) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#f4f4f4] to-transparent z-10 md:w-40 lg:w-90" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#f4f4f4] to-transparent z-10 md:w-40 lg:w-90" />

      {/* TOP ROW */}
      <motion.div className="flex gap-6 mb-8" animate={controlsTop}>
        {doubled.map((item, index) => (
            <Card key={index} item={item} onClick={pauseTemporarily} />
          ))}
      </motion.div>

      {/* BOTTOM ROW */}
      <motion.div className="hidden md:flex gap-6" animate={controlsBottom}>
         {doubled.map((item, index) => (
            <Card key={index} item={item} onClick={pauseTemporarily} />
          ))}
      </motion.div>
    </section>
    </>
  );
}

function Card({ item, onClick }: { item: Testimonial; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="min-w-[320px]  p-8 rounded-md shadow-sm cursor-pointer hover:shadow-md transition"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-[#F4B400] bg-[#FBBD00] fill-white p-0.2"
            />
          ))}
        </div>

        <p className="text-xs text-gray-400 font-mano font-extrabold">
          {item.date}
        </p>
      </div>

      <h3 className="font-extrabold text-gray-900 mb-3 font-mano text-[20px]">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm md:text-[18px] leading-relaxed mb-8 font-mano font-medium">
        {item.text}
      </p>

      <p className="text-xs text-gray-800 font-extrabold font-mano">
        {item.author}
      </p>
    </div>

);
}
