import { getAllPostIds, getPostData } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// Components to use in MDX
const components = {
  img: (props) => (
    <span className="block my-8">
      <Image
        {...props}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
        alt={props.alt || 'Blog post image'}
        className="rounded-lg shadow-md"
        data-testid="optimized-image"
      />
    </span>
  ),
  pre: (props) => (
    <pre {...props} data-testid="code-block" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4" />
  ),
  code: (props) => (
    <code {...props} className="font-mono text-sm" />
  ),
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
  p: (props) => <p {...props} className="mb-4 leading-relaxed" />,
  ul: (props) => <ul {...props} className="list-disc list-inside mb-4" />,
  li: (props) => <li {...props} className="mb-2" />,
}

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const postData = await getPostData(slug)
  if (!postData) return {}
  
  return {
    title: postData.title,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      authors: [postData.author],
      publishedTime: postData.date,
    },
  }
}

export default async function Post({ params }) {
  const { slug } = await params
  
  try {
    const postData = await getPostData(slug)
    
    return (
      <article className="max-w-3xl mx-auto" data-testid="blog-post">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4" data-testid="post-title">
            {postData.title}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400">
            <time>{postData.date}</time>
            <span>•</span>
            <span data-testid="reading-time">{postData.readingTime} min read</span>
            <span>•</span>
            <span>By {postData.author}</span>
          </div>
        </header>
        
        <div className="prose dark:prose-invert max-w-none" data-testid="post-content">
          <MDXRemote source={postData.content} components={components} />
        </div>
        
        <div className="mt-12 pt-8 border-t dark:border-gray-800">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}
