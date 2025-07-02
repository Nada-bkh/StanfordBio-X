import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-stanford-red">Stanford Bio‑X</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-neutral-700 hover:text-stanford-red px-3 py-2 text-sm font-medium transition-colors">
                Stories
              </a>
              <a href="#" className="text-neutral-700 hover:text-stanford-red px-3 py-2 text-sm font-medium transition-colors">
                Research
              </a>
              <a href="#" className="text-neutral-700 hover:text-stanford-red px-3 py-2 text-sm font-medium transition-colors">
                Get Involved
              </a>
              <a href="#" className="text-neutral-700 hover:text-stanford-red px-3 py-2 text-sm font-medium transition-colors">
                Events
              </a>
              <a href="#" className="text-neutral-700 hover:text-stanford-red px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-white border-2 border-stanford-red text-stanford-red hover:bg-stanford-red hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
