// sanity/lib/queries.ts
// ── Pure GROQ strings only — no fetching, no image resolution ────────────────
// All images are returned as RAW objects so urlFor() can process them in data.ts

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    fullTitle,
    subtitle,
    location,
    category,
    shortDescription,
    description,
    heroImage,
    mainImage,
    brochureUrl,
    stats[]{
      value,
      label,
      icon
    },
    estateFeatures[]{
      icon,
      label
    },
    propertyTypes[]{
      title,
      description,
      image
    },
    sights[]{
      image,
      category
    }
  }
`

export const allProjectsQuery = `
  *[_type == "project"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    fullTitle,
    subtitle,
    location,
    category,
    shortDescription,
    heroImage,
    mainImage
  }
`

export const allProjectSlugsQuery = `
  *[_type == "project"]{ "slug": slug.current }
`

export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    image,
    bio
  }
`

export const contactMembersQuery = `
  *[_type == "contactMember"] | order(order asc) {
    _id,
    name,
    role,
    email,
    image
  }
`

export const statsQuery = `
  *[_type == "stat"] | order(order asc) {
    _id,
    label,
    number,
    suffix,
    icon
  }
`

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    title,
    text,
    author,
    date
  }
`