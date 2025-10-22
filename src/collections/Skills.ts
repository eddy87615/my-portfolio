import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'category', 'proficiency', 'order'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: '技術名稱',
    },
    {
      name: 'proficiency',
      type: 'number',
      required: true,
      label: '熟練度（1-5）',
      min: 1,
      max: 5,
      admin: {
        step: 1,
      },
    },
  ],
}
