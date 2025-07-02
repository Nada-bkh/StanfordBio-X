import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IconFeatureSection from './components/IconFeatureSection'
import GetInvolvedSection from './components/GetInvolvedSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <HeroSection />
        <IconFeatureSection />
        <GetInvolvedSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
