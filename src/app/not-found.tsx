"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {

  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header?.classList.add('hidden');
    footer?.classList.add('hidden');
    return () => {
      header?.classList.remove('hidden');
      footer?.classList.remove('hidden');
    };
  }, []);
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center px-6 pt-12 pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">

        <div className="relative w-full">
          <span className="block select-none text-[20vw] leading-none font-extrabold tracking-tight text-amber-500 sm:text-[18vw] md:text-[16vw]">
            404
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          The page you are looking for may have been moved, deleted, or never existed. You can visit one of the pages below.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group border border-black/10"
            style={{ width: '180px' }}
          >
            <span className="flex-1 text-sm tracking-wide text-center">Home</span>
            <span className="ml-auto flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group border border-black/10 mx-auto"
            style={{ width: '180px' }}
          >
            <span className="flex-1 text-sm tracking-wide text-center">About</span>
            <span className="ml-auto flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
            </span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group border border-black/10 mx-auto"
            style={{ width: '180px' }}
          >
            <span className="flex-1 text-sm tracking-wide text-center">Gallery</span>
            <span className="ml-auto flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
            </span>
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 group border border-black/10 mx-auto"
            style={{ width: '180px' }}
          >
            <span className="flex-1 text-sm tracking-wide text-center">Tours</span>
            <span className="ml-auto flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-amber-500 transition-all duration-300">
              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}


