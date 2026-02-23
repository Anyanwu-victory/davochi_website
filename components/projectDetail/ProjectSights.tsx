"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSightsProps {
  project: Project;
}

const ProjectSights = ({ project }: ProjectSightsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(project.sights.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleSights = project.sights.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white border-t border-gray-100">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-black mb-8"
      >
        Sights from the Project
      </motion.h2>

      {/* Carousel Controls */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {/* Slide Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#FBBD00] w-8"
                  : "bg-gray-300 w-3"
              }`}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {visibleSights.map((sight, index) => (
            <motion.div
              key={sight.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={sight.image}
                alt={sight.title}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {sight.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white hover:bg-[#FBBD00] text-black rounded-full p-2 shadow-lg transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white hover:bg-[#FBBD00] text-black rounded-full p-2 shadow-lg transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default ProjectSights;
