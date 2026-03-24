// sanity/lib/data.ts
// ── Data layer — fetches from Sanity and resolves all images via urlFor ───────
// Components receive plain shaped objects with string image URLs — no Sanity
// types leak into your UI layer.

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
  faqQuery,
  siteSettingsQuery
} from './queries'
import { sanityFetch } from "./live";

// ── Cache config — webhook handles all revalidation ──────────────────────────
// (optional, can be passed to sanityFetch as next options)
const CACHE_OPTIONS = { next: { revalidate: false } } as const

// ── Image helper ──────────────────────────────────────────────────────────────
const toUrl = (img: any, fallback = '/placeholder.svg'): string =>
  img ? urlFor(img).auto('format').url() : fallback

const toResizedUrl = (img: any, w: number, h: number, fallback = '/placeholder.svg'): string =>
  img ? urlFor(img).width(w).height(h).fit('crop').auto('format').url() : fallback

// ── Projects ──────────────────────────────────────────────────────────────────
export async function getProjectBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: projectBySlugQuery,
    params: { slug },
    ...CACHE_OPTIONS,   // optional: keep your cache strategy
  });

  if (!data) return null;

  return {
    ...data,
    heroImage:     toResizedUrl(data.heroImage, 1440, 800),
    mainImage:     toResizedUrl(data.mainImage, 800, 600),
    propertyTypes: (data.propertyTypes ?? []).map((p: any) => ({
      ...p,
      image: toResizedUrl(p.image, 400, 300),
    })),
    sights: (data.sights ?? []).map((s: any) => ({
      ...s,
      image: toResizedUrl(s.image, 800, 600),
    })),
  };
}

export async function getAllProjects() {
  const { data } = await sanityFetch({
    query: allProjectsQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((p: any) => ({
    ...p,
    heroImage: toResizedUrl(p.heroImage, 800, 600),
    mainImage: toResizedUrl(p.mainImage, 800, 600),
  }));
}

export async function getProjectSlugs() {
  const { data } = await sanityFetch({
    query: allProjectSlugsQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((r: any) => r.slug);
}

// ── Team Members ──────────────────────────────────────────────────────────────
export async function getTeamMembers() {
  const { data } = await sanityFetch({
    query: teamMembersQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((m: any) => ({
    ...m,
    image: toResizedUrl(m.image, 640, 800),
  }));
}

// ── Contact Members ───────────────────────────────────────────────────────────
export async function getContactMembers() {
  const { data } = await sanityFetch({
    query: contactMembersQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((m: any) => ({
    ...m,
    image: m.image
      ? urlFor(m.image).width(64).height(64).fit('crop').auto('format').url()
      : null,
  }));
}

// ── Stats ─────────────────────────────────────────────────────────────────────
export async function getStats() {
  const { data } = await sanityFetch({
    query: statsQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return data ?? {};
}

// ── Services ──────────────────────────────────────────────────────────────────
export async function getServices() {
  const { data } = await sanityFetch({
    query: servicesQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((s: any) => ({
    ...s,
    icon: toUrl(s.icon),
  }));
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export async function getTestimonials() {
  const { data } = await sanityFetch({
    query: testimonialsQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return (data ?? []).map((t: any) => ({
    ...t,
    date: t.date
      ? new Date(t.date).toLocaleDateString('en-GB')
      : '',
  }));
}

// ── Faqs ──────────────────────────────────────────────────────────────
export async function getFaqs() {
  const { data } = await sanityFetch({
    query: faqQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return data ?? [];
}

// ── Site Settings ─────────────────────────────────────────────────────────────
export async function getSiteSettings() {
  const { data } = await sanityFetch({
    query: siteSettingsQuery,
    params: {},
    ...CACHE_OPTIONS,
  });
  return data ?? {
    mission: '',
    vision: '',
    whatsappNumber: '',
    phoneNumbers: [],
    email: '',
    address: '',
  };
}