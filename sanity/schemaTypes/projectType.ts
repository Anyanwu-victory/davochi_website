import {BuildingIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: BuildingIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Location or district name',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      description: 'Brief overview of the project',
    }),
    defineField({
      name: 'fullDescription',
      type: 'text',
      title: 'Full Description',
      description: 'Detailed description for the project page',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      description: 'Main project image',
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
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
      description: 'Large banner image for project detail page',
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
      name: 'drivingDistance',
      type: 'string',
      title: 'Driving Distance',
      description: 'e.g., "5" for 5 mins',
    }),
    defineField({
      name: 'driveLabel',
      type: 'string',
      title: 'Drive Label',
      description: 'e.g., "mins Drive Distance"',
    }),
    defineField({
      name: 'commercialArea',
      type: 'string',
      title: 'Commercial Area',
      description: 'Distance to commercial areas',
    }),
    defineField({
      name: 'commercialAreaLabel',
      type: 'string',
      title: 'Commercial Area Label',
      description: 'e.g., "mins Commercial Area"',
    }),
    defineField({
      name: 'district',
      type: 'string',
      title: 'District Count',
      description: 'e.g., "2+" or "3"',
    }),
    defineField({
      name: 'districtLabel',
      type: 'string',
      title: 'District Label',
      description: 'e.g., "Premium Districts"',
    }),
    defineField({
      name: 'apartments',
      type: 'string',
      title: 'Apartments/Units Count',
      description: 'Number of apartments or villas',
    }),
    defineField({
      name: 'apartmentsLabel',
      type: 'string',
      title: 'Apartments Label',
      description: 'e.g., "Apartments", "Villas"',
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Estate Features',
      of: [defineArrayMember({type: 'projectFeature'})],
    }),
    defineField({
      name: 'propertyTypes',
      type: 'array',
      title: 'Property Types',
      of: [defineArrayMember({type: 'propertyType'})],
    }),
    defineField({
      name: 'sights',
      type: 'array',
      title: 'Project Sights/Images',
      of: [defineArrayMember({type: 'projectSight'})],
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Project Status',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Available', value: 'available'},
          {title: 'Sold Out', value: 'soldOut'},
          {title: 'Completed', value: 'completed'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare(selection) {
      const {subtitle} = selection
      return {...selection, subtitle: subtitle && `${subtitle}`}
    },
  },
})
