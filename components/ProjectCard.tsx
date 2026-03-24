"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title:       string;
  subtitle:    string;
  description: string;
  image:       string;
  link?:       string;
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
    // ── Wrap the entire card in Link ───────────────────────────────────────
    <Link href={link} className="block">
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

        {/* Yellow Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#FFBA32]/90"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />


        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:px-15">

          <motion.div
            className="flex items-end justify-between gap-4"
            animate={{ y: isHovered ? -20 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Title + Subtitle */}
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

            {/* View Project — now just a visual indicator, not a separate link */}
            <div
              className="inline-flex items-center gap-2 font-semibold whitespace-nowrap shrink-0 transition-colors duration-300"
              style={{ color: isHovered ? "black" : "white" }}
            >
              <span>View Project</span>
              <ArrowRight
                size={20}
                style={{ color: isHovered ? "black" : "#FFBA32" }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height:  isHovered ? "auto" : 0,
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
    </Link>
  );
};

export default ProjectCard;