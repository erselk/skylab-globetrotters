"use client";

import React from "react";
import TourCard, { Tour } from "./TourCard";

const toursSeed: Tour[] = [
  {
    id: "bali-escape",
    title: "Bali Escape",
    location: "Bali, Indonesia",
    imageSrc: "/images/destinations/bali-temple.jpg",
    rating: 4.8,
    price: 93.65,
    durationDays: 5,
    capacity: 25,
  },
  {
    id: "paris-highlights",
    title: "Paris Highlights",
    location: "Paris, France",
    imageSrc: "/images/destinations/paris-eiffel.jpg",
    rating: 4.9,
    price: 120.0,
    durationDays: 4,
    capacity: 18,
  },
  {
    id: "rome-ancient",
    title: "Ancient Rome Discovery",
    location: "Rome, Italy",
    imageSrc: "/images/destinations/rome-colosseum.jpg",
    rating: 4.7,
    price: 110.5,
    durationDays: 3,
    capacity: 20,
  },
  {
    id: "tokyo-modern",
    title: "Modern Tokyo",
    location: "Tokyo, Japan",
    imageSrc: "/images/destinations/tokyo-skyline.jpg",
    rating: 4.8,
    price: 140.25,
    durationDays: 6,
    capacity: 16,
  },
  {
    id: "newyork-city",
    title: "New York City Break",
    location: "New York, USA",
    imageSrc: "/images/destinations/newyork-times-square.jpg",
    rating: 4.6,
    price: 150.0,
    durationDays: 3,
    capacity: 30,
  },
  {
    id: "santorini-sunset",
    title: "Santorini Sunset Views",
    location: "Santorini, Greece",
    imageSrc: "/images/destinations/santorini-sunset.jpg",
    rating: 4.9,
    price: 130.0,
    durationDays: 5,
    capacity: 12,
  },
  {
    id: "maldives-relax",
    title: "Maldives Relax Retreat",
    location: "North Province, Maldives",
    imageSrc: "/images/destinations/maldives-beach.jpg",
    rating: 5.0,
    price: 200.0,
    durationDays: 7,
    capacity: 10,
  },
  {
    id: "iceland-adventure",
    title: "Iceland Adventure",
    location: "Iceland",
    imageSrc: "/images/destinations/iceland-northern-lights.jpg",
    rating: 4.7,
    price: 180.0,
    durationDays: 6,
    capacity: 14,
  },
  {
    id: "switzerland-alps",
    title: "Switzerland Alps",
    location: "Switzerland",
    imageSrc: "/images/destinations/switzerland-alps.jpg",
    rating: 4.8,
    price: 210.0,
    durationDays: 5,
    capacity: 15,
  },
  {
    id: "barcelona-art",
    title: "Barcelona Art & Gaudi",
    location: "Barcelona, Spain",
    imageSrc: "/images/destinations/barcelona-sagrada.jpg",
    rating: 4.7,
    price: 115.0,
    durationDays: 3,
    capacity: 22,
  },
  {
    id: "dubai-luxury",
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    imageSrc: "/images/destinations/dubai-burj-khalifa.jpg",
    rating: 4.6,
    price: 170.0,
    durationDays: 4,
    capacity: 24,
  },
  {
    id: "phuket-beaches",
    title: "Phuket Beaches",
    location: "Phuket, Thailand",
    imageSrc: "/images/destinations/phuket-beach.jpg",
    rating: 4.5,
    price: 99.0,
    durationDays: 4,
    capacity: 26,
  },
  {
    id: "barcelona-food",
    title: "Barcelona Food Tour",
    location: "Barcelona, Spain",
    imageSrc: "/images/destinations/barcelona-sagrada.jpg",
    rating: 4.6,
    price: 105.0,
    durationDays: 2,
    capacity: 20,
  },
  {
    id: "tokyo-tradition",
    title: "Tokyo Tradition",
    location: "Tokyo, Japan",
    imageSrc: "/images/destinations/tokyo-skyline.jpg",
    rating: 4.8,
    price: 135.0,
    durationDays: 3,
    capacity: 18,
  },
  {
    id: "rome-food",
    title: "Rome Street Food",
    location: "Rome, Italy",
    imageSrc: "/images/destinations/rome-colosseum.jpg",
    rating: 4.7,
    price: 95.0,
    durationDays: 2,
    capacity: 22,
  },
  {
    id: "paris-museums",
    title: "Paris Museums",
    location: "Paris, France",
    imageSrc: "/images/destinations/paris-eiffel.jpg",
    rating: 4.9,
    price: 125.0,
    durationDays: 3,
    capacity: 16,
  },
  {
    id: "newyork-lights",
    title: "New York Lights",
    location: "New York, USA",
    imageSrc: "/images/destinations/newyork-times-square.jpg",
    rating: 4.6,
    price: 145.0,
    durationDays: 3,
    capacity: 28,
  },
  {
    id: "santorini-wine",
    title: "Santorini Wine",
    location: "Santorini, Greece",
    imageSrc: "/images/destinations/santorini-sunset.jpg",
    rating: 4.8,
    price: 132.0,
    durationDays: 2,
    capacity: 12,
  },
];

type ToursGridProps = {
  page?: number;
  perPage?: number;
};

export default function ToursGrid({ page = 1, perPage = 9 }: ToursGridProps) {
  const total = toursSeed.length;
  const totalPages = Math.ceil(total / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  const pageItems = toursSeed.slice(start, start + perPage);

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {pageItems.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          aria-label="Previous page"
          href={currentPage > 1 ? `?page=${currentPage - 1}` : undefined}
          className={`flex h-12 w-12 items-center justify-center rounded-full border text-base transition-colors duration-200 ${
            currentPage > 1
              ? "bg-white border-black/20 text-gray-900 hover:bg-amber-500 hover:text-white hover:border-transparent"
              : "bg-white border-black/10 text-gray-400 pointer-events-none"
          }`}
        >
          <i className="fa-solid fa-angle-left" aria-hidden="true"></i>
        </a>

        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNum = idx + 1;
          const isActive = pageNum === currentPage;
          const label = pageNum.toString().padStart(2, "0");
          return (
            <a
              key={pageNum}
              href={`?page=${pageNum}`}
              className={
                "flex h-12 w-12 items-center justify-center rounded-full border text-base font-semibold transition-colors duration-200 " +
                (isActive
                  ? "bg-amber-500 border-transparent text-white"
                  : "bg-white border-black/20 text-gray-900 hover:bg-amber-500 hover:text-white hover:border-transparent")
              }
            >
              {label}
            </a>
          );
        })}

        <a
          aria-label="Next page"
          href={currentPage < totalPages ? `?page=${currentPage + 1}` : undefined}
          className={`flex h-12 w-12 items-center justify-center rounded-full border text-base transition-colors duration-200 ${
            currentPage < totalPages
              ? "bg-white border-black/20 text-gray-900 hover:bg-amber-500 hover:text-white hover:border-transparent"
              : "bg-white border-black/10 text-gray-400 pointer-events-none"
          }`}
        >
          <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}


