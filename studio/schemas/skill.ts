import { defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Soft Skills', value: 'soft' },
          { title: 'Languages', value: 'language' },
          { title: 'Technical', value: 'technical' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
      description: 'Skill level from 1-6 (or percentage 0-100 for languages)',
      validation: (Rule) => Rule.required().min(0).max(100),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color for the skill bar (blue, green, purple, pink)',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Purple', value: 'purple' },
          { title: 'Pink', value: 'pink' },
        ],
      },
      initialValue: 'blue',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within category',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
  orderings: [
    {
      title: 'Category & Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      nameEn: 'name.en',
      nameDe: 'name.de',
      category: 'category',
      level: 'level',
    },
    prepare({ nameEn, nameDe, category, level }) {
      const name = nameEn || nameDe;
      const categoryMap: Record<string, string> = {
        soft: 'Soft Skill',
        language: 'Language',
        technical: 'Technical',
      };
      return {
        title: name,
        subtitle: `${categoryMap[category]} - Level ${level}`,
      };
    },
  },
});
