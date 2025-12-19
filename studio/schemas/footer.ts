import { defineType } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'quickLinksLabel',
      title: 'Quick Links Label',
      type: 'localeString',
      description: 'Heading for quick links section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      description: 'Links displayed in the footer',
      of: [
        {
          type: 'object',
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
              description: 'URL or anchor',
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
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      description: 'Legal/policy links (Privacy, Terms, etc.)',
      of: [
        {
          type: 'object',
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
      name: 'getInTouchLabel',
      title: 'Get in Touch Label',
      type: 'localeString',
      description: 'Heading for contact section in footer',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'getInTouchText',
      title: 'Get in Touch Text',
      type: 'localeText',
      description: 'Description text in footer contact section',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Content',
      };
    },
  },
});






