import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, baseUrl = '/blog' }) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null
  const nextPage = currentPage < totalPages ? currentPage + 1 : null

  const getPageUrl = (page) => {
    if (page === 1) return baseUrl
    return `${baseUrl}/page/${page}`
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-8" data-testid="pagination">
      {prevPage ? (
        <Link 
          href={getPageUrl(prevPage)}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
          data-testid="pagination-prev"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 border rounded opacity-50 cursor-not-allowed dark:border-gray-600">Previous</span>
      )}

      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
            }`}
            data-testid={`pagination-page-${page}`}
          >
            {page}
          </Link>
        ))}
      </div>

      {nextPage ? (
        <Link 
          href={getPageUrl(nextPage)}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
          data-testid="pagination-next"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 border rounded opacity-50 cursor-not-allowed dark:border-gray-600">Next</span>
      )}
    </div>
  )
}
