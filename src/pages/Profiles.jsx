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
    image: '/galgen.jpg',
    imagePosition: 'object-top',
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
  {
    id: 4,
    name: 'Sonam Lama',
    title: 'Real Estate Professional',
    location: 'United States',
    achievement:
      'Real estate expert with over 11 years of experience helping families and investors make confident property decisions.',
    bio: 'My name is Sonam Lama, and real estate has been more than just my career, it’s been my passion for over 11 years. I started this journey with one simple goal to help families make confident decisions when buying or selling one of the most important investments of their lives. Over the years, I’ve had the privilege of guiding first time homebuyers, growing families, and investors through every step of the process. I understand that real estate isn’t just about properties, it’s about dreams, stability, and building a future. That’s why I focus on honest advice, strong negotiation, and making the process as smooth and stress free as possible. My business is built on trust, relationships, and results. Many of my clients become repeat clients and referrals, which I consider the greatest compliment. Whether you’re buying your first home, selling for top value, or planning your next investment, I am committed to protecting your best interests and helping you achieve your goals with confidence. Real estate is not just what I do, it’s who I am.',
    image: '/sonam.jpg',
    imageFit: 'object-contain',
    imagePosition: 'object-top',
  },
  {
    id: 5,
    name: 'Phurbu N Lama',
    title: 'Global Controller, Orchestra Group',
    location: 'New York, NY',
    achievement:
      'Leads accounting and financial infrastructure at Orchestra Group (formerly BerlinRosen); former Controller at Zero Point Zero Productions; CPA.',
    bio: 'Phurbu N Lama, aka Phurnyima, is the Global Controller for Orchestra Group (formerly BerlinRosen), a New York–headquartered public relations firm. He leads the accounting function and plays a key role in strengthening the organization’s financial infrastructures, supporting M&A activities, overseeing consolidated financial reporting, building centralized accounting processes, and driving systems integration and upgrades. Known for a disciplined, hands-on leadership style, he partners across teams to improve operational visibility and support timely, data-informed decision-making. Before joining Orchestra, Phurbu served as Controller at Zero Point Zero Productions, the production company behind a popular CNN reality series hosted by Anthony Bourdain. He began his career as a staff accountant, advancing to Senior Accountant over 10 years at Kidro Production and the nonprofit Rose’s Broadway Kids. Before his corporate finance career, Phurbu was a second-generation rug manufacturer and exporter from Nepal, spending over 8 years in his family\'s business managing the export of fine, handmade Nepalese Tibetan rugs to Europe and the United States. He continues to pursue his passion for rug design and customization and collaborates with luxury brands such as Stickley Furniture. Phurbu earned a bachelor’s degree in business administration with an accounting major and completed his CPA.',
    image: '/phurba.png',
  },
  {
    id: 6,
    name: 'Dr. Phudorji Sherpa',
    title: 'Family Nurse Practitioner',
    location: 'Montgomery County, MD',
    achievement:
      'DNP, FNP-C, CCRN—provides comprehensive primary and preventive care with Montgomery County DHHS; former critical care nurse at Walter Reed.',
    bio: 'Dr. Phudorji Sherpa, DNP, FNP-C, CCRN, is a Family Nurse Practitioner with Maryland’s Montgomery County Department of Health and Human Services, where he provides comprehensive primary, preventive, and episodic care to individuals and families across the region. He conducts detailed health assessments, manages acute and chronic conditions, and delivers evidence-based interventions designed to meet the needs of the county’s diverse communities. Before joining Montgomery County, Dr. Sherpa practiced as a Family Nurse Practitioner with MedStar Urgent Care across Maryland, Virginia, and Washington, DC. His clinical foundation is rooted in extensive service within the U.S. military healthcare system; he served as a Charge Nurse and Critical Care Nurse at Walter Reed National Military Medical Center and other military medical centers, gaining high-acuity experience across the Medical ICU, Pediatric ICU, medical-surgical, and telemetry units. His military service has been recognized with multiple commendations for clinical excellence and dedication. Dr. Sherpa earned his Doctor of Nursing Practice from the University of Maryland School of Nursing, where he was honored for Excellence in the Family Nurse Practitioner Program. He also holds a Bachelor of Science in Nursing from New York University, graduating Magna Cum Laude, and a Bachelor of Arts from Wesleyan University. He maintains national certification as an FNP-C and CCRN.',
    image: '/phurdorje.png',
  },
  {
    id: 7,
    name: 'Dawa G. Sherpa',
    title: 'Sr. Manager, Technical Support Engineering at Microsoft',
    location: 'United States',
    achievement:
      'Leads advertiser support at Microsoft and has progressed from solutions consulting to senior technical support leadership across AppNexus, AT&T, and Microsoft.',
    bio: 'Dawa G. Sherpa is a Sr. Manager of Technical Support Engineering at Microsoft, where he leads an advertiser support team. He originally joined AppNexus in 2018 and remained with the organization through acquisitions by AT&T and later Microsoft. Throughout these transitions, Dawa advanced through roles including Solutions Consultant, Product Support Sr Analyst, Director of Product Support, and now Sr Manager, Technical Support. He specializes in scaling technical support for global advertiser clients within the ad-tech sector. Before working in technology, Dawa worked at ad agencies and ran digital ad campaigns across social media platforms for some of the largest advertisers. He later pivoted into technology by completing an immersive web development bootcamp. He holds a Bachelor’s degree from Baruch College and volunteered as a Marketing Coordinator with NSSP (Network of Sherpa Students and Professionals) throughout college.',
    image: '/dawa.jpg',
  },
  {
    id: 8,
    name: 'SFC Kalden Lama',
    title: 'United States Army Recruiter',
    location: 'Irving, TX (Dallas-Fort Worth Battalion)',
    achievement:
      'SFC in the U.S. Army recognized for recruiting excellence, mentorship, and consistent mission success since joining Army Recruiting Command in 2016.',
    bio: 'Sergeant First Class Kalden Lama serves as a United States Army Recruiter at Irving Recruiting Station in the Dallas-Fort Worth Battalion. Born in Bamti Bhandar, Ramechhap, he is married to Ngima Yangji Sherpa and is the father of two sons, Max Lama and Yidam Sherpa Lama. He completed his schooling at Galaxy Public High School in Kathmandu and earned his bachelor’s degree from Excelsior College, New York. Since enlisting in 2010 while pursuing higher education, SFC Lama has built a distinguished career marked by leadership and excellence. His service includes a deployment to Kuwait and assignments with the 15th Engineering Battalion, 615th Aviation Battalion (as squad leader and section sergeant), New York City Recruiting Battalion, and Dallas-Fort Worth Recruiting Battalion. His awards include the Meritorious Service Medal, Army Commendation Medal, Army Achievement Medal, Military Outstanding Volunteer Service Medal, Good Conduct Medal, and the Glen E. Morrell Award. Mission-oriented and proven, SFC Lama remains dedicated to strengthening the force one future soldier at a time.',
    image: '/kalden.png',
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
            Sherpas in America
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Celebrating the remarkable individuals who have adopted America as
            their home. Sherpas will always improve nation-building, even though
            they are a new category of American immigrants.
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
              <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className={`w-full h-full ${profile.imageFit || 'object-cover'} ${profile.imagePosition || 'object-center'} hover:scale-110 transition-transform duration-300`}
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
              <div className="h-64 md:h-80 overflow-hidden bg-gray-100">
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className={`w-full h-full ${selectedProfile.imageFit || 'object-cover'} ${selectedProfile.imagePosition || 'object-center'}`}
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
