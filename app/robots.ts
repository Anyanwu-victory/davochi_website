// app/robots.ts
// Served at davochimultihomes.com/robots.txt

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block the Sanity studio from being indexed
        disallow: '/studio/',
      },
    ],
    sitemap: 'https://davochi.ng/sitemap.xml',
  }
}