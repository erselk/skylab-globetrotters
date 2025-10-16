'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import SubTitle from './SubTitle';

interface Testimonial {
  id: number;
  title: string;
  rating: number;
  comment: string;
  name: string;
  position: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Amazing Capsule Hotel Experience',
    rating: 5,
    comment: 'The capsule hotel experience I had with Globetrotters was truly unforgettable. Perfect combination of modern technology and comfort. I definitely recommend it!',
    name: 'John Smith',
    position: 'Software Developer',
    avatar: '/images/testimonials/john-smith.jpg'
  },
  {
    id: 2,
    title: 'Perfect Organization',
    rating: 5,
    comment: 'We received professional support throughout the entire process. Everything was flawless from reservation to accommodation. Thank you Globetrotters!',
    name: 'Sarah Johnson',
    position: 'Graphic Designer',
    avatar: '/images/testimonials/sarah-johnson.jpg'
  },
  {
    id: 3,
    title: 'Different and Special',
    rating: 5,
    comment: 'The capsule hotel concept is really different and special. Minimalist approach and technological comfort together. I was very satisfied.',
    name: 'Michael Brown',
    position: 'Business Manager',
    avatar: '/images/testimonials/michael-brown.jpg'
  },
  {
    id: 4,
    title: 'Future of Accommodation',
    rating: 5,
    comment: 'This is really the future of accommodation understanding. I have never seen another place where technology and comfort combine so beautifully.',
    name: 'Emily Davis',
    position: 'Architect',
    avatar: '/images/testimonials/emily-davis.jpg'
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 400);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`w-4 h-4 ${
          index < rating ? 'text-amber-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 px-6">
          <SubTitle text="Customer Reviews" />
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Customer Reviews
          </h2>
          
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-0 items-stretch">
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden lg:col-span-2">
          <Image
            src="/images/capsule-hotels/tokyo-capsule-hotel.jpg"
            alt="Capsule Hotel Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center p-6 lg:p-16 lg:col-span-3 overflow-hidden">
            <div className="w-full max-w-2xl">
              <div 
                className={`${
                  isAnimating ? 'animate-slide-out' : 'animate-slide-in'
                }`}
              >
                <div className="flex items-start gap-6 mb-8 min-h-[96px]">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-9xl text-amber-500"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                      {testimonials[currentTestimonial].title}
                    </h3>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                </div>

                <div className="mb-8 sm:mb-10 min-h-[140px] sm:min-h-[120px]">
                  <p className="text-gray-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                    {testimonials[currentTestimonial].comment}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-xl">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-500 text-lg">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
