// app/(site)/projects/[slug]/page.tsx

export const dynamic = 'force-dynamic'


import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/sanity/lib/data'  // ← remove getProjectSlugs import

import HeroSection    from '@/components/proj/HeroSection'
import EstateFeatures from '@/components/proj/EstateFeatures'
import PropertyTypes  from '@/components/proj/PropertyTypes'
import ProjectInfo    from '@/components/proj/ProjectInfo'
import ProjectSights  from '@/components/proj/ProjectSights'
import ProjectMore    from '@/components/proj/ProjectMore'

// ← remove generateStaticParams entirely

type Props = {
  params: { slug: string }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params

  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="bg-white min-h-screen font-sans">
      <HeroSection image={project.heroImage} title={project.fullTitle} />
      <ProjectInfo
        fullTitle={project.fullTitle}
        description={project.description}
        stats={project.stats}
        mainImage={project.mainImage}
      />
      <EstateFeatures features={project.estateFeatures} />
      <PropertyTypes propertyTypes={project.propertyTypes} />
      <ProjectSights sights={project.sights} projectTitle={project.title} />
      <ProjectMore />
    </main>
  )
}