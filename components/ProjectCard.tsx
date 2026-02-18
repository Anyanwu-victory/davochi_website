"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  link = "#",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-100 md:h-125  overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
  
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay (always visible) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Yellow Overlay (appears on hover) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#FFBA32]/90"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
        {/* Top section: Title/Subtitle on left, Button on right */}
        <div className="flex items-end justify-between gap-4 mb-4">
          {/* Left side: Title and Subtitle */}
          <motion.div
            animate={{
              y: isHovered ? -20 : 0, color: isHovered ? "black" : "white"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-white font-mono text-3xl md:text-4xl capitalize
             lg:text-7xl  mb-3">
              {title}
            </h3>

            {/* Subtitle */}
            <p className="text-white/90  text-sm md:text-3xl  font-serif">{subtitle}</p>
          </motion.div>

          {/* Right side: Button (stays fixed, only color changes) */}
          <motion.a
            href={link}
            className="inline-flex items-center gap-2 font-semibold whitespace-nowrap shrink-0"
            initial={{ color: "white" }}
            animate={{ color: isHovered ? "black" : "white" }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ y: isHovered ? -55 : 0 }}
              transition={{ duration: 0.4 }}
            >
              View Project
            </motion.span>
            <motion.div
              animate={{ y: isHovered ? -55 : 0, color: isHovered ? "black" : "#FFBA32" }}
              transition={{ duration: 0.4 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
        </div>

        {/* Description (only shows on hover, below the top section) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="text-white text-sm md:text-base leading-relaxed w-[75%]">
            {description}
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default ProjectCard;
