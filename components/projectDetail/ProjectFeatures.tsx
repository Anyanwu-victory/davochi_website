"use client";

import { Project, Feature } from "@/data/projects";
import { motion } from "framer-motion";
import {
  Shield,
  Trash2,
  Hammer,
  UtensilsCrossed,
  Home,
  Lightbulb,
} from "lucide-react";

interface ProjectFeaturesProps {
  project: Project;
}

const featureIconMap: Record<string, React.ReactNode> = {
  garage: <Shield size={40} />,
  waste: <Trash2 size={40} />,
  materials: <Hammer size={40} />,
  kitchen: <UtensilsCrossed size={40} />,
  apartments: <Home size={40} />,
  smart: <Lightbulb size={40} />,
  pool: <Shield size={40} />,
};

const ProjectFeatures = ({ project }: ProjectFeaturesProps) => {
  return (
    <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-black mb-10 md:mb-12"
      >
        Estate Features
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {project.features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 p-4 bg-gray-100 rounded-lg text-gray-700">
              {featureIconMap[feature.icon] || <Shield size={40} />}
            </div>
            <p className="text-sm md:text-base font-medium text-gray-800">
              {feature.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectFeatures;
