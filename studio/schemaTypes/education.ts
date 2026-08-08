import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons/Book'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Year or range shown on the left of the row, e.g. "2025".',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Degree or programme, e.g. "Bachelor of Computer Science".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Institution.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Small badge, e.g. "In Progress".',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    {
      name: 'orderAsc',
      title: 'Display order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle', date: 'date'},
    prepare({title, subtitle, date}) {
      return {
        title,
        subtitle: [date, subtitle].filter(Boolean).join(' — '),
      }
    },
  },
})
