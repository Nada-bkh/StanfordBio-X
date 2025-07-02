import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-white border-t-2 border-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start space-x-8">
            <a href="#" className="text-neutral-800 hover:text-red-600 text-sm font-medium transition-colors">
              FAQ
            </a>
            <a href="#" className="text-neutral-800 hover:text-red-600 text-sm font-medium transition-colors">
              Contact us
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer