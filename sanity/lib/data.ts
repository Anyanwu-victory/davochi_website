// sanity/lib/data.ts
// ── Data layer — fetches from Sanity and resolves all images via urlFor ───────
// Components receive plain shaped objects with string image URLs — no Sanity
// types leak into your UI layer.

import { client } from './client'
import { urlFor } from './image'
import {
  projectBySlugQuery,
  allProjectsQuery,
  allProjectSlugsQuery,
  teamMembersQuery,
  contactMembersQuery,
  statsQuery,
  servicesQuery,
  testimonialsQuery,
} from './queries'

// ── Image helper ──────────────────────────────────────────────────────────────
const toUrl = (img: any, fallback = '/placeholder.svg'): string =>
  img ? urlFor(img).auto('format').url() : fallback

const toResizedUrl = (img: any, w: number, h: number, fallback = '/placeholder.svg'): string =>
  img ? urlFor(img).width(w).height(h).fit('crop').auto('format').url() : fallback

// ── Projects ──────────────────────────────────────────────────────────────────
export async function getProjectBySlug(slug: string) {
  const raw = await client.fetch(projectBySlugQuery, { slug })
  if (!raw) return null

  return {
    ...raw,
    heroImage:     toResizedUrl(raw.heroImage, 1440, 800),
    mainImage:     toResizedUrl(raw.mainImage, 800, 600),
    propertyTypes: (raw.propertyTypes ?? []).map((p: any) => ({
      ...p,
      image: toResizedUrl(p.image, 400, 300),
    })),
    sights: (raw.sights ?? []).map((s: any) => ({
      ...s,
      image: toResizedUrl(s.image, 800, 600),
    })),
  }
}

export async function getAllProjects() {
  const raw = await client.fetch(allProjectsQuery)
  return (raw ?? []).map((p: any) => ({
    ...p,
    heroImage: toResizedUrl(p.heroImage, 800, 600),
    mainImage: toResizedUrl(p.mainImage, 800, 600),
  }))
}

export async function getProjectSlugs() {
  const res = await client.fetch(allProjectSlugsQuery)
  return (res ?? []).map((r: any) => r.slug)
}

// ── Team Members ──────────────────────────────────────────────────────────────
export async function getTeamMembers() {
  const raw = await client.fetch(teamMembersQuery)
  return (raw ?? []).map((m: any) => ({
    ...m,
    image: toResizedUrl(m.image, 640, 800),
  }))
}

// ── Contact Members ───────────────────────────────────────────────────────────
export async function getContactMembers() {
  const raw = await client.fetch(contactMembersQuery)
  return (raw ?? []).map((m: any) => ({
    ...m,
    image: toUrl(m.image),
  }))
}

// ── Stats ─────────────────────────────────────────────────────────────────────
export async function getStats() {
  return client.fetch(statsQuery)
}

// ── Services ──────────────────────────────────────────────────────────────────
export async function getServices() {
  const raw = await client.fetch(servicesQuery)
  return (raw ?? []).map((s: any) => ({
    ...s,
    icon: toUrl(s.icon),
  }))
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export async function getTestimonials() {
  return client.fetch(testimonialsQuery)
}