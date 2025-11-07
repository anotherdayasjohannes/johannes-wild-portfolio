import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. "Frontend", "Backend", "Tools", etc.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'level',
              title: 'Proficiency Level',
              type: 'number',
              description: 'Percentage (0-100)',
              validation: (Rule: any) => Rule.required().min(0).max(100),
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Optional: Icon identifier (e.g. react-icons name)',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this category appears',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
