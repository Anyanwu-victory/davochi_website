import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/proj";

const Projects = () => {
  const allProjects = projects;

  return (
    <section className="py-20 lg:py-0 ">
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 ">
        <div className="space-y-10 gap-6 lg:gap-8 ">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.fullTitle}
              subtitle={project.subtitle}
              description={project.shortDescription}
              image={project.mainImage}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>

        <div>
          <div className=" justify-start lg:justify-start mt-4 lg:flex">
            <a href="/projects">
              <Button className=" text-black px-4 md:px-0 py-3 inline-flex items-center gap-4">
                See all Projects
                <ArrowRight size={24} className="text-[#FFBA32]" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
