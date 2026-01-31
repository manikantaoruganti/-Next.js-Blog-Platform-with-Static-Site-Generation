import { Feed } from 'feed'
import { getSortedPostsData } from '../../lib/posts'

export const dynamic = 'force-static'

export async function GET() {
  const posts = getSortedPostsData()
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  
  const feed = new Feed({
    title: "My Next.js Blog",
    description: "A production-ready blog built with Next.js",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/favicon.ico`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${baseUrl}/feed.xml`,
    },
    author: {
      name: "Blog Author",
      email: "author@example.com",
      link: baseUrl,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/posts/${post.id}`,
      link: `${baseUrl}/posts/${post.id}`,
      description: post.excerpt,
      content: post.excerpt,
      author: [
        {
          name: post.author,
          email: "author@example.com",
          link: baseUrl,
        },
      ],
      date: new Date(post.date),
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}
