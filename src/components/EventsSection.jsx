import React from 'react'

const EventsSection = () => {
  const events = [
    {
      title: 'Interdisciplinary Research Symposium',
      date: 'OCT 27 2023'
    },
    {
      title: 'Bio-X Annual Conference',
      date: 'NOV 15 2023'
    },
    {
      title: 'Graduate Student Showcase',
      date: 'DEC 08 2023'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 text-center">
            Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 leading-tight">
                  {event.title}
                </h3>
                <p className="text-bio-blue font-medium text-sm">
                  {event.date}
                </p>
                <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                  More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
