'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faBed, 
  faStar, 
  faTrophy 
} from '@fortawesome/free-solid-svg-icons';

interface Stat {
  id: number;
  targetNumber: number;
  suffix: string;
  title: string;
  icon: any;
}

const stats: Stat[] = [
  {
    id: 1,
    targetNumber: 8453,
    suffix: '+',
    title: 'Happy Travelers',
    icon: faUsers
  },
  {
    id: 2,
    targetNumber: 3568,
    suffix: '+',
    title: 'Capsule Hotels',
    icon: faBed
  },
  {
    id: 3,
    targetNumber: 99.3,
    suffix: '%',
    title: 'Positive Reviews',
    icon: faStar
  },
  {
    id: 4,
    targetNumber: 63,
    suffix: 'K',
    title: 'Awards Won',
    icon: faTrophy
  }
];

export default function StatsSection() {
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        animateNumber(stat.targetNumber, index);
      });
    }
  }, [isVisible]);

  const animateNumber = (target: number, index: number) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setAnimatedNumbers(prev => {
        const newNumbers = [...prev];
        newNumbers[index] = Math.floor(current);
        return newNumbers;
      });
    }, duration / steps);
  };

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'K') {
      return `${num}${suffix}`;
    }
    return `${num.toLocaleString()}${suffix}`;
  };

  return (
    <section id="stats-section" className="px-6 py-12 lg:py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg p-8 lg:p-10 text-center border border-transparent hover:border-black transition-all duration-700 shadow-sm hover:shadow-lg">
                <div className="relative mb-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 group-hover:text-white transition-all duration-700">
                    <FontAwesomeIcon 
                      icon={stat.icon} 
                      className="w-8 h-8 lg:w-10 lg:h-10 text-amber-500 group-hover:text-white transition-colors duration-700" 
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-black">
                    {isVisible && animatedNumbers[index] !== undefined 
                      ? formatNumber(animatedNumbers[index], stat.suffix)
                      : '0' + stat.suffix
                    }
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 text-lg font-medium">
                    {stat.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
