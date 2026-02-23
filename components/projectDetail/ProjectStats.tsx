"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Home,
  Building,
} from "lucide-react";

interface ProjectStatsProps {
  project: Project;
}

const ProjectStats = ({ project }: ProjectStatsProps) => {
  const stats = [
    {
      value: project.drivingDistance,
      label: project.driveLabel,
      icon: Clock,
      color: "text-blue-600",
    },
    {
      value: project.commercialArea,
      label: project.commercialAreaLabel,
      icon: MapPin,
      color: "text-yellow-600",
    },
    {
      value: project.district,
      label: project.districtLabel,
      icon: Building,
      color: "text-purple-600",
    },
    {
      value: project.apartments,
      label: project.apartmentsLabel,
      icon: Home,
      color: "text-orange-600",
    },
  ];

  return (
    <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className={`mb-3 ${stat.color}`}>
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectStats;
