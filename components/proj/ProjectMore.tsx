import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/proj";

const ProjectMore = () => {
  const allProjects = projects;

  return (
    <section className="py-20  mt-10">
      <div className="max-w-6xl mx-auto px-4 xl:px-2 pb-8">
        <div className="pb-10">
          <p className="text-[20px] font-semibold text-[#FBBD00] tracking-widest font-inter">
            Explore
          </p>
          <h2 className="text-[30px] lg:text-[47px] font-inter font-bold text-black ">
            More Projects from Davochi Multihomes
          </h2>
        </div>

        <div className="space-y-10 gap-6 lg:gap-8 ">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.fullTitle}
              subtitle={project.subtitle}
              description={project.shortDescription}
              image={project.mainImage}
              link={`/proj/${project.slug}`}
            />
          ))}
        </div>

        {/* <div>
          <div className=" justify-start lg:justify-start mt-4 lg:flex">
            <a href="/projects">
              <Button className=" text-black px-4 md:px-0 py-3 inline-flex items-center gap-4">
                See all Projects
                <ArrowRight size={24} className="text-[#FFBA32]" />
              </Button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectMore;
