import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { table } from '@sanity/table'
import { schemaTypes } from './sanity/schemas'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
