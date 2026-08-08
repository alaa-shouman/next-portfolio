import { MetadataRoute } from 'next'
import { getSiteMetadata } from '@/sanity/metadata'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const site = await getSiteMetadata()

  return {
    name: `${site.name} Portfolio`,
    short_name: site.name,
    description: site.jsonLdDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
