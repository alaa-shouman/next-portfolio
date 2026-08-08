import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroLines',
      title: 'Hero Lines',
      type: 'array',
      description: 'The oversized shiny words stacked in the middle of the landing screen.',
      of: [defineArrayMember({type: 'string'})],
      initialValue: ['Code', 'Crafting', 'Brilliance'],
    }),
    defineField({
      name: 'taglineLines',
      title: 'Tagline Lines',
      type: 'array',
      description: 'The small uppercase lines rendered under the hero.',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Empowering innovation',
        'Through inspire Design',
        'where Challenges spark creativity',
        'and every line of code tells a story',
      ],
    }),
    defineField({
      name: 'featuredHeading',
      title: 'Featured Section Heading',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
          initialValue: '01',
        }),
        defineField({
          name: 'titleLine1',
          title: 'Title Line 1',
          type: 'string',
          initialValue: 'Featured',
        }),
        defineField({
          name: 'titleLine2',
          title: 'Title Line 2',
          type: 'string',
          initialValue: 'Work',
        }),
      ],
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Section Heading',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
          initialValue: '02',
        }),
        defineField({
          name: 'titleLine1',
          title: 'Title Line 1',
          type: 'string',
          initialValue: 'About',
        }),
        defineField({
          name: 'titleLine2',
          title: 'Title Line 2',
          type: 'string',
          initialValue: 'Me',
        }),
      ],
    }),
  ],
  preview: {
    select: {lines: 'heroLines'},
    prepare({lines}) {
      const hero: string[] = Array.isArray(lines) ? lines : []
      return {
        title: 'Home Page',
        subtitle: hero.length ? hero.join(' / ') : 'Landing hero and section headings',
      }
    },
  },
})
