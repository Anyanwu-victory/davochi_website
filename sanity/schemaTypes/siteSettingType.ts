// sanity/schemas/siteSettings.ts
// ── Singleton document — only ONE of these ever exists ────────────────────────

import { defineType, defineField } from 'sanity'

export const siteSettingType =  defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Hides the "Create new" button — singleton, one doc only
  //__experimental_actions: ['update', 'publish'],
  fields: [

    // ── About page content ────────────────────────────────────────────────
    defineField({
      name: 'mission',
      title: 'Our Mission',
      type: 'text',
      rows: 4,
      description: 'Shown on the About page under "Our Mission"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'vision',
      title: 'Our Vision',
      type: 'text',
      rows: 4,
      description: 'Shown on the About page under "Our Vision"',
      validation: (Rule) => Rule.required(),
    }),

    // ── Contact ───────────────────────────────────────────────────────────
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, no + or spaces. e.g. 2348012345678',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d+$/, { name: 'digits only' })
          .error('Numbers only — no +, spaces, or dashes. e.g. 2348012345678'),
    }),

  ],

  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})