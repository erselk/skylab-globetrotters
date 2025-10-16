"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Tour = {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  rating: number;
  price: number; 
  durationDays: number;
  capacity: number;
};

type TourCardProps = {
  tour: Tour;
};

export default function TourCard({ tour }: TourCardProps) {
  const roundedRating = Math.round(tour.rating * 10) / 10;

  return (
    <div className="group relative overflow-visible rounded-2xl bg-transparent transition border-none">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image src={tour.imageSrc} alt={tour.title} fill className="object-cover" />
      </div>
      <div className="relative -mt-10 mx-4 sm:mx-5 rounded-2xl bg-white shadow-none transition group-hover:shadow-none border-none outline-none">
        <div className="px-6 sm:px-7 pt-6">
          <div className="mb-3 flex items-center gap-2">
            <ul className="flex items-center text-amber-500 text-xl">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li key={idx}>
                  <i className={idx < Math.round(tour.rating) ? "fa-solid fa-star" : "fa-regular fa-star text-gray-300"} aria-hidden="true"></i>
                </li>
              ))}
            </ul>
            <span className="text-sm text-gray-600">({roundedRating.toFixed(1)})</span>
          </div>
          <h4 className="mb-2 line-clamp-2 text-2xl font-extrabold text-gray-900">
            <Link href={`/tours/${tour.id}`} className="transition-colors hover:text-amber-600">
              {tour.title}
            </Link>
          </h4>
          <div className="mb-2 flex flex-col gap-1">
            <p className="flex items-center gap-2 text-base text-gray-600">
              <i className="fa-solid fa-location-dot text-amber-500" aria-hidden="true"></i>
              {tour.location}
            </p>
            <p className="flex items-center gap-2 text-base text-gray-700">
              <i className="fa-solid fa-dollar-sign text-amber-500" aria-hidden="true"></i>
              <span>
                Price <span className="font-semibold">${tour.price.toFixed(2)}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto my-6 h-px w-3/4 bg-black/10" />
        <div className="flex items-center justify-between px-6 pb-6 text-base text-gray-700">
          <span className="flex items-center gap-2"><i className="fa-regular fa-clock text-amber-500" aria-hidden="true"></i>{String(tour.durationDays).padStart(2, "0")} Days</span>
          <span className="flex items-center gap-2"><i className="fa-regular fa-user text-amber-500" aria-hidden="true"></i>{tour.capacity}</span>
          <Link href={`/tours/${tour.id}`} className="rounded-md px-2 py-1 text-gray-900 font-semibold transition-colors hover:text-amber-600">
            Details <i className="fa-solid fa-arrow-right ml-1" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}


