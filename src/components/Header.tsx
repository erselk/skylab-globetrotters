'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tours', href: '/tours' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/logouzun.svg"
                alt="Globetrotters"
                width={240}
                height={70}
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
            </Link>
          </div>

          <nav className="hidden xl:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-amber-500 transition-colors font-medium text-base"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Arama butonu - eklemeye üşendim */}
            {/* <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-900 hover:text-amber-500 transition-all ml-4"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Link
                href="/booking"
                className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <span className="text-sm tracking-wide">Book Now</span>
                <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
                  <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <button
              className="xl:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-amber-500 transition-colors font-medium text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 mt-4 group w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm tracking-wide">Book Now</span>
                <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
                  <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

