import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: '標籤名稱',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: '標籤代碼',
      admin: {
        description: '用於 URL 和程式碼，例如：zh-version, study-notes',
      },
    },
    {
      name: 'nameZh',
      type: 'text',
      required: true,
      label: '中文名稱',
    },
    {
      name: 'nameJp',
      type: 'text',
      required: true,
      label: '日文名稱',
    },
    {
      name: 'nameEng',
      type: 'text',
      required: true,
      label: '英文名稱',
    },
  ],
}
