import {defineField, defineType} from 'sanity'
import {CodeBlockIcon} from '@sanity/icons/CodeBlock'

export const techBadge = defineType({
  name: 'techBadge',
  title: 'Tech Badge',
  type: 'document',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Technology name, e.g. "TypeScript".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon URL',
      type: 'url',
      description: 'Devicon CDN SVG URL, e.g. https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Brand hex colour, e.g. "#3178C6".',
      validation: (Rule) =>
        Rule.regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {
          name: 'hex color',
          invert: false,
        }).warning('Use a hex colour such as #3178C6'),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'color'},
  },
})
