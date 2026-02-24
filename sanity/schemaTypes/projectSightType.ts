import {defineField, defineType} from 'sanity'

export const projectSightType = defineType({
  name: 'projectSight',
  title: 'Project Sight',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Sight ID',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Sight Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Sight Title',
      description: 'e.g., "Panoramic Views", "Modern Architecture"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
