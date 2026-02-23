import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from "../Button";
import { ArrowRight } from 'lucide-react';
import { getAllProjects } from '@/data/projects';

const Projects = () => {
  const projects = getAllProjects();

  return (
    <section className="py-20  mt-10">
      <div className="container-cutom md:px-10 lg:px-10 xl:px-24">
      
        
        <div className="space-y-10 gap-6 lg:gap-8 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
              link={`/project/${project.slug}`}
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
  )
}


export default Projects
