import { useState } from 'react'

// Sample blog data - in a real app, this would come from an API
const sampleBlogs = [
  {
    id: 1,
    title: 'The Journey of Sherpas in America: A Story of Resilience',
    author: 'American Sherpa Foundation',
    date: '2024-01-15',
    excerpt:
      'Explore the inspiring journey of Sherpas who have made America their home, overcoming challenges and achieving remarkable success in various fields.',
    content: `The Sherpa community has a rich history of resilience and strength, qualities that have served them well as they've built new lives in America. From the mountains of Nepal to cities across the United States, Sherpas have brought their unique skills, culture, and determination.

Many Sherpas first came to America through mountaineering expeditions, where their expertise was highly valued. Over time, they've established communities and families, contributing significantly to American society in fields ranging from business and technology to healthcare and education.

This blog post explores the challenges and triumphs of the Sherpa community in America, highlighting how they've maintained their cultural identity while embracing new opportunities.`,
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Celebrating Sherpa Achievements in Technology',
    author: 'American Sherpa Foundation',
    date: '2024-01-10',
    excerpt:
      'Discover how Sherpas are making significant contributions to the tech industry, from startups to major corporations.',
    content: `The technology sector has seen remarkable contributions from Sherpa professionals. This article highlights several individuals who have excelled in software engineering, data science, and tech entrepreneurship.

From founding successful startups to leading innovation at major tech companies, Sherpas are proving that their problem-solving skills and determination translate perfectly to the tech world. We'll explore their journeys and the unique perspectives they bring to the industry.`,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Preserving Sherpa Culture in the Modern World',
    author: 'American Sherpa Foundation',
    date: '2024-01-05',
    excerpt:
      'Learn about efforts to preserve and share Sherpa culture, traditions, and heritage with future generations.',
    content: `As Sherpas adapt to life in America, preserving their rich cultural heritage becomes increasingly important. This blog post examines various initiatives and individuals working to keep Sherpa traditions alive.

From language preservation programs to cultural festivals, the community is finding innovative ways to maintain their identity while embracing their new home. We'll also look at how younger generations are connecting with their heritage.`,
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Sherpa Women Leaders: Breaking Barriers',
    author: 'American Sherpa Foundation',
    date: '2023-12-28',
    excerpt:
      'Highlighting the achievements of Sherpa women who are leading in their respective fields and inspiring others.',
    content: `Sherpa women have been breaking barriers and achieving excellence across various industries. This article celebrates their accomplishments and the unique challenges they've overcome.

From healthcare to education, business to activism, Sherpa women are making their mark. We'll share inspiring stories of leadership, resilience, and success that serve as motivation for future generations.`,
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Building Community: Sherpa Organizations in America',
    author: 'American Sherpa Foundation',
    date: '2023-12-20',
    excerpt:
      'An overview of organizations and groups that support the Sherpa community across the United States.',
    content: `Community organizations play a crucial role in supporting Sherpas in America. This blog post provides an overview of various groups, associations, and initiatives that help connect the community and provide essential services.

From cultural centers to professional networks, these organizations create spaces for Sherpas to come together, share experiences, and support one another. We'll explore their missions and the impact they're making.`,
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Education and Opportunity: Supporting Sherpa Students',
    author: 'American Sherpa Foundation',
    date: '2023-12-15',
    excerpt:
      'Learn about scholarship programs and educational initiatives supporting Sherpa students in America.',
    content: `Education is a cornerstone of success, and many programs are dedicated to supporting Sherpa students in America. This article highlights scholarship opportunities, mentorship programs, and educational resources available to the community.

We'll also share success stories of Sherpa students who have excelled academically and gone on to achieve great things in their careers.`,
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
  },
]

const categories = ['All', 'Culture', 'Technology', 'Leadership', 'Community', 'Education']

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs =
    selectedCategory === 'All'
      ? sampleBlogs
      : sampleBlogs.filter((blog) => blog.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Stories, insights, and updates from the American Sherpa Foundation
            and our community.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {blog.author}
                    </span>
                    <button className="text-primary-700 font-semibold hover:text-primary-600 transition-colors text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="h-64 md:h-96 overflow-hidden">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  {selectedBlog.category}
                </span>
                <span className="text-sm text-gray-500">
                  {formatDate(selectedBlog.date)}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedBlog.title}
              </h1>
              <p className="text-gray-600 mb-6">By {selectedBlog.author}</p>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl text-gray-600 mb-6 italic">
                  {selectedBlog.excerpt}
                </p>
                <div className="whitespace-pre-line leading-relaxed">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
