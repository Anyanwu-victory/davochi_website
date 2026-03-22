// app/sitemap.ts
// Next.js automatically serves this at davochimultihomes.com/sitemap.xml

import { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/sanity/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: string[] = await getProjectSlugs()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://davochi.ng',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://davochi.ng/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://davochi.ng/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://davochi.ng/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `https://davochi.ng/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}