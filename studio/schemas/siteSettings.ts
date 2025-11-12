import { defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Your name or company name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'localeString',
      description: 'Site tagline shown in footer',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'localeString',
      description: 'Copyright text for footer',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Email', value: 'email' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Dribbble', value: 'dribbble' },
                  { title: 'Behance', value: 'behance' },
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Full URL (e.g., https://github.com/username)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'localeString',
              description: 'Accessible label for screen readers',
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
              platform: 'platform',
              url: 'url',
              order: 'order',
            },
            prepare({ platform, url, order }) {
              return {
                title: `${order + 1}. ${platform}`,
                subtitle: url,
              };
            },
          },
        },
      ],
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Primary contact email address',
      validation: (Rule) => Rule.required().email(),
    },
  ],
  preview: {
    select: {
      companyName: 'companyName',
    },
    prepare({ companyName }) {
      return {
        title: `Site Settings - ${companyName}`,
      };
    },
  },
});

