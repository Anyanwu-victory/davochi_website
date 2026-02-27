// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/proj'

import HeroSection from '@/components/proj/HeroSection';
import EstateFeatures from '@/components/proj/EstateFeatures';
import PropertyTypes from '@/components/proj/PropertyTypes';
import ProjectInfo from '@/components/proj/ProjectInfo';
import ProjectSights from '@/components/proj/ProjectSights';
import ProjectMore from '@/components/proj/ProjectMore';

// ─── Static Params (SSG) ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <main className="bg-white min-h-screen font-sans">

      <HeroSection
        image={project.heroImage}
        title={project.fullTitle}
      />

      <ProjectInfo
        category={project.category}
        fullTitle={project.fullTitle}
        description={project.description}
        stats={project.stats}
        mainImage={project.mainImage}
      />

      <EstateFeatures
        features={project.estateFeatures}
      />

      <PropertyTypes
        propertyTypes={project.propertyTypes}
      />

      <ProjectSights
        sights={project.sights}
        projectTitle={project.title}
      />

      <ProjectMore
      
      />

    </main>
  )
}
