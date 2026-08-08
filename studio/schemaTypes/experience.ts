import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Year or range shown on the left of the row, e.g. "2026".',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Role held, e.g. "Mid-Senior Software Engineer".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Company or organisation.',
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
