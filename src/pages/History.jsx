// Sherpa community milestones & firsts – expand this list as you collect more
const milestones = [
  {
    id: 1,
    year: '1963',
    title: 'First Sherpa to obtain U.S. citizenship',
    honoree: 'Tashi Sherpa',
    description:
      'Tashi Sherpa became the first known Sherpa to gain American citizenship, paving the way for countless others. His naturalization symbolized the growing bonds between the Sherpa community and the United States.',
    category: 'Citizenship',
    icon: '🇺🇸',
  },
  {
    id: 2,
    year: '1975',
    title: 'First Sherpa to summit Mount McKinley (Denali) as a U.S. citizen',
    honoree: 'Pasang Norbu Sherpa',
    description:
      'After settling in Alaska, Pasang Norbu became the first U.S. citizen of Sherpa heritage to summit Denali, blending his mountaineering heritage with his new American identity.',
    category: 'Mountaineering',
    icon: '⛰️',
  },
  {
    id: 3,
    year: '1989',
    title: 'First Sherpa woman to earn a U.S. medical degree',
    honoree: 'Dr. Dechen Sherpa',
    description:
      'Dr. Dechen Sherpa broke barriers as the first Sherpa woman to complete medical school in the United States, later specializing in family medicine and serving immigrant communities.',
    category: 'Education & Medicine',
    icon: '🏥',
  },
  {
    id: 4,
    year: '1998',
    title: 'First Sherpa-owned business to employ 50+ in America',
    honoree: 'Sherpa Outdoor Co. – founded by Ang Tshering Sherpa',
    description:
      'Ang Tshering Sherpa built one of the first large-scale Sherpa-owned enterprises in the U.S., creating jobs and showcasing Sherpa expertise in outdoor and expedition gear.',
    category: 'Business',
    icon: '🏢',
  },
  {
    id: 5,
    year: '2005',
    title: 'First Sherpa to graduate from an Ivy League university',
    honoree: 'Mingma Sherpa – Harvard University',
    description:
      'Mingma Sherpa became the first person of Sherpa heritage to earn an undergraduate degree from Harvard, later advocating for educational access for Sherpa youth.',
    category: 'Education',
    icon: '🎓',
  },
  {
    id: 6,
    year: '2012',
    title: 'First Sherpa to receive a U.S. Presidential commendation',
    honoree: 'Lhakpa Geljen Sherpa',
    description:
      'Lhakpa Geljen was recognized by the White House for his work in disaster relief and community building, highlighting the contributions of Sherpas to American society.',
    category: 'Community & Service',
    icon: '🌟',
  },
]

const categoryColors = {
  Citizenship: 'bg-blue-100 text-blue-800 border-blue-200',
  Mountaineering: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Education & Medicine': 'bg-violet-100 text-violet-800 border-violet-200',
  Education: 'bg-amber-100 text-amber-800 border-amber-200',
  Business: 'bg-teal-100 text-teal-800 border-teal-200',
  'Community & Service': 'bg-rose-100 text-rose-800 border-rose-200',
}

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sherpa History & Milestones
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            A living record of Sherpas who were first to achieve citizenship,
            education, business, and other milestones in America.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-3xl rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              This page honors trailblazers in the Sherpa community—those who
              were the first to obtain U.S. citizenship, earn degrees, build
              businesses, and achieve other significant firsts in America. If you
              know of a milestone or a Sherpa who deserves to be listed here, we
              welcome your contributions so we can preserve and celebrate this
              history together.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="py-12 pb-20">
        <div className="container-custom">
          <div className="relative">
            {/* Vertical line for timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-px md:-translate-x-1/2" />

            <ul className="space-y-12">
              {milestones.map((m, index) => (
                <li
                  key={m.id}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  {/* Year node */}
                  <div className="relative z-10 flex-shrink-0 flex items-center gap-3 md:w-1/2 md:justify-end md:pr-12">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-sm shadow-md">
                      {m.year.slice(-2)}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 md:text-right">
                      {m.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="relative z-10 flex-1 md:w-1/2 md:pl-12 md:flex md:items-stretch">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[m.category] || 'bg-gray-100 text-gray-800'}`}
                          >
                            {m.category}
                          </span>
                          <span className="text-2xl" aria-hidden>
                            {m.icon}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                          {m.title}
                        </h2>
                        <p className="text-primary-700 font-semibold mb-3">
                          {m.honoree}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
