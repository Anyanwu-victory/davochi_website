// sanity/schemas/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short headline e.g. "As first-time buyers"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Quote',
      type: 'text',
      rows: 3,
      description: 'The testimonial body text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Full name and title e.g. "Chidi Okekwe, Senior Partner at LexVanguard Legal"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date of the testimonial',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order testimonials appear (lower = first)',
      initialValue: 99,
    }),

  ],

  preview: {
    select: {
      title:    'author',
      subtitle: 'title',
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name:  'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Newest First',
      name:  'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})