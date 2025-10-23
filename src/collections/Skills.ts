import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'proficiency', 'order'],
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
      name: 'descriptionZh',
      type: 'textarea',
      required: true,
      label: '技術描述（中文）',
      admin: {
        description: '簡短描述這項技術的應用或經驗',
      },
    },
    {
      name: 'descriptionEng',
      type: 'textarea',
      required: true,
      label: '技術描述（英文）',
      admin: {
        description: 'Brief description of this skill or experience',
      },
    },
    {
      name: 'descriptionJp',
      type: 'textarea',
      required: true,
      label: '技術描述（日文）',
      admin: {
        description: 'このスキルまたは経験の簡単な説明',
      },
    },
    {
      name: 'proficiency',
      type: 'number',
      required: true,
      label: '熟練度（0-100）',
      min: 0,
      max: 100,
      admin: {
        step: 5,
        description: '以百分比表示熟練程度（0-100）',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: '排序',
      defaultValue: 0,
      admin: {
        description: '數字越小越前面',
      },
    },
  ],
}
