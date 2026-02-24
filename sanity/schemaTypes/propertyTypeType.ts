import {defineField, defineType} from 'sanity'

export const propertyTypeType = defineType({
  name: 'propertyType',
  title: 'Property Type',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Property Type ID',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Property Name',
      description: 'e.g., "2-Bedroom Flat", "Studio Apartment"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Property Image',
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
      name: 'description',
      type: 'text',
      title: 'Property Description',
      description: 'Details about this property type',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
