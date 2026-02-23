"use client";

import { Project } from "@/data/projects";
import ProjectDetailHero from "@/components/projectDetail/ProjectDetailHero";
import ProjectStats from "@/components/projectDetail/ProjectStats";
import ProjectFeatures from "@/components/projectDetail/ProjectFeatures";
import PropertyTypes from "@/components/projectDetail/PropertyTypes";
import ProjectSights from "@/components/projectDetail/ProjectSights";

interface ProjectDetailContainerProps {
  project: Project;
}

const ProjectDetailContainer = ({ project }: ProjectDetailContainerProps) => {
  return (
    <div className="min-h-screen">
      <ProjectDetailHero project={project} />
      <div className="bg-white">
        <ProjectStats project={project} />
        <ProjectFeatures project={project} />
        <PropertyTypes project={project} />
        <ProjectSights project={project} />
      </div>
    </div>
  );
};

export default ProjectDetailContainer;
