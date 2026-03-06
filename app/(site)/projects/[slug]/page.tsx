// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjectSlugs } from '@/sanity/lib/data'

import HeroSection    from '@/components/proj/HeroSection'
import EstateFeatures from '@/components/proj/EstateFeatures'
import PropertyTypes  from '@/components/proj/PropertyTypes'
import ProjectInfo    from '@/components/proj/ProjectInfo'
import ProjectSights  from '@/components/proj/ProjectSights'
import ProjectMore    from '@/components/proj/ProjectMore'

// ─── Static Params (SSG) ──────────────────────────────────────────────────────
// Bug 1 fixed: must be async to use await inside
export async function generateStaticParams() {
  // Bug 2 fixed: use getProjectSlugs — fetches only slugs, cheaper than getAllProjects
  const slugs = await getProjectSlugs()
  return slugs.map((slug: string) => ({ slug }))
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Bug 3 fixed: was missing await — project was a Promise, not the data
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="bg-white min-h-screen font-sans">

      <HeroSection
        image={project.heroImage}
        title={project.fullTitle}
      />

      <ProjectInfo
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

      <ProjectMore />

    </main>
  )
}