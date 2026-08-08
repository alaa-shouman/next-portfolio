import {defineArrayMember, defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons/Rocket'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Stack and year label, e.g. "React Native - 2026".',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Primary project link (site or repository).',
    }),
    defineField({
      name: 'googlePlay',
      title: 'Google Play',
      type: 'url',
    }),
    defineField({
      name: 'appStore',
      title: 'App Store',
      type: 'url',
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
    select: {title: 'title', subtitle: 'tag', media: 'image'},
  },
})
