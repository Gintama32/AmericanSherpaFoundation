import { useState } from 'react'

// Sample profile data - in a real app, this would come from an API
const sampleProfiles = [
  {
    id: 1,
    name: 'Tenzing Sherpa',
    title: 'Entrepreneur & Business Leader',
    location: 'New York, NY',
    achievement:
      'Founded a successful tech startup that employs over 200 people',
    bio: 'Tenzing moved to America in 2005 and has since built a thriving technology company. His innovative approach to business has earned him recognition in Forbes and other major publications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Lhakpa Sherpa',
    title: 'Medical Professional',
    location: 'Boston, MA',
    achievement:
      'Leading cardiologist at a major hospital, published researcher',
    bio: 'Dr. Lhakpa Sherpa is a renowned cardiologist who has published over 50 research papers. She has dedicated her career to improving heart health in underserved communities.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Mingma Sherpa',
    title: 'Educator & Author',
    location: 'Seattle, WA',
    achievement:
      'Award-winning author and professor at a leading university',
    bio: 'Mingma is a professor of cultural studies and has authored several books on Sherpa culture and history. Her work has been instrumental in preserving and sharing Sherpa heritage.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Ang Rita Sherpa',
    title: 'Engineer & Innovator',
    location: 'San Francisco, CA',
    achievement:
      'Senior engineer at a Fortune 500 company, holds 15+ patents',
    bio: 'Ang Rita is a trailblazing engineer who has contributed to groundbreaking innovations in renewable energy. His work has helped advance sustainable technology solutions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Pasang Sherpa',
    title: 'Community Leader & Activist',
    location: 'Denver, CO',
    achievement:
      'Founded multiple community organizations serving immigrants',
    bio: 'Pasang has dedicated her life to helping immigrants integrate into American society. She has established several non-profit organizations that provide essential services to newcomers.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Nima Sherpa',
    title: 'Chef & Restaurateur',
    location: 'Los Angeles, CA',
    achievement:
      'Michelin-starred chef, owner of multiple successful restaurants',
    bio: 'Nima has brought authentic Sherpa cuisine to America, earning critical acclaim and a Michelin star. His restaurants celebrate Sherpa culture through food and hospitality.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
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
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
                  className="w-full h-full object-cover"
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
