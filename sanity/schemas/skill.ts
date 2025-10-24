import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '技術名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionZh',
      title: '技術描述（中文）',
      type: 'text',
      description: '簡短描述這項技術的應用或經驗',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEng',
      title: '技術描述（英文）',
      type: 'text',
      description: 'Brief description of this skill or experience',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionJp',
      title: '技術描述（日文）',
      type: 'text',
      description: 'このスキルまたは経験の簡単な説明',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: '熟練度（0-100）',
      type: 'number',
      description: '以百分比表示熟練程度（0-100）',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      description: '數字越小越前面',
      validation: (Rule) => Rule.required(),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'proficiency',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `熟練度: ${subtitle}%`,
      }
    },
  },
  orderings: [
    {
      title: 'Order, Ascending',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
