'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faMapMarkerAlt, 
  faEnvelope, 
  faPhone,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF as fabFacebookF, faXTwitter as fabXTwitter, faInstagram as fabInstagram, faLinkedinIn as fabLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const galleryImages = [
  { id: 1, src: '/images/destinations/tokyo-skyline.jpg', alt: 'Tokyo' },
  { id: 2, src: '/images/destinations/dubai-burj-khalifa.jpg', alt: 'Dubai' },
  { id: 3, src: '/images/destinations/santorini-sunset.jpg', alt: 'Santorini' },
  { id: 4, src: '/images/destinations/paris-eiffel.jpg', alt: 'Paris' },
  { id: 5, src: '/images/destinations/bali-temple.jpg', alt: 'Bali' },
  { id: 6, src: '/images/destinations/iceland-northern-lights.jpg', alt: 'Iceland' },
  { id: 7, src: '/images/destinations/maldives-beach.jpg', alt: 'Maldives' },
  { id: 8, src: '/images/destinations/newyork-times-square.jpg', alt: 'New York' },
  { id: 9, src: '/images/destinations/rome-colosseum.jpg', alt: 'Rome' },
];

export default function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibleCount = isMobile ? 2 : 5;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = Math.max(0, galleryImages.length - visibleCount);
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <footer className="bg-white">
      <section className="gallery-section">
        <div className="relative h-56 sm:h-80 w-full">
          <div className="absolute inset-0">
            <div className="h-1/2 bg-white"></div>
            <div className="h-1/2 bg-black"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pt-0 pb-1 sm:py-4 z-10">
            <div className="w-full flex justify-center px-4 sm:px-8">
              <div className="flex gap-4 sm:gap-11 overflow-hidden">
                <div 
                  className="flex gap-4 sm:gap-11 transition-transform duration-800 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (isMobile ? 176 : 300)}px)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="single-gallery-item flex-shrink-0 w-40 h-36 sm:w-64 sm:h-60 relative group"
                    >
                      <div className="gallery-img relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="hover-overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a href={image.src} className="icon-btn w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer">
                            <FontAwesomeIcon icon={faPlus} className="w-5 h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-4 sm:h-16 bg-black"></div>
      </section>

      <div className="border-t border-white/20 bg-black"></div>

      <div className="footer-top bg-black py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 text-left">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <a href="https://maps.google.com/?q=Istanbul,Turkey" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-amber-500 transition-colors duration-300">Istanbul, Turkey</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:info@globetrotters.com" className="text-gray-300 text-sm hover:text-amber-500 transition-colors duration-300">info@globetrotters.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Hotline</p>
                  <a href="tel:+902125550123" className="text-gray-300 text-sm hover:text-amber-500 transition-colors duration-300">+90 212 555 0123</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={fabFacebookF} className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={fabXTwitter} className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={fabInstagram} className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={fabLinkedinIn} className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-black"></div>

      <div className="footer-main bg-black py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-white text-xl font-bold mb-6">About</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Globetrotters is a pioneering tourism company offering modern capsule hotel experiences. 
                We create unforgettable travel experiences by combining technology and comfort.
              </p>
              <div className="flex items-center">
                <Image
                  src="/logouzun.svg"
                  alt="Globetrotters Logo"
                  width={256}
                  height={80}
                  className="h-20 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services/capsule-hotel-booking" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Capsule Hotel Booking</Link></li>
                <li><Link href="/services/travel-planning" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Travel Planning</Link></li>
                <li><Link href="/services/tour-guidance" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Tour Guidance</Link></li>
                <li><Link href="/services/vip-services" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">VIP Services</Link></li>
                <li><Link href="/services/group-bookings" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Group Bookings</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/career" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Career</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Blog</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">News</Link></li>
                <li><Link href="/features" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Core Features</Link></li>
                <li><Link href="/team" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">Meet Our Teams</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-6">
                Subscribe to our newsletter for the latest news and special offers.
              </p>
              <form>
                <div className="form_group relative">
                  <input
                    type="email"
                    className="form_control w-full bg-white text-black pl-4 pr-12 py-3 rounded-lg text-sm focus:outline-none"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <label className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-500 cursor-pointer">
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-black"></div>

      <div className="footer-bottom bg-black py-6">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © 2025 Globetrotters by Ersel. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                Setting & Privacy
              </Link>
              <Link href="/faqs" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                FAQs
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
