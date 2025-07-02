import React from 'react'
import { GraduationCap, Lightbulb, Search, Users } from 'lucide-react'

const IconFeatureSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Training the next generation of interdisciplinary scientists'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new approaches to biological challenges'
    },
    {
      icon: Search,
      title: 'Discovery',
      description: 'Uncovering fundamental insights about life'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Bringing together diverse expertise and perspectives'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mx-auto">
                <feature.icon className="w-8 h-8 text-bio-blue" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IconFeatureSection
