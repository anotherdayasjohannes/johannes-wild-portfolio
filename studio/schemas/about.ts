import { defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'localeBlockContent',
      description: 'Main bio text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'keyFacts',
      title: 'Key Facts',
      type: 'array',
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
              name: 'value',
              title: 'Value',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              labelDe: 'label.de',
              labelEn: 'label.en',
              valueDe: 'value.de',
              valueEn: 'value.en',
              order: 'order',
            },
            prepare({ labelDe, labelEn, valueDe, valueEn, order }) {
              return {
                title: `${order + 1}. ${labelEn || labelDe}`,
                subtitle: valueEn || valueDe,
              };
            },
          },
        },
      ],
    },
    {
      name: 'cvFile',
      title: 'CV File',
      type: 'object',
      fields: [
        {
          name: 'de',
          title: 'German CV',
          type: 'file',
        },
        {
          name: 'en',
          title: 'English CV',
          type: 'file',
        },
      ],
    },
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleDe: 'title.de',
      media: 'profileImage',
    },
    prepare({ titleEn, titleDe, media }) {
      return {
        title: titleEn || titleDe || 'About',
        media,
      };
    },
  },
});






