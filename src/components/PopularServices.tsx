'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SubTitle from './SubTitle';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icons: string[];
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Capsule Hotel Tokyo',
    description: 'Experience the future of accommodation in Tokyo\'s most innovative capsule hotels',
    image: '/images/destinations/tokyo-skyline.jpg',
    icons: ['blanket', 'cat', 'tent', 'fire'],
    link: '/tour-details'
  },
  {
    id: 2,
    title: 'Dubai Desert Safari',
    description: 'Luxury desert adventure with premium capsule accommodation',
    image: '/images/destinations/dubai-burj-khalifa.jpg',
    icons: ['camera', 'binoculars', 'tent', 'compass'],
    link: '/tour-details'
  },
  {
    id: 3,
    title: 'Santorini Retreat',
    description: 'Peaceful island getaway with stunning views and modern capsule amenities',
    image: '/images/destinations/santorini-sunset.jpg',
    icons: ['mountain', 'snow', 'fire', 'tent'],
    link: '/tour-details'
  },
  {
    id: 4,
    title: 'Bali Paradise',
    description: 'Tropical beach experience with crystal clear waters and luxury capsule hotels',
    image: '/images/destinations/bali-temple.jpg',
    icons: ['beach', 'sun', 'water', 'palm'],
    link: '/tour-details'
  },
  {
    id: 5,
    title: 'Paris City Explorer',
    description: 'Urban adventure through vibrant Paris with cultural capsule hotel experiences',
    image: '/images/destinations/paris-eiffel.jpg',
    icons: ['building', 'camera', 'map', 'coffee'],
    link: '/tour-details'
  },
  {
    id: 6,
    title: 'Iceland Adventure',
    description: 'Mysterious northern landscapes with traditional hospitality',
    image: '/images/destinations/iceland-northern-lights.jpg',
    icons: ['sun', 'camel', 'tent', 'star'],
    link: '/tour-details'
  }
];

const iconMap: { [key: string]: string } = {
  blanket: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  cat: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  tent: 'M4 3h16l-2 8H6L4 3z M4 3l2 8h12l2-8 M4 3v18h16V3',
  fire: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-1.5-2.5-1.5-2.5s-1.5 1.12-1.5 2.5a2.5 2.5 0 0 0 2.5 2.5z M12 2C8.5 2 6 4.5 6 8c0 1.5 1 3 1 3s1-1.5 1-3c0-1.5 1-3 3-3s3 1.5 3 3c0 1.5 1 3 1 3s1-1.5 1-3c0-3.5-2.5-6-6-6z',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z',
  binoculars: 'M7 10h2v2H7z M11 10h2v2h-2z M3 6h4v4H3z M17 6h4v4h-4z M3 14h4v4H3z M17 14h4v4h-4z',
  compass: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  mountain: 'M8 3l4 8 5-4-3 6h4L8 3z',
  snow: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  beach: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  sun: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41',
  water: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z',
  palm: 'M12 2L8 6h8l-4-4z M8 6v12h8V6 M12 18v4',
  building: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4',
  map: 'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z M8 2v16M16 6v16',
  coffee: 'M17 11h1a3 3 0 0 1 0 6h-1M3 11h14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z M5 4h14l-1 7H6L5 4z',
  camel: 'M12 2C8 2 5 5 5 9c0 2 1 4 2 5h10c1-1 2-3 2-5 0-4-3-7-7-7z M8 14h8M10 18h4',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
};

export default function PopularServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    if (typeof window !== 'undefined') {
      setItemsPerView(getItemsPerView());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= services.length ? 0 : prev + itemsPerView
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  const visibleServices = services.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="px-6 pt-12 pb-8 lg:pt-20 lg:pb-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SubTitle text="Popular Services" />
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and special travel experiences
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer relative flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
                tabIndex={-1}
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-amber-500 transition-all duration-300 mx-3">
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                    <a href={service.link} className="hover:underline">
                      {service.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    {service.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={iconMap[icon] || iconMap.star}
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 overflow-visible">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 z-20">
                    <a
                      href={service.link}
                      className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-full group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
