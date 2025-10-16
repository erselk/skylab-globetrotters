'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import SubTitle from './SubTitle';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Future of Capsule Hotel Technology and AI Integration',
    category: 'Technology',
    date: 'November 15, 2024',
    image: '/images/blog/capsule-hotel-technology.jpg',
    link: '/blog-details'
  },
  {
    id: 2,
    title: 'Minimalist Travel Experience Guide and Sustainable Tourism',
    category: 'Travel',
    date: 'November 12, 2024',
    image: '/images/blog/minimalist-travel.jpg',
    link: '/blog-details'
  },
  {
    id: 3,
    title: 'Modern Accommodation Trends 2024 and Digital Transformation',
    category: 'Trends',
    date: 'November 10, 2024',
    image: '/images/blog/modern-accommodation.jpg',
    link: '/blog-details'
  }
];

export default function BlogSection() {
  return (
    <section className="px-6 py-12 lg:py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SubTitle text="News and Blogs" />
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            News and Blogs
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
            >
              <div className="single-blog-post mb-10">
                <div className="post-thumbnail mb-6">
                  <div className="relative h-80 overflow-visible rounded-2xl">
                    <div className="relative h-80 overflow-hidden rounded-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="absolute bottom-0 left-6 transform translate-y-1/2 -rotate-4 z-10">
                      <Link
                        href={`/search?category=${post.category}`}
                        className="cat-btn inline-block px-8 py-1 bg-amber-500 text-white text-lg font-semibold hover:text-black transition-colors duration-300"
                      >
                        {post.category}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="entry-content">
                  <div className="post-meta mb-4">
                    <span className="flex items-center gap-2 text-black text-base">
                      <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                      <Link href={`/search?date=${post.date}`} className="hover:text-amber-500 transition-colors duration-300">
                        {post.date}
                      </Link>
                    </span>
                  </div>

                  <div className="mb-6">
                    <Link href={post.link}>
                      <h3 className="title text-xl lg:text-2xl font-bold text-black mb-4 hover:text-amber-500 transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>
                  </div>

                  <div>
                    <Link
                      href={post.link}
                      className="main-btn filled-btn inline-flex items-center gap-6 bg-white text-black pl-8 pr-1 py-1 rounded-full font-semibold border-2 border-black/20 hover:bg-amber-500 hover:text-white hover:border-transparent transition-all duration-300 group"
                    >
                      <span className="text-sm tracking-wide">Read More</span>
                      <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
