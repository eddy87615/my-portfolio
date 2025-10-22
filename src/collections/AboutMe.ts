import type { GlobalConfig } from 'payload'

export const AboutMe: GlobalConfig = {
  slug: 'about-me',
  access: {
    read: () => true,
  },
  fields: [
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
