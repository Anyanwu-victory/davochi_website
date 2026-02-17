import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from "../Button";
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Davochi Luxury Villa, Dape District',
      subtitle: 'Premium residential development',
      description: 'A stunning luxury villa featuring modern architecture, state-of-the-art amenities, and breathtaking views. Built with the finest materials and attention to every detail.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    },
    {
      title: 'Mirvana Heights, Lifecamp',
      subtitle: 'Contemporary living spaces',
      description: 'Experience elevated living with panoramic city views, premium finishes, and world-class facilities designed for the modern family.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    },
    // Add more projects...
  ]

  return (
    <section className="py-20  mt-10">
      <div className="container-cutom px-8 md:px-16 lg:px-24">
      
        
        <div className="space-y-10 gap-6 lg:gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>

        <div>
          <div className=" justify-start lg:justify-start mt-4 lg:flex">
                        <Button className=" text-black px-5 lg:px-0 py-3 inline-flex items-center gap-4">
                          See all Projects
                          <ArrowRight size={24} className="text-[#FFBA32]" />
                        </Button>
                      </div>
        </div>
      </div>
    </section>
  )
}


export default Projects
