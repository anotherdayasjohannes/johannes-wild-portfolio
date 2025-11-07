import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. "ist ihr neuer Joker!"',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio / About Me',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'motivation',
      title: 'Motivation',
      type: 'array',
      of: [{type: 'block'}],
      description: 'What motivates you / your approach to work',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'github', type: 'url', title: 'GitHub'},
        {name: 'xing', type: 'url', title: 'Xing'},
        {name: 'twitter', type: 'url', title: 'Twitter/X'},
      ],
    }),
  ],
})
