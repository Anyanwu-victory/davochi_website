import { defineType, defineField } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'Faq',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'Question field for the FAQ section',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text', // better than string for longer answers
      description: 'Answer field for the FAQ section',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'question',
    },
  },

  orderings: [
    {
      title: 'Question A–Z',
      name: 'questionAsc',
      by: [{ field: 'question', direction: 'asc' }],
    },
  ],
})