import Link from 'next/link'
import { format, parseISO } from 'date-fns'

export default function PostCard({ post }) {
  return (
    <div 
      className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
      data-testid={`post-card-${post.id}`}
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        <Link href={`/posts/${post.id}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
        <span className="mx-2">•</span>
        <span>{post.readingTime} min read</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
      <Link 
        href={`/posts/${post.id}`} 
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        data-testid={`read-more-${post.id}`}
      >
        Read More →
      </Link>
    </div>
  )
}
