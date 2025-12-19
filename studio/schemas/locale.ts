/**
 * Localization helpers for bilingual content (German/English)
 */

export const localeString = {
  name: 'localeString',
  type: 'object',
  title: 'Localized String',
  fields: [
    {
      name: 'de',
      type: 'string',
      title: 'German',
    },
    {
      name: 'en',
      type: 'string',
      title: 'English',
    },
  ],
};

export const localeText = {
  name: 'localeText',
  type: 'object',
  title: 'Localized Text',
  fields: [
    {
      name: 'de',
      type: 'text',
      title: 'German',
    },
    {
      name: 'en',
      type: 'text',
      title: 'English',
    },
  ],
};

export const localeBlockContent = {
  name: 'localeBlockContent',
  type: 'object',
  title: 'Localized Rich Text',
  fields: [
    {
      name: 'de',
      type: 'array',
      title: 'German',
      of: [{ type: 'block' }],
    },
    {
      name: 'en',
      type: 'array',
      title: 'English',
      of: [{ type: 'block' }],
    },
  ],
};






