import type { CollectionConfig } from 'payload'

export const WorkExperiences: CollectionConfig = {
  slug: 'work-experiences',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'positionZh',
    defaultColumns: ['companyZh', 'positionZh', 'startDate', 'endDate'],
  },
  fields: [
    {
      name: 'companyZh',
      type: 'text',
      required: true,
      label: '公司名稱（中文）',
    },
    {
      name: 'companyEng',
      type: 'text',
      required: true,
      label: '公司名稱（英文）',
    },
    {
      name: 'companyJp',
      type: 'text',
      required: true,
      label: '公司名稱（日文）',
    },
    {
      name: 'positionZh',
      type: 'text',
      required: true,
      label: '職位（中文）',
    },
    {
      name: 'positionEng',
      type: 'text',
      required: true,
      label: '職位（英文）',
    },
    {
      name: 'positionJp',
      type: 'text',
      required: true,
      label: '職位（日文）',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: '開始日期',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      label: '結束日期',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
        description: '如果目前仍在職，請留空',
      },
    },
    {
      name: 'isCurrent',
      type: 'checkbox',
      label: '目前仍在職',
      defaultValue: false,
    },
    {
      name: 'descriptionZh',
      type: 'richText',
      required: false,
      label: '工作描述（中文）',
    },
    {
      name: 'descriptionEng',
      type: 'richText',
      required: false,
      label: '工作描述（英文）',
    },
    {
      name: 'descriptionJp',
      type: 'richText',
      required: false,
      label: '工作描述（日文）',
    },
    {
      name: 'responsibilities',
      type: 'array',
      label: '主要職責',
      fields: [
        {
          name: 'responsibilityZh',
          type: 'text',
          required: true,
          label: '中文',
        },
        {
          name: 'responsibilityEng',
          type: 'text',
          required: true,
          label: '英文',
        },
        {
          name: 'responsibilityJp',
          type: 'text',
          required: true,
          label: '日文',
        },
      ],
    },
    {
      name: 'achievements',
      type: 'array',
      label: '主要成就',
      fields: [
        {
          name: 'achievementZh',
          type: 'text',
          required: true,
          label: '中文',
        },
        {
          name: 'achievementEng',
          type: 'text',
          required: true,
          label: '英文',
        },
        {
          name: 'achievementJp',
          type: 'text',
          required: true,
          label: '日文',
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      label: '使用的技術/技能',
      fields: [
        {
          name: 'skill',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: '公司 Logo',
    },
    {
      name: 'order',
      type: 'number',
      required: false,
      label: '排序順序',
      admin: {
        description: '數字越小越靠前顯示',
      },
      defaultValue: 0,
    },
  ],
}
