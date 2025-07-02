import React from 'react'

const Navbar = () => {
  return (
      <nav className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-sm mr-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-lg font-bold text-neutral-800">STANFORD</span>
                <span className="text-lg font-bold text-red-600 ml-1">BIO-X</span>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                  Support
                </a>
                <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                  Contact
                </a>
                <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                  Map
                </a>
              </div>
            </div>

            {/* Search */}
            <div className="flex-shrink-0">
              <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-neutral-100 border border-neutral-300 rounded-md px-4 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="border-t border-neutral-200">
            <div className="flex items-center space-x-8 py-3">
              <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors border-b-2 border-red-600 pb-1">
                Support
              </a>
              <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                Research
              </a>
              <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                Get Involved
              </a>
              <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                Events
              </a>
              <a href="#" className="text-neutral-700 hover:text-red-600 text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar