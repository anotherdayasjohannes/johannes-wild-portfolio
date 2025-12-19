import { defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your full name (e.g., "Johannes Wild")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rotatingTitles',
      title: 'Rotating Titles',
      type: 'object',
      description: 'Titles that rotate in the hero section',
      fields: [
        {
          name: 'de',
          title: 'German Titles',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of titles in German (e.g., "Strategischer Denker")',
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: 'en',
          title: 'English Titles',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of titles in English (e.g., "Strategic Thinker")',
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'localeText',
      description: 'Main hero tagline',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'primaryCTA',
      title: 'Primary CTA',
      type: 'object',
      description: 'Main call-to-action button',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'href',
          title: 'Link',
          type: 'string',
          description: 'URL or anchor (e.g., "#contact")',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'secondaryCTA',
      title: 'Secondary CTA (Optional)',
      type: 'object',
      description: 'Optional secondary call-to-action button',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'localeString',
        },
        {
          name: 'href',
          title: 'Link',
          type: 'string',
          description: 'URL or anchor',
        },
      ],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Main hero image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'localeString',
      description: 'Alternative text for the image (accessibility)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      description: 'Key statistics displayed in the hero',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'The number or value (e.g., "10+")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'localeString',
              description: 'Description of the stat',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              value: 'value',
              labelEn: 'label.en',
              labelDe: 'label.de',
              order: 'order',
            },
            prepare({ value, labelEn, labelDe, order }) {
              return {
                title: `${order + 1}. ${value}`,
                subtitle: labelEn || labelDe,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'heroImage',
    },
    prepare({ name, media }) {
      return {
        title: `Hero Section - ${name}`,
        media,
      };
    },
  },
});






