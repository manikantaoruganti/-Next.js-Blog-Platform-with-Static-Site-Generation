import { getSortedPostsData } from '../../lib/posts'
import PostCard from '../../components/PostCard'
import Pagination from '../../components/Pagination'

export const metadata = {
  title: 'Blog Posts',
  description: 'Read our latest articles',
}

export default function BlogHome() {
  const allPosts = getSortedPostsData()
  const POSTS_PER_PAGE = 10
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const posts = allPosts.slice(0, POSTS_PER_PAGE)

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-8">All Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="post-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination 
            currentPage={1} 
            totalPages={totalPages} 
            baseUrl="/blog"
          />
        )}
      </section>
    </div>
  )
}
