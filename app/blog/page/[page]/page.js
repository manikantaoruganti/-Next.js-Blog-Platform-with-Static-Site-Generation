import { getSortedPostsData } from '../../../../lib/posts'
import PostCard from '../../../../components/PostCard'
import Pagination from '../../../../components/Pagination'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const allPosts = getSortedPostsData()
  const POSTS_PER_PAGE = 10
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  
  if (totalPages <= 1) return []

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }))
}

export default async function BlogPage({ params }) {
  const resolvedParams = await params
  const page = Number(resolvedParams.page)
  const allPosts = getSortedPostsData()
  const POSTS_PER_PAGE = 10
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

  if (isNaN(page) || page < 2 || page > totalPages) {
    notFound()
  }

  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const posts = allPosts.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-8">All Posts (Page {page})</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="post-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
          baseUrl="/blog"
        />
      </section>
    </div>
  )
}
