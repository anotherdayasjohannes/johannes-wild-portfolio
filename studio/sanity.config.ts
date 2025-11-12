import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {languageFilter} from '@sanity/language-filter'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Johannes Wild Portfolio',

  projectId: '6bj2fvps',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'de', title: 'German'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: [
        'about', 
        'experience', 
        'skill', 
        'testimonial', 
        'interest',
        'siteSettings',
        'navigation',
        'hero',
        'footer',
      ],
    }),
    languageFilter({
      supportedLanguages: [
        {id: 'de', title: 'German'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['de', 'en'],
      documentTypes: [
        'about', 
        'experience', 
        'skill', 
        'testimonial', 
        'interest',
        'siteSettings',
        'navigation',
        'hero',
        'footer',
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  server: {
    port: 3444, // Different port to avoid conflicts with 3lectrify
  },
})
