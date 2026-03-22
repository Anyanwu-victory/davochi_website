// sanity/schemas/contactMember.ts
import { defineType, defineField } from 'sanity'

export const contactMemberType = defineType({
  name: 'contactMember',
  title: 'Contact Member',
  type: 'document',
  fields: [

    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'e.g. "Dr. Chioma Ugwu"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      description: 'e.g. "Director, Business Development"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'e.g. "chioma.ugwu@goscoveafrica.com"',
      validation: (Rule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: 'email', invert: false }
        ).error('Must be a valid email address'),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Leave empty to show a fallback avatar',
      options: { hotspot: true },
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order members appear on the contact page (lower = first)',
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