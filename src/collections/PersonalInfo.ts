import type { GlobalConfig } from 'payload'

export const PersonalInfo: GlobalConfig = {
  slug: 'personal-info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nameZh',
      type: 'text',
      required: true,
      label: '中文姓名',
    },
    {
      name: 'nameEng',
      type: 'text',
      required: true,
      label: '英文姓名',
    },
    {
      name: 'nameJp',
      type: 'text',
      required: true,
      label: '日文姓名',
    },
    {
      name: 'birthdayZh',
      type: 'text',
      required: true,
      label: '生日（中文）',
      admin: {
        description: '例如：1990年1月1日',
      },
    },
    {
      name: 'birthdayEng',
      type: 'text',
      required: true,
      label: '生日（英文）',
      admin: {
        description: 'e.g., January 1, 1990',
      },
    },
    {
      name: 'birthdayJp',
      type: 'text',
      required: true,
      label: '生日（日文）',
      admin: {
        description: '例：1990年1月1日',
      },
    },
    {
      name: 'nationalityZh',
      type: 'text',
      required: true,
      label: '國籍（中文）',
    },
    {
      name: 'nationalityEng',
      type: 'text',
      required: true,
      label: '國籍（英文）',
    },
    {
      name: 'nationalityJp',
      type: 'text',
      required: true,
      label: '國籍（日文）',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: '電子郵件',
    },
    {
      name: 'locationZh',
      type: 'text',
      required: true,
      label: '所在地（中文）',
      admin: {
        description: '例如：台北市，台灣',
      },
    },
    {
      name: 'locationEng',
      type: 'text',
      required: true,
      label: '所在地（英文）',
      admin: {
        description: 'e.g., Taipei, Taiwan',
      },
    },
    {
      name: 'locationJp',
      type: 'text',
      required: true,
      label: '所在地（日文）',
      admin: {
        description: '例：台北、台湾',
      },
    },
    {
      name: 'zhContent',
      type: 'richText',
      required: true,
      label: '關於我（中文）',
    },
    {
      name: 'engContent',
      type: 'richText',
      required: true,
      label: '關於我（英文）',
    },
    {
      name: 'jpContent',
      type: 'richText',
      required: true,
      label: '關於我（日文）',
    },
  ],
}
