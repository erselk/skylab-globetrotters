'use client';

import Image from 'next/image';
import { useState } from 'react';
import SubTitle from './SubTitle';

interface Destination {
  id: number;
  name: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Tokyo',
    title: 'Tokyo - Modern Japan',
    description: 'Unique meeting point of technology and traditions. An unforgettable experience with neon lights, temples and amazing food culture.',
    features: [
      'Capsule hotel accommodation included',
      'With professional guide',
      'All museums and historical sites'
    ],
    image: '/images/destinations/tokyo-skyline.jpg',
  },
  {
    id: 2,
    name: 'Dubai',
    title: 'Dubai - Desert Architecture',
    description: 'Discover modern Arab culture with the world\'s tallest buildings, luxury shopping malls and desert safari.',
    features: [
      'Burj Khalifa and museum tours',
      'Desert safari experience',
      'Luxury accommodation options'
    ],
    image: '/images/destinations/dubai-burj-khalifa.jpg',
  },
  {
    id: 3,
    name: 'Santorini',
    title: 'Santorini - Pearl of Aegean',
    description: 'The most romantic island of the Mediterranean with white houses, blue domes and breathtaking sunsets.',
    features: [
      'Sea view accommodation',
      'Oia sunset tour',
      'Local wine tasting'
    ],
    image: '/images/destinations/santorini-sunset.jpg',
  },
  {
    id: 4,
    name: 'Paris',
    title: 'Paris - City of Lights',
    description: 'Capital of art, culture and romance with Eiffel Tower, Louvre Museum and Seine River.',
    features: [
      'Museum and historical site tours',
      'Seine river cruise',
      'French cuisine experience'
    ],
    image: '/images/destinations/paris-eiffel.jpg',
  },
  {
    id: 5,
    name: 'Bali',
    title: 'Bali - Paradise Island',
    description: 'Combination of peace and adventure with tropical beaches, rice fields and Hindu temples.',
    features: [
      'Beach and nature activities',
      'Spa and yoga experience',
      'Temple and culture tours'
    ],
    image: '/images/destinations/bali-temple.jpg',
  },
  {
    id: 6,
    name: 'Iceland',
    title: 'Iceland - Northern Lights',
    description: 'Nature\'s most fascinating show with northern lights, glaciers and geothermal sources.',
    features: [
      'Northern lights tour',
      'Blue Lagoon experience',
      'Glacier hiking'
    ],
    image: '/images/destinations/iceland-northern-lights.jpg',
  },
];

export default function PopularDestinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);

  return (
    <section className="relative bg-black py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[12rem] lg:text-[20rem] font-bold text-amber-500 select-none">
          Popular
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <SubTitle text="Popular Destinations" />
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Popular Destinations
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 flex">
            <div className="bg-white rounded-xl p-8 flex-1">
              <div className="space-y-3">
                {destinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination)}
                    className={`w-full text-left px-5 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      selectedDestination.id === destination.id
                        ? 'bg-amber-500 text-white'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {destination.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-white flex flex-col justify-center">
            <div className="mb-6">
              <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {selectedDestination.title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {selectedDestination.description}
            </p>

            <div className="space-y-3">
              {selectedDestination.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex">
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

