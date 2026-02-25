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
      className="relative h-150 md:h-165 overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}

      {/* Yellow Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#FFBA32]/90"
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:px-15 ">

        {/* Title row + View Project — all move up together as one unit */}
        <motion.div
          className="flex items-end justify-between gap-4 mb- "
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Left: Title + Subtitle */}
          <div>
            <h3
              className="font-mono text-3xl md:text-4xl lg:text-6xl capitalize mb-4 transition-colors duration-300"
              style={{ color: isHovered ? "black" : "white" }}
            >
              {title}
            </h3>
            <p
              className="text-sm md:text-[30px] font-abel transition-colors duration-300"
              style={{ color: isHovered ? "black" : "rgba(255,255,255,0.9)" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right: View Project */}
          <a
            href={link}
            className="inline-flex items-center gap-2 font-semibold whitespace-nowrap shrink-0 transition-colors duration-300"
            style={{ color: isHovered ? "black" : "white" }}
          >
            <span>View Project</span>
            <ArrowRight
              size={20}
              className="transition-colors duration-300"
              style={{ color: isHovered ? "black" : "#FFBA32" }}
            />
          </a>
        </motion.div>

        {/* Description — slides in below on hover */}
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