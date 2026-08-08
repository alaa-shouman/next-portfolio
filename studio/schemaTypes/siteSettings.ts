import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name shown in the profile block.',
      initialValue: 'Alaa Shouman',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Job title shown under the name, e.g. "Software Engineer".',
      initialValue: 'Software Engineer',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: 'Round profile photo in the header profile block.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      description: 'IANA timezone used by the live clock on the landing page.',
      initialValue: 'Asia/Beirut',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      description: 'PDF downloaded by the Resume button.',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'signature',
      title: 'Signature',
      type: 'image',
      description: 'Handwritten signature image on the resume card.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          options: {layout: 'tags'},
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Social share image (1200x630 recommended).',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'social',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'url'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'avatar'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Site Settings',
        subtitle: subtitle || 'Global site configuration',
        media,
      }
    },
  },
})
