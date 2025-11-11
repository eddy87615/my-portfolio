import { defineCliConfig } from 'sanity/cli'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
  studioHost: 'eddy-my-blog', // Studio URL: https://eddy-my-blog.sanity.studio
  deployment: {
    appId: 'e8pa1i3w0eqznrgf7n3270u8',
    autoUpdates: true,
  },
})
