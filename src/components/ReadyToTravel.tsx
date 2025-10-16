'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ReadyToTravel() {
  return (
    <section className="relative min-h-[350px] lg:min-h-[450px] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/destinations/tokyo-skyline.jpg')"
        }}
      />
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready for Real Adventure
            <br />
            with Capsule Hotel Tourism?
          </h2>
          
          <div className="flex justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm tracking-wide">Check Availability</span>
              <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
                <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
