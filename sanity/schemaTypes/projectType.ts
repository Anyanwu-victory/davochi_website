// sanity/schemas/project.ts
import React from 'react'
import { defineType, defineField, defineArrayMember } from 'sanity'

export const projectType =  defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [

    // ── Identity ───────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short name e.g. "Davochi Mall"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier e.g. davochi-mall',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'fullTitle',
      title: 'Full Title',
      type: 'string',
      description: 'Full display name e.g. "Davochi Mall, Abuja"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g. "5-Bedroom Townhouse"',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Central Business District, Abuja"',
    }),

    // defineField({
    //   name: 'category',
    //   title: 'Category',
    //   type: 'string',
    //   description: 'e.g. "Mall Project", "Villa Project"',
    //   options: {
    //     list: [
    //       { title: 'Mall Project',      value: 'Mall Project' },
    //       { title: 'Villa Project',     value: 'Villa Project' },
    //       { title: 'Apartment Project', value: 'Apartment Project' },
    //       { title: 'Villas Project',    value: 'Villas Project' },
    //       { title: 'Terrace Project',   value: 'Terrace Project' },
    //       { title: 'Duplex Project',    value: 'Duplex Project' },
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),

    // ── Descriptions ──────────────────────────────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Used in project cards and previews',
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      description: 'Full project description shown on the project page',
      validation: (Rule) => Rule.required(),
    }),

    // ── Images ────────────────────────────────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Full-width banner image at the top of the project page',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Render Image',
      type: 'image',
      description: 'The primary render shown beside the project description',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'brochureUrl',
      title: 'Brochure URL',
      type: 'url',
      description: 'Optional PDF link for the Download Brochure button',
    }),

    // ── Stats ─────────────────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      description: 'Key figures shown below the description e.g. "1 min to expressway"',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g. "1 mins", "20 mins", "4+"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. "To Guzape district expressway"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon key — must match your FeatureIcon map',
              options: {
                list: [
                  { title: 'Location Pin', value: 'location' },
                  { title: 'Clock',        value: 'clock' },
                  { title: 'School',       value: 'school' },
                  { title: 'Building',     value: 'building' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        }),
      ],
      validation: (Rule) => Rule.max(4),
    }),

    // ── Estate Features ───────────────────────────────────────────────────
    defineField({
      name: 'estateFeatures',
      title: 'Estate Features',
      type: 'array',
      description: 'Security and amenity features shown in the carousel',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'estateFeature',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon key — must match your FeatureIcon map',
              options: {
                list: [
                  { title: 'Control',      value: 'control' },
                  { title: 'Recognition',  value: 'recognition' },
                  { title: 'Biometric',    value: 'biometric' },
                  { title: 'Facial',       value: 'facial' },
                  { title: 'Sensor',       value: 'sensor' },
                  { title: 'Alarm',        value: 'alarm' },
                  { title: 'Camera',       value: 'camera' },
                  { title: 'Shield',       value: 'shield' },
                  { title: 'Door',         value: 'door' },
                  { title: 'Eye',          value: 'eye' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. "Central Security Control"',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'icon' },
          },
        }),
      ],
    }),

    // ── Property Types ────────────────────────────────────────────────────
    defineField({
      name: 'propertyTypes',
      title: 'Property Types',
      type: 'array',
      description: 'Individual unit types available within this project',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'propertyType',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g. "Retail Units", "Type A Villa"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title:  'title',
              media:  'image',
            },
          },
        }),
      ],
    }),

    // ── Sights (Gallery) ──────────────────────────────────────────────────
    defineField({
      name: 'sights',
      title: 'Sights from the Project',
      type: 'array',
      description: 'Gallery images — tag each one as exterior or interior',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'sight',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Exterior', value: 'exterior' },
                  { title: 'Interior', value: 'interior' },
                ],
                layout: 'radio',
              },
              initialValue: 'exterior',
              
            }),
          ],
          preview: {
            select: {
              title:    'category',
              media:    'image',
            },
            prepare({ title, media }) {
              return {
                title: title === 'exterior' ? 'Exterior' : 'Interior',
                media,
              }
            },
          },
        }),
      ],
    }),

  ],

  // ── Studio List Preview ────────────────────────────────────────────────
  preview: {
    select: {
      title:    'fullTitle',
      subtitle: 'category',
      media:    'heroImage',
    },
  },

  // ── Field Ordering in Studio ───────────────────────────────────────────
  orderings: [
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})