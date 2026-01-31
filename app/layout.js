import './globals.css'
import ThemeToggle from '../components/ThemeToggle'
import Link from 'next/link'

export const metadata = {
  title: 'My Next.js Blog',
  description: 'A production-ready blog built with Next.js',
  openGraph: {
    title: 'My Next.js Blog',
    description: 'A production-ready blog built with Next.js',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="border-b dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              My Blog
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
                Blog
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t dark:border-gray-800 mt-12 py-8 text-center text-gray-500">
          © {new Date().getFullYear()} My Blog. Built with Next.js.
        </footer>
      </body>
    </html>
  )
}
