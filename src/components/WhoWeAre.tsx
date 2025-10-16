'use client';

import Image from 'next/image';
import SubTitle from './SubTitle';

export default function WhoWeAre() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="h-full">
            <div className="relative w-full h-[520px] overflow-hidden rounded-t-full">
              <Image src="/images/destinations/paris-eiffel.jpg" alt="Who We Are" fill className="object-cover" />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <SubTitle text="Who We Are" />
              <h2 className="text-2xl lg:text-4xl font-extrabold text-black mt-3">Great Opportunity For Adventure & Travels</h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              At vero accusamus dignissimos ducimus blanditiis praesentium voluptatum deleniti atque quos. 
              Quis autem vel eum iure reprehenderit voluptate velit esse molestiae consequatur; 
              with our safety-first approach and user-friendly pricing policy, we combine comfort and 
              guidance in every journey.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center">
                <div className="relative mx-auto w-[120px] h-[120px]">
                  <div
                    className="absolute inset-0 bg-amber-500"
                    style={{
                      WebkitMaskImage: 'url(/daire.svg)',
                      maskImage: 'url(/daire.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-extrabold text-black">60%</span>
                </div>
                <h5 className="mt-3 font-semibold text-black">Satisfied Clients</h5>
              </div>

              <div className="text-center">
                <div className="relative mx-auto w-[120px] h-[120px]">
                  <div
                    className="absolute inset-0 bg-amber-500"
                    style={{
                      WebkitMaskImage: 'url(/daire.svg)',
                      maskImage: 'url(/daire.svg)',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-extrabold text-black">93%</span>
                </div>
                <h5 className="mt-3 font-semibold text-black">Success Rate</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


