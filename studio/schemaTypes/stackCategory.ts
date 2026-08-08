import {defineArrayMember, defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons/Stack'

export const stackCategory = defineType({
  name: 'stackCategory',
  title: 'Stack Category',
  type: 'document',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Group label, e.g. "Frontend FWs".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'techBadge'}]})],
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
    select: {title: 'title', technologies: 'technologies'},
    prepare({title, technologies}) {
      const count = Array.isArray(technologies) ? technologies.length : 0
      return {
        title,
        subtitle: `${count} ${count === 1 ? 'technology' : 'technologies'}`,
      }
    },
  },
})
