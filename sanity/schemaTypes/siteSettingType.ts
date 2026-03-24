// sanity/schemas/siteSettings.ts
// ── Singleton document — only ONE of these ever exists ────────────────────────

import { defineType, defineField } from "sanity";

export const siteSettingType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Hides the "Create new" button — singleton, one doc only
  //__experimental_actions: ['update', 'publish'],
  fields: [
    // ── About page content ────────────────────────────────────────────────
    defineField({
      name: "mission",
      title: "Our Mission",
      type: "text",
      rows: 4,
      description: 'Shown on the About page under "Our Mission"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "vision",
      title: "Our Vision",
      type: "text",
      rows: 4,
      description: 'Shown on the About page under "Our Vision"',
      validation: (Rule) => Rule.required(),
    }),

    // ── Contact ───────────────────────────────────────────────────────────
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, no + or spaces. e.g. 2348012345678",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d+$/, { name: "digits only" })
          .error("Numbers only — no +, spaces, or dashes. e.g. 2348012345678"),
    }),

    // footer 
    
    defineField({
      name: "phoneNumbers",
      title: "Phone Numbers",
      type: "array",
      description: "Phone numbers shown in footer and contact page",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Phone Number",
              type: "string",
              description: "e.g. +234 805 257 1134",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "dialCode",
              title: "Dial Code (for tel: link)",
              type: "string",
              description: "e.g. +2348052571134 (no spaces)",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "number" },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Main contact email shown in footer",
      validation: (Rule) =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
        }),
    }),

    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 2,
      description: "Physical address shown in footer and contact page",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
