import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'e.g., Managing Director at iFixit Europe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which testimonials appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})



