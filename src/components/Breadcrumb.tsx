"use client";

import Image from "next/image";
import React from "react";

type BreadcrumbProps = {
  title: string;
  backgroundImageSrc: string;
};

export default function Breadcrumb({ title, backgroundImageSrc }: BreadcrumbProps) {
  return (
    <section className="relative w-full">
      <div className="relative h-[360px] sm:h-[420px] md:h-[520px] w-full overflow-hidden">
        <Image
          src={backgroundImageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}


