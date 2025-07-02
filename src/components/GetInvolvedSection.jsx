import React from 'react'

const GetInvolvedSection = () => {
  const actions = [
    { title: 'Attend', description: 'Join our events and seminars' },
    { title: 'Apply', description: 'Become part of our research community' },
    { title: 'Support', description: 'Help advance our mission' }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800">
            Get Involved
          </h2>
          
          <div className="space-y-4">
            {actions.map((action, index) => (
              <button
                key={index}
                className="w-full bg-bio-blue text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors shadow-sm"
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="font-semibold">{action.title}</span>
                  <span className="text-sm opacity-90">{action.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
