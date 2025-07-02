import React from 'react'

const IconFeatureSection = () => {
  const features = [
    {
      icon: '📚',
      title: 'Education',
      description: 'Participating in interdisciplinary research prepares students for careers that make an impact in the scientific community.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Our pioneering approach to science generates novel technologies for exploring how the body works.'
    },
    {
      icon: '🔍',
      title: 'Discover',
      description: 'Research breakthroughs and technological advances by our collaborative teams advance scientific knowledge.'
    },
    {
      icon: '🤝',
      title: 'Collaborate',
      description: 'Our programs bridge disciplines and catalyze discoveries that will ultimately improve human health.'
    }
  ]

  return (
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mx-auto">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed px-2">
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