'use client';

import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Safe Travel',
    description: 'Peaceful travel with comprehensive insurance and 24/7 security support',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    id: 2,
    title: 'Fast Payment',
    description: 'Make instant reservations with our secure payment system',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Professional support that is always with you throughout your journey',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75zM12 6a6 6 0 11-6 6 6 6 0 016-6z'
  },
  {
    id: 4,
    title: 'Premium Comfort',
    description: 'Maximum comfort and privacy with luxury capsule hotel experience',
    icon: 'M4.5 12.75l6 6 9-13.5'
  },
  {
    id: 5,
    title: 'Worldwide',
    description: 'Unforgettable travel experiences in 200+ destinations across 50+ countries',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 6,
    title: 'Eco-Friendly',
    description: 'Environmentally respectful travel with sustainable technologies',
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z'
  }
];

export default function FeaturedFeatures() {
  return (
    <section className="px-6 py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group cursor-pointer h-full"
            >
              <div className="bg-gray-100 rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-amber-500 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-4 lg:gap-6 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 shadow-sm">
                      <svg
                        className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={feature.icon}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
