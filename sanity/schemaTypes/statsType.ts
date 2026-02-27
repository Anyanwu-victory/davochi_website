// sanity/schemas/stat.ts

import { defineType, defineField } from 'sanity'

export const statsType = defineType({
  name: 'stat',
  title: 'Company Stat',
  type: 'document',
  fields: [

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Homes Built", "Global Clients"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      description: 'The base number to count up to e.g. 1000',
      validation: (Rule) => Rule.required().positive(),
    }),

    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Text appended after the number e.g. "+" or "K+"',
      initialValue: '+',
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon key — must match your icon map in the frontend',
      options: {
        list: [
          { title: 'Homes Built',    value: 'homeBuilt' },
          { title: 'Global Clients', value: 'globalClients' },
          { title: 'Awards',         value: 'awards' },
          { title: 'Projects',       value: 'projects' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order stats appear (lower = first)',
      initialValue: 99,
    }),

  ],

  preview: {
    select: {
      title:    'label',
      subtitle: 'number',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `${subtitle}+`,
      }
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