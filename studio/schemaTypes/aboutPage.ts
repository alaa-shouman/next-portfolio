import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'pills',
      title: 'Pills',
      type: 'array',
      description: 'The rounded black labels layered over the portrait.',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Hello, universe 👋',
        'Full Stack Developer 💻',
        'React Native Expert 📱',
        'Problem Solver 🚀',
        'Tea Enthusiast ☕',
      ],
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      description: 'Full-bleed photo sitting behind the pills.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'background',
      title: 'My Background',
      type: 'array',
      description: 'The long-form background story. Use "Closing statement" for the final italic line.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Closing statement', value: 'closing'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              defineArrayMember({
                type: 'object',
                name: 'link',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.required(),
                  }),
                ],
              }),
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'resumeIntro',
      title: 'Resume Intro',
      type: 'text',
      rows: 5,
      description: 'The greeting paragraph above the signature on the resume card.',
    }),
  ],
  preview: {
    select: {media: 'portrait', pills: 'pills'},
    prepare({media, pills}) {
      const list: string[] = Array.isArray(pills) ? pills : []
      return {
        title: 'About Page',
        subtitle: list.length ? list.join(' · ') : 'Portrait, pills and background story',
        media,
      }
    },
  },
})
