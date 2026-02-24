import {defineField, defineType} from 'sanity'

export const projectFeatureType = defineType({
  name: 'projectFeature',
  title: 'Project Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Feature ID',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Feature Name',
      description: 'e.g., "Garage Security Guard"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Type',
      description: 'Icon identifier: garage, waste, materials, kitchen, pool, smart, etc.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'icon',
    },
  },
})
