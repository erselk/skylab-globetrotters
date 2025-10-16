'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight, faCity, faMountain, faCrown, faLandmark } from '@fortawesome/free-solid-svg-icons';
import SubTitle from './SubTitle';

type AvailabilityCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const cards: AvailabilityCard[] = [
  {
    id: 1,
    title: 'City Escapes',
    description: 'Most popular city routes for weekends.',
    image: '/images/destinations/newyork-times-square.jpg',
    icon: faCity,
  },
  {
    id: 2,
    title: 'Nature & Discovery',
    description: 'Hiking and camping experience in the heart of nature.',
    image: '/images/destinations/iceland-northern-lights.jpg',
    icon: faMountain,
  },
  {
    id: 3,
    title: 'Luxury Vacation',
    description: 'Premium accommodation and VIP services.',
    image: '/images/destinations/maldives-beach.jpg',
    icon: faCrown,
  },
  {
    id: 4,
    title: 'Cultural Routes',
    description: 'Cultural tours around the world.',
    image: '/images/destinations/rome-colosseum.jpg',
    icon: faLandmark,
  },
];

export default function Availability() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SubTitle text="Availability" />
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">Availability & Discovery</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Find the best dates and destinations that suit your plans. Start your journey immediately 
              with capsule hotel comfort and free route options.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold border border-black/20 hover:border-transparent hover:bg-amber-500 hover:text-white transition-all duration-500 ease-out group"
            >
              <span className="text-sm tracking-wide">Learn More</span>
              <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-500 ease-out">
                <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div key={card.id} className="group relative rounded-xl bg-white p-5 pt-32 shadow-2xl transition-shadow duration-500 ease-out">
                <span className="absolute top-3 left-3 w-24 h-24 rounded-full bg-[rgba(0,0,0,0.02)] text-amber-500 flex items-center justify-center transition-colors duration-500 ease-out group-hover:bg-amber-500 group-hover:text-white">
                  <FontAwesomeIcon icon={card.icon} className="w-8 h-8" />
                </span>

                <h4 className="text-lg font-semibold text-black mb-2">{card.title}</h4>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


