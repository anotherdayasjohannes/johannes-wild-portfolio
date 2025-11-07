import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Johannes Wild Portfolio',

  projectId: '6bj2fvps',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  server: {
    port: 3444, // Different port to avoid conflicts with 3lectrify
  },
})
