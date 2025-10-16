'use client';

import Image from 'next/image';
import { useState, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Slide {
  id: number;
  title: string;
  content: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'FUTURE OF TRAVEL EXPERIENCE',
    content: 'Unique tour experiences combining comfort and minimalism with capsule hotel technology',
    image: '/images/destinations/tokyo-skyline.jpg',
  },
  {
    id: 2,
    title: 'MODERN CAPSULE HOTELS',
    content: 'Take your travel experience to the next level with futuristic design and innovative accommodation solutions',
    image: '/images/destinations/dubai-burj-khalifa.jpg',
  },
  {
    id: 3,
    title: 'WORLD TOUR ADVENTURES',
    content: 'Unique world tours filled with carefully selected routes and unforgettable destinations',
    image: '/images/destinations/santorini-sunset.jpg',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const header = document.querySelector('header') as HTMLElement | null;

    const update = () => {
      const measured = header?.getBoundingClientRect().height ?? 0;
      const rounded = Math.ceil(measured);
      setHeaderHeight(rounded);
      setViewportWidth(window.innerWidth);
      const vh = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--header-h', `${rounded}px`);
    };

    update();
    requestAnimationFrame(() => update());

    let ro: ResizeObserver | null = null;
    if (header && 'ResizeObserver' in window) {
      ro = new ResizeObserver(() => update());
      ro.observe(header);
    }

    let mo: MutationObserver | null = null;
    if (header && 'MutationObserver' in window) {
      mo = new MutationObserver(() => update());
      mo.observe(header, { attributes: true, childList: true, subtree: true });
    }

    const onResize = () => update();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize);
      window.visualViewport.addEventListener('scroll', onResize);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (ro && header) ro.disconnect();
      if (mo) mo.disconnect();
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', onResize);
        window.visualViewport.removeEventListener('scroll', onResize);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const threshold = 50; 
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const isLgUp = viewportWidth >= 1024;
  const isNarrow = viewportWidth > 0 && viewportWidth < 700;
  const bufferPx = isNarrow ? 16 : 8;
  const sectionStyle: React.CSSProperties = {
    paddingTop: isLgUp ? 0 : `calc(var(--header-h, 0px) + env(safe-area-inset-top) + ${bufferPx}px)`,
    height: 'calc(var(--vh, 1vh) * 100)'
  };

  return (
    <section
      className="relative bg-black overflow-hidden"
      style={sectionStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? 'opacity-100 z-10 pointer-events-auto'
              : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl h-full flex items-center py-4 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 w-full items-center">
              <div className="flex flex-col justify-center space-y-3 lg:space-y-6">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                  {slide.title}
                </h1>

                <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6">
                  <p className="text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed max-w-lg">
                    {slide.content}
                  </p>

                <a
                  href="/tours"
                  className="hidden lg:inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group self-start lg:self-end whitespace-nowrap"
                >
                  <span className="text-sm tracking-wide">Explore More</span>
                  <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                  </span>
                </a>
                </div>
              </div>

              <div className="relative h-[280px] sm:h-[350px] lg:h-[600px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent z-10"></div>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        </div>
      ))}


      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-gray-400 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 items-center justify-center text-gray-400 hover:text-white group"
        aria-label="Önceki Slayt"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-gray-400 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 items-center justify-center text-gray-400 hover:text-white group"
        aria-label="Sonraki Slayt"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}