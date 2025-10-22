import type { CollectionConfig } from 'payload'

export const Educations: CollectionConfig = {
  slug: 'educations',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'schoolZh',
    defaultColumns: ['schoolZh', 'degree', 'majorZh', 'status', 'startDate', 'endDate'],
  },
  fields: [
    {
      name: 'schoolZh',
      type: 'text',
      required: true,
      label: '學校中文名稱',
    },
    {
      name: 'schoolEng',
      type: 'text',
      required: true,
      label: '學校英文名稱',
    },
    {
      name: 'schoolJp',
      type: 'text',
      required: true,
      label: '學校日文名稱',
    },
    {
      name: 'degree',
      type: 'select',
      required: true,
      label: '學位',
      options: [
        {
          label: '博士',
          value: 'phd',
        },
        {
          label: '碩士',
          value: 'master',
        },
        {
          label: '學士',
          value: 'bachelor',
        },
        {
          label: '副學士',
          value: 'associate',
        },
        {
          label: '高中',
          value: 'high-school',
        },
        {
          label: '其他',
          value: 'other',
        },
      ],
    },
    {
      name: 'majorZh',
      type: 'text',
      required: true,
      label: '主修/科系（中文）',
    },
    {
      name: 'majorEng',
      type: 'text',
      required: true,
      label: '主修/科系（英文）',
    },
    {
      name: 'majorJp',
      type: 'text',
      required: true,
      label: '主修/科系（日文）',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      label: '在學狀況',
      defaultValue: 'graduated',
      options: [
        {
          label: '畢業',
          value: 'graduated',
        },
        {
          label: '肄業',
          value: 'incomplete',
        },
        {
          label: '退學',
          value: 'withdrawn',
        },
        {
          label: '在學中',
          value: 'current',
        },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: '入學日期',
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
        description: '畢業/肄業/退學日期（如果仍在學請留空）',
      },
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
