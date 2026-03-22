// sanity/schemas/teamMember.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export const teamMemberType =  defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [

    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'e.g. "David Musa"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      description: 'e.g. "Managing Director"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      description: 'Each item is one paragraph of the bio',
      of: [
        defineArrayMember({
          type: 'text',
          rows: 6,
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order members appear on the page (lower = first)',
      initialValue: 99,
    }),

  ],

  preview: {
    select: {
      title:    'name',
      subtitle: 'role',
      media:    'image',
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