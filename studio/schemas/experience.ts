import { defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Position',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM',
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if current position',
      options: {
        dateFormat: 'YYYY-MM',
      },
    },
    {
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'de',
          title: 'German',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of responsibilities in German',
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of responsibilities in English',
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (most recent should be 0)',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      positionEn: 'position.en',
      positionDe: 'position.de',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
      current: 'current',
    },
    prepare({ positionEn, positionDe, company, startDate, endDate, current }) {
      const position = positionEn || positionDe;
      const start = new Date(startDate).getFullYear();
      const end = current ? 'Present' : endDate ? new Date(endDate).getFullYear() : '';
      return {
        title: `${position} at ${company}`,
        subtitle: `${start} - ${end}`,
      };
    },
  },
});
