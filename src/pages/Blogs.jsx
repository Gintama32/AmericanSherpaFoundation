import { useState } from 'react'

// Sample blog data - in a real app, this would come from an API
const sampleBlogs = [
  {
    id: 7,
    title: 'A Journey Beyond the Himalayas',
    author: 'American Sherpa Foundation',
    date: '2026-04-03',
    excerpt:
      'An exploration of how Sherpa families in America carry forward Buddhist values, preserve cultural identity, and shape community life across generations.',
    contentHtml: `
      <p>The story of Sherpas in America is not just about migration. It is about the movement of a deeply rooted culture shaped by mountains, resilience, and spirituality. Originally from the high Himalayan regions of Nepal, Sherpas have long been known for their strength, humility, and unmatched endurance. Beyond mountaineering, what truly defines the Sherpa identity is their connection to Tibetan Buddhism.</p>
      <p>As Sherpa families settle in the United States, they bring with them not only their work ethic and community values, but also a spiritual philosophy that quietly shapes their lives and, increasingly, the communities around them.</p>
      <img src="/religion1.png" alt="Sherpa religious and cultural gathering" class="my-6 w-full rounded-lg object-cover" />

      <h3>Buddhism as a Living Practice</h3>
      <p>For Sherpas in America, Buddhism is not something practiced only in temples. It is woven into everyday life.</p>
      <p>Core teachings such as compassion, mindfulness, and respect for all living beings guide how Sherpas:</p>
      <ul>
        <li>Raise their families</li>
        <li>Conduct business</li>
        <li>Build community relationships</li>
      </ul>
      <p>Even in busy American cities, Sherpa households often maintain traditions like:</p>
      <ul>
        <li>Daily prayers or mantra recitations</li>
        <li>Celebrating Buddhist festivals</li>
        <li>Teaching children about karma, kindness, and humility</li>
      </ul>
      <p>This creates a balance between modern American life and ancient Himalayan wisdom.</p>

      <h3>Building Community in a New Land</h3>
      <p>Across cities like New York, Boston, and Colorado, Sherpa communities are growing and organizing. Cultural associations and informal networks help preserve traditions while adapting to a new environment.</p>
      <p>Monasteries and spiritual centers, sometimes small and community-built, serve as gathering places where:</p>
      <ul>
        <li>Monks lead prayers and ceremonies</li>
        <li>Families celebrate religious festivals</li>
        <li>Younger generations reconnect with their roots</li>
      </ul>
      <p>These spaces reflect the same spirit found in Himalayan monasteries, such as Tengboche Monastery, even if they exist thousands of miles away.</p>

      <h3>Preserving Identity Across Generations</h3>
      <p>One of the biggest challenges for Sherpas in America is ensuring that their children stay connected to their heritage.</p>
      <p>Parents often emphasize:</p>
      <ul>
        <li>Learning the Sherpa language</li>
        <li>Understanding Buddhist values</li>
        <li>Respecting elders and community traditions</li>
      </ul>
      <p>At the same time, younger generations blend these traditions with American culture, creating a unique identity that is both Sherpa and American.</p>

      <h3>A Quiet Influence on American Society</h3>
      <p>Sherpa Buddhism may not always be visible, but its influence is meaningful.</p>
      <p>In a fast-paced, high-pressure society, the Sherpa approach to life offers something different:</p>
      <ul>
        <li>A focus on inner peace over external success</li>
        <li>A deep respect for nature and balance</li>
        <li>A belief that actions, no matter how small, matter</li>
      </ul>
      <p>These values resonate far beyond the Sherpa community, especially as mindfulness and meditation become more widely embraced in the U.S.</p>
      <img src="/religion2.png" alt="Buddhist practice in Sherpa community" class="my-6 w-full rounded-lg object-cover" />

      <h3>More Than a Legacy, A Living Culture</h3>
      <p>Sherpas in America are not simply preserving a past. They are actively shaping a future. By carrying forward the teachings of Buddhism while adapting to new environments, they demonstrate that culture is not static.</p>
      <p>It evolves, travels, and grows.</p>
      <p>And in that journey, the Sherpa community continues to offer something powerful: a reminder that strength is not just physical, but spiritual, and that even far from the Himalayas, those values can thrive.</p>
    `,
    content: `The story of Sherpas in America is not just about migration. It is about the movement of a deeply rooted culture shaped by mountains, resilience, and spirituality.`,
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
  },
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
                {selectedBlog.contentHtml ? (
                  <div
                    className="[font-family:'Source_Serif_4',serif] text-[1.05rem] leading-8 space-y-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:[font-family:'Manrope',sans-serif] [&_p]:text-gray-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:text-gray-700 [&_li]:mb-1"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.contentHtml }}
                  />
                ) : (
                  <div className="whitespace-pre-line leading-relaxed">
                    {selectedBlog.content}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
