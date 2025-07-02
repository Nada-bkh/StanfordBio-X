import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight">
              Bio‑X pursues breakthrough discoveries advancing our understanding of the human body and educates the next generation.
            </h2>
          </div>
          
          <div className="bg-neutral-100 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-center w-24 h-24 bg-bio-yellow rounded-full mx-auto">
              <span className="text-4xl">😊</span>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800">
                Bio‑X Researchers win Nobel Prize
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-bio-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Full Story
                </button>
                <button className="bg-white border-2 border-bio-blue text-bio-blue px-6 py-3 rounded-lg font-medium hover:bg-bio-blue hover:text-white transition-colors">
                  All Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
