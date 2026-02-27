// sanity/schemas/service.ts

import { defineType, defineField } from 'sanity'

export const servicesType =  defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Real Estate Development"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the services section',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Upload the SVG or PNG icon for this service',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order services appear (lower = first)',
      initialValue: 99,
    }),

  ],

  preview: {
    select: {
      title:  'title',
      media:  'icon',
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name:  'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})