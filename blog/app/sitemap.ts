import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let artworks = getBlogPosts().map((page) => ({
    url: `${baseUrl}/artwork/${page.slug}`,
    lastModified: page.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/artwork', '/press', '/cv'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...artworks]
}
