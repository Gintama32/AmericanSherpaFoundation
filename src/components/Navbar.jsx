import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-700">
              American Sherpa Foundation
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary-700 border-b-2 border-primary-700'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/profiles"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/profiles')
                  ? 'text-primary-700 border-b-2 border-primary-700'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Profiles
            </Link>
            <Link
              to="/blogs"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/blogs')
                  ? 'text-primary-700 border-b-2 border-primary-700'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Blogs
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/')
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/profiles"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/profiles')
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Profiles
            </Link>
            <Link
              to="/blogs"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/blogs')
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
