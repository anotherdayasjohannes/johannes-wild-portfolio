import { defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navigation Name',
      type: 'string',
      description: 'Internal name (e.g., "Main Navigation")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString',
              description: 'Link text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'URL or anchor (e.g., "#about" or "/projects")',
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
              labelEn: 'label.en',
              labelDe: 'label.de',
              href: 'href',
              order: 'order',
            },
            prepare({ labelEn, labelDe, href, order }) {
              return {
                title: `${order + 1}. ${labelEn || labelDe}`,
                subtitle: href,
              };
            },
          },
        },
      ],
    },
    {
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'localeString',
      description: 'Call-to-action button text (e.g., "Get in Touch")',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name,
      };
    },
  },
});

