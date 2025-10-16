"use client";

import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type GalleryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

const items: GalleryItem[] = [
  { id: 1, title: 'Tokyo', description: 'City lights and modern texture', image: '/images/destinations/tokyo-skyline.jpg', href: 'https://www.youtube.com/watch?v=28ZjrtD_iL0' },
  { id: 2, title: 'Dubai', description: 'Meeting of desert and skyscrapers', image: '/images/destinations/dubai-burj-khalifa.jpg', href: 'https://www.youtube.com/watch?v=xshkQS54Eww' },
  { id: 3, title: 'Santorini', description: 'White-blue fairy tale of Aegean', image: '/images/destinations/santorini-sunset.jpg', href: 'https://www.youtube.com/watch?v=4zAEDLwl9HI' },
  { id: 4, title: 'Paris', description: 'Capital of love and art', image: '/images/destinations/paris-eiffel.jpg', href: 'https://www.youtube.com/watch?v=WHNNHAoaZD4' },
  { id: 5, title: 'Bali', description: 'Tropical nature and peace', image: '/images/destinations/bali-temple.jpg', href: 'https://www.youtube.com/watch?v=IxZ3asZAAuw' },
  { id: 6, title: 'Iceland', description: 'Land of ice and fire', image: '/images/destinations/iceland-northern-lights.jpg', href: 'https://www.youtube.com/watch?v=Pbzn79TSRO0' },
  { id: 7, title: 'Maldives', description: 'Turquoise waters and white sands', image: '/images/destinations/maldives-beach.jpg', href: 'https://www.youtube.com/watch?v=W4YfDg-dKzk' },
  { id: 8, title: 'New York', description: 'The city that never sleeps', image: '/images/destinations/newyork-times-square.jpg', href: 'https://www.youtube.com/watch?v=h3fUgOKFMNU' },
  { id: 9, title: 'Rome', description: 'Heart of history and taste', image: '/images/destinations/rome-colosseum.jpg', href: 'https://www.youtube.com/watch?v=oSexfR0Ubzw' },
  { id: 10, title: 'Santorini II', description: 'Unique sunset views', image: '/images/destinations/santorini-sunset.jpg', href: 'https://www.youtube.com/watch?v=4zAEDLwl9HI' },
  { id: 11, title: 'Switzerland', description: 'Peace at the peak of the Alps', image: '/images/destinations/switzerland-alps.jpg', href: 'https://www.youtube.com/watch?v=B9VRvOKKwfs' },
  { id: 12, title: 'Phuket', description: 'Discovery on Andaman shores', image: '/images/destinations/phuket-beach.jpg', href: 'https://www.youtube.com/watch?v=tC6G2Z3Ij-A' },
];

export const dynamic = 'force-static';

export default function GalleryPage() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const activeYoutubeId = useMemo(() => {
    if (!activeHref) return null;
    try {
      const url = new URL(activeHref);
      const v = url.searchParams.get('v');
      return v || null;
    } catch {
      return null;
    }
  }, [activeHref]);

  return (
    <main className="bg-white pb-16">
      <Breadcrumb title="Gallery" backgroundImageSrc="/images/destinations/paris-eiffel.jpg" />

      <section className="container mx-auto max-w-7xl px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveHref(item.href)}
              className="group relative block rounded-xl overflow-hidden text-left cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-black pr-4 relative pt-3">
                    <span className="absolute top-0 left-0 w-12 h-0.5 bg-amber-500"></span>
                    {item.title}
                  </h4>
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-500 ease-out cursor-pointer">
                    <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                  </span>
                </div>

                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <p className="text-gray-600 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeYoutubeId && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveHref(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1`}
                title="Gallery Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <button
              type="button"
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-black shadow-md hover:bg-amber-500 hover:text-white transition-colors"
              onClick={() => setActiveHref(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}


