import { getSortedPostsData } from '../lib/posts'
import PostCard from '../components/PostCard'
import Link from 'next/link'

export default function Home() {
  const allPostsData = getSortedPostsData()
  // Take first 5 for homepage
  const recentPosts = allPostsData.slice(0, 5)

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Exploring the world of web development, one post at a time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="post-list">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  )
}
