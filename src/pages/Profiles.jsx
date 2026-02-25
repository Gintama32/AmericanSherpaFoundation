import { useState } from 'react'

// Profiles data - real Sherpa leaders highlighted by the foundation
const sampleProfiles = [
  {
    id: 1,
    name: 'Nurbu Sherpa',
    title: 'Founder & CEO, Sherpa Foods',
    location: 'United States',
    achievement:
      'Founder and CEO of Sherpa Foods, one of the first Nepali consumer packaged goods companies in the United States.',
    bio: 'Nurbu Sherpa is the Founder and Chief Executive Officer of Sherpa Foods, one of the first Nepali consumer packaged goods (CPG) food companies in the United States. He holds a Bachelor of Science in Management from the University of Texas and spent over a decade at Macy’s in New York City in progressively senior roles across sales, buying, marketing, and business management. His broad cross-functional experience in merchandising, marketing, and operations laid a strong foundation for building and scaling Sherpa Foods. Alongside his corporate career, he has been a creative leader and community builder—as one of the first Nepali hip-hop artists to promote the genre in Nepal, co-founder of the Network of Sherpa Students & Professionals (NSSP), and co-founder of Empower1, a nonprofit focused on education and economic initiatives in Nepal. Through Sherpa Foods, he continues to give back by donating a portion of proceeds and providing prepared meals to shelters, food shelves, and community organizations, while leading product, sales, marketing, HR, and day-to-day operations.',
    image: '/nurbu.jpg',
  },
  {
    id: 2,
    name: 'Ang Galgen Sherpa',
    title: 'President & Co-Founder, Everest Accounting & Tax Inc.',
    location: 'Jackson Heights, NY',
    achievement:
      'President and co-founder of Everest Accounting & Tax Inc., a full-service accounting and tax practice serving individuals, businesses, and nonprofits.',
    bio: 'Ang Galgen Sherpa is the President and Co-Founder of Everest Accounting & Tax Inc., a full-service accounting and tax practice based in Jackson Heights, New York. Since launching the firm in 2020, he has built a reputation for precise, reliable, and client-centered tax and advisory services for individuals, small businesses, and nonprofit organizations. He leads strategic direction, oversees complex client engagements, and designs the operational and compliance systems that support consistent, high-quality service. Ang holds a BBA in Accounting from Baruch College, CUNY, and is pursuing an MS in Taxation with advanced coursework in federal income, corporate, and gift and estate taxes. His experience includes an accounting internship at Accountax Advisor Ltd., where he supported payroll, financial reporting, and reconciliations. Beyond his professional work, he has a decade-long record of community leadership, including serving as President of the United Sherpa Association and engaging in disaster relief, community health, and educational initiatives.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb0b90cffc6?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. Lobsang Salaka',
    title: 'Foreign Affairs & National Security Professional',
    location: 'United States',
    achievement:
      'Seasoned military and federal service professional with extensive experience in foreign affairs, national security, and public policy.',
    bio: 'Dr. Lobsang Salaka is a seasoned military and federal service professional with extensive expertise in foreign affairs, national security, and law and policy. He has served as a Foreign Affairs Specialist with the U.S. Air Force, supporting international engagement and Security Cooperation programs, and previously held key roles at the U.S. Department of Agriculture, U.S. Department of State, and U.S. Census Bureau. Dr. Salaka has experience on Capitol Hill as a Congressional Fellow in the offices of Rep. Joe Crowley and Rep. Adriano Espaillat and as a Congressional Legislative Fellow funded by Student Veterans of America and the Veterans of Foreign Wars. His public service spans local, state, and federal government, including work with the New York State Department of Labor and three terms on Queens Community Board District 3, where he chaired the Immigration Committee. He mentors graduate students at Columbia University’s School of International and Public Affairs, serves on the Columbia University Washington, D.C. Alumni Association board, and is active in veterans’ and community organizations. His academic credentials include a Doctor of Law and Policy from Northeastern University and multiple graduate degrees in public administration and business.',
    image: '/lobsang.jpg',
  },
]

export default function Profiles() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            High Achieving Sherpas in America
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Celebrating the remarkable achievements and contributions of
            Sherpas who have excelled in various fields across America.
          </p>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProfiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProfile(profile)}
              >
              <div className="h-64 overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {profile.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    📍 {profile.location}
                  </p>
                  <p className="text-gray-700 line-clamp-3">
                    {profile.achievement}
                  </p>
                  <button className="mt-4 text-primary-700 font-semibold hover:text-primary-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProfile(null)}
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
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedProfile.name}
              </h2>
              <p className="text-primary-600 font-semibold text-lg mb-2">
                {selectedProfile.title}
              </p>
              <p className="text-gray-600 mb-6">📍 {selectedProfile.location}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Key Achievement
                </h3>
                <p className="text-gray-700">{selectedProfile.achievement}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Biography
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProfile.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
