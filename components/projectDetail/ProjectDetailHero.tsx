"use client";

import { Project } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectDetailHeroProps {
  project: Project;
}

const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
  const router = useRouter();

  return (
    <div className="relative pt-20 pb-12 bg-black">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-24 left-8 md:left-16 lg:left-24 z-10 text-white hover:text-[#FBBD00] transition-colors flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Banner Image with Curved Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-b-3xl md:rounded-b-[80px] lg:rounded-b-[120px]"
      >
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content Section */}
      <div className="bg-white pt-8 md:pt-12 lg:pt-16">
        <div className="px-6 sm:px-8 md:px-16 lg:px-24">
          {/* Project Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FBBD00] text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
          >
            Project
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-8 text-black"
          >
            {project.title}, {project.subtitle}
          </motion.h1>

          {/* Description and Image Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Left Column - Description */}
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {project.fullDescription}
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailHero;
