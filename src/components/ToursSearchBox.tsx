"use client";

import React, { useRef } from "react";

export default function ToursSearchBox() {
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkOutRef = useRef<HTMLInputElement | null>(null);

  const openDatePicker = (input: HTMLInputElement | null) => {
    if (!input) return;
    try {
      if (typeof input.showPicker === "function") {
        input.showPicker();
      } else {
        input.focus();
        input.click();
      }
    } catch {
      input.focus();
    }
  };
  return (
    <div className="relative z-10 mx-auto -mt-16 w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
      <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <form className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-5 md:p-8">
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700">Check In</span>
            <div className="relative mt-1">
              <input
                type="date"
                placeholder="Check In"
                ref={checkInRef}
                className="w-full rounded-2xl border border-black/10 bg-white pl-3 pr-10 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <button
                type="button"
                aria-label="Open check-in calendar"
                onClick={() => openDatePicker(checkInRef.current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600"
              >
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700">Check Out</span>
            <div className="relative mt-1">
              <input
                type="date"
                placeholder="Check Out"
                ref={checkOutRef}
                className="w-full rounded-2xl border border-black/10 bg-white pl-3 pr-10 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <button
                type="button"
                aria-label="Open check-out calendar"
                onClick={() => openDatePicker(checkOutRef.current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600"
              >
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700">Guest</span>
            <div className="relative mt-1">
              <input
                type="number"
                min={1}
                step={1}
                placeholder="1"
                className="w-full rounded-2xl border border-black/10 bg-white pr-10 pl-3 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <i className="fa-regular fa-user text-amber-600 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700">Accommodations</span>
            <div className="relative mt-1">
              <select className="w-full appearance-none rounded-2xl border border-black/10 bg-white pr-10 pl-3 py-3 text-base text-gray-900 outline-none">
                <option>Accommodations</option>
                <option>Single Capsule</option>
                <option>Double Capsule</option>
                <option>Premium Capsule</option>
                <option>Family Capsule</option>
                <option>City View Capsule</option>
                <option>Ocean View Capsule</option>
              </select>
              <i className="fa-solid fa-angle-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-amber-600"></i>
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-3.5 text-base font-semibold text-gray-900 transition-colors duration-300 hover:bg-amber-500 hover:text-white"
            >
              Check Availability <i className="fa-solid fa-angles-right ml-2" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


