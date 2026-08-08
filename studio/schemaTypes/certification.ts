import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons/Star'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Year shown on the left of the row, e.g. "2024".',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Certificate or course name.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Issuer or platform, e.g. "Udemy".',
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
      description: 'Small badge, e.g. "18hr".',
    }),
    defineField({
      name: 'isCourse',
      title: 'Is Course',
      type: 'boolean',
      description: 'Marks the entry as a course rather than a certification.',
      initialValue: false,
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
    select: {title: 'title', subtitle: 'subtitle', date: 'date', isCourse: 'isCourse'},
    prepare({title, subtitle, date, isCourse}) {
      return {
        title,
        subtitle: [date, subtitle, isCourse ? 'Course' : null].filter(Boolean).join(' — '),
      }
    },
  },
})
