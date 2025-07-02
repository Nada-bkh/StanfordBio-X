import React from 'react'

const GetInvolvedSection = () => {
  return (
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get Involved */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-neutral-800">
                Get Involved
              </h2>

              <div className="border border-neutral-300 rounded-lg p-6">
                <button className="w-full flex items-center justify-between text-left hover:bg-neutral-50 transition-colors">
                  <span className="text-lg font-medium text-neutral-800">Attend</span>
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GetInvolvedSection