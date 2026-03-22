"use client" 

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/sanity/lib/data";

// Server component — async fetch directly, no props needed
interface Project {
  _id:              string
  fullTitle:        string
  subtitle:         string
  shortDescription: string
  mainImage:        string
  slug:             string
}


const ProjectMore = async () => {
  const projects: Project[] = await getAllProjects()



  return (
    <section className="py-20 mt-10">
      <div className="max-w-6xl mx-auto px-4 xl:px-2 pb-8">
        <div className="pb-10">
          <p className="text-[20px] font-semibold text-[#FBBD00] tracking-widest font-inter">
            Explore
          </p>
          <h2 className="text-[30px] lg:text-[47px] font-inter font-bold text-black">
            More Projects from Davochi Multihomes
          </h2>
        </div>

        <div className="space-y-10 gap-6 lg:gap-8">
         {projects.map((project: Project) => (
            <ProjectCard
              key={project._id}
              title={project.fullTitle}
              subtitle={project.subtitle}
              description={project.shortDescription}
              image={project.mainImage}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMore;