"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

interface PropertyTypesProps {
  project: Project;
}

const PropertyTypes = ({ project }: PropertyTypesProps) => {
  return (
    <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-black mb-10 md:mb-12"
      >
        Property Types
      </motion.h2>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
        {project.propertyTypes.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image Container */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-lg md:text-2xl font-mono font-bold text-black mb-3">
                {property.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
