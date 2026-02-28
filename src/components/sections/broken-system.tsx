"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * BrokenSystemSection Component
 * Clones the scroll-animated transition section with sticky image and fading text functionality.
 * Theme: Dark (#0a0504)
 */
export default function BrokenSystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Text content for the scroll animation
  const scrollyText = "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.";
  const words = scrollyText.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section the user has scrolled
      // High-density vertical height (300vh) implies a long scroll range
      const totalHeight = rect.height;
      const progress = Math.min(Math.max(-rect.top / (totalHeight - windowHeight), 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="solution" 
      className="relative w-full"
      style={{ height: '300vh', backgroundColor: '#0a0504' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 lg:px-16">
        
        {/* The 1992 Food Pyramid Image - Sticky/Fixed relative to screen during scroll */}
        <div className="absolute top-[15%] right-6 lg:right-16 z-20 flex flex-col items-center md:items-end">
          <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 glass-card">
              <button className="block p-4 focus:outline-none">
                <Image 
                  src={FOOD_ASSETS.foodPyramid}
                  alt="1992 Food Pyramid"
                  width={440}
                  height={340}
                  className="w-[200px] md:w-[320px] lg:w-[440px] h-auto object-contain"
                  priority
                />
              </button>
            </div>
            <span className="mt-4 text-[14px] font-medium text-[#888888] tracking-widest uppercase">
              1992 Food Pyramid
            </span>
          </div>
        </div>

        {/* Scroll-Animated Scrollytaking Text */}
        <div className="max-w-7xl w-full">
          <p 
            ref={textRef}
            className="text-[32px] md:text-[64px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.04em] text-white"
          >
            {words.map((word, index) => {
              // Calculate threshold for each word
              // Words light up one by one based on progress
              const threshold = index / words.length;
              const isActive = scrollProgress > threshold;
              
              return (
                <span key={index} className="inline-block mr-[0.2em] mb-[0.1em]">
                  <span 
                    className="transition-opacity duration-300 ease-out"
                    style={{ 
                      opacity: isActive ? 1 : 0.2
                    }}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </p>
        </div>

        {/* Subtle background glow for depth */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-red/5 blur-[120px]" />
        </div>
      </div>

      {/* Transitional Section End Marker */}
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-[#0a0504] to-transparent pointer-events-none" />
      
      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}