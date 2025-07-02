import React from 'react'

const HeroSection = () => {
  return (
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-normal text-neutral-800 leading-tight">
                Bio-X is Stanford's pioneering interdisciplinary biosciences institute, bringing together biomedical and life science researchers, clinicians, engineers, physicists, and computational scientists to unlock the secrets of the human body.
              </h1>
            </div>

            {/* News Card */}
            <div className="lg:col-span-1">
              <div className="border-4 border-purple-400 rounded-lg bg-purple-50 p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-neutral-800 leading-tight">
                    New findings from Stanford Bio-X affiliated faculty members Carolyn Bertozzi and Tony Wyss-Coray, with lead author Stanford Bio-X Fellow Sophia Shi and co-author Stanford Bio-X Undergraduate Summer Research Program participant Ryan Suh about the sugary armor on the brain's frontline cells could shed light on cognitive decline and diseases like Alzheimer's – and open new avenues for treatment.
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                      Full story
                    </button>
                    <button
                        className="bg-neutral-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-neutral-600 transition-colors">
                      All stories
                    </button>
                  </div>

                  <div className="w-20 h-20 bg-neutral-200 rounded-lg flex-shrink-0">
                    <img
                        src="/src/assets/actionshot_biox_sophia-shi31.png"
                        alt="Sophia Shi Research"
                        className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection