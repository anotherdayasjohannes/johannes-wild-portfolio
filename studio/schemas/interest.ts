import { defineType } from 'sanity';

export default defineType({
  name: 'interest',
  title: 'Personal Interest',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon identifier',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleDe: 'title.de',
      icon: 'icon',
      order: 'order',
    },
    prepare({ titleEn, titleDe, icon, order }) {
      const title = titleEn || titleDe;
      return {
        title: `${order + 1}. ${icon ? icon + ' ' : ''}${title}`,
      };
    },
  },
});

