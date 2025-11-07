import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently working here',
    }),
    defineField({
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      description: 'Check if this is your current position',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Job responsibilities and achievements',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Technologies, tools, or skills used in this role',
    }),
    defineField({
      name: 'companyUrl',
      title: 'Company Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      date: 'startDate',
    },
    prepare(selection) {
      const {title, subtitle, date} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(date).getFullYear()}`,
      }
    },
  },
  orderings: [
    {
      title: 'Start Date, New to Old',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
  ],
})
