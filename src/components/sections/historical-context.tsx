"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * HistoricalContext Component
 * Clones the scrolling narrative section comparing the 1992 Food Pyramid
 * with sticky image positioning and scroll-reveal text effects.
 */
export default function HistoricalContext() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we have scrolled (0 to 1)
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content lines for the scrollytelling narrative
  const narrativeLines = [
    "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.",
    "For the first time, regional health guidance calls on citizens to avoid highly processed food.",
    "This is not an attack on industry or a legal definition. It reflects a public health reality families live with every day."
  ];

  return (
    <section 
      ref={sectionRef}
      id="problem-narrative" 
      className="relative w-full bg-[#0A0504] text-white overflow-hidden"
      style={{ minHeight: '300vh' }}
    >
      {/* Sticky Content Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Large Reveal Text */}
          <div className="relative z-10">
            <div className="max-w-2xl">
              {narrativeLines.map((line, idx) => {
                // Logic to calculate opacity based on overall scroll progress
                // Line 0: 0 to 0.3
                // Line 1: 0.3 to 0.6
                // Line 2: 0.6 to 1.0
                const start = idx * 0.33;
                const end = (idx + 1) * 0.33;
                const lineOpacity = Math.max(0.1, Math.min(1, (scrollProgress - start) / (end - start) * 2));
                
                return (
                  <p 
                    key={idx}
                    className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-12 transition-opacity duration-300"
                    style={{ 
                      opacity: idx === Math.floor(scrollProgress * 3) || (idx === 2 && scrollProgress > 0.9) ? 1 : 0.2,
                      display: (scrollProgress >= start && scrollProgress <= end + 0.1) || (idx === 0 && scrollProgress < 0.1) || (idx === 2 && scrollProgress > 0.9) ? 'block' : 'none'
                    }}
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Side: Sticky Image Comparison */}
          <div className="relative flex justify-center items-center">
            {/* 3D Floating Food Elements */}
            <div 
              className="absolute -top-20 -left-20 w-32 h-32 z-20 transition-transform duration-500 pointer-events-none"
              style={{ transform: `translateY(${scrollProgress * -100}px) rotate(${scrollProgress * 45}deg) rotateX(${scrollProgress * 30}deg)` }}
            >
              <Image src={FOOD_ASSETS.tomatoes} alt="Tomato" width={128} height={128} className="object-contain" />
            </div>
            <div 
              className="absolute -bottom-20 -right-20 w-40 h-40 z-20 transition-transform duration-700 pointer-events-none"
              style={{ transform: `translateY(${scrollProgress * 150}px) rotate(${scrollProgress * -60}deg) rotateY(${scrollProgress * 45}deg)` }}
            >
              <Image src={FOOD_ASSETS.broccoli} alt="Broccoli" width={160} height={160} className="object-contain" />
            </div>

            {/* 1992 Pyramid Card */}
            <div 
              className="relative transition-all duration-700 ease-out"
              style={{
                transform: `translateY(${(0.5 - scrollProgress) * 50}px) scale(${1 - (scrollProgress * 0.1)})`,
                opacity: 1 - (scrollProgress * 0.3)
              }}
            >
              <div className="bg-[#1A1615] p-2 rounded-[32px] border border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-[24px]">
                  <Image 
                    src={FOOD_ASSETS.foodPyramid}
                    alt="1992 Food Pyramid"
                    width={500}
                    height={375}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase mb-1">Historical Context</span>
                    <h4 className="text-xl font-bold">1992 Food Pyramid</h4>
                  </div>
                </div>
              </div>
              
              {/* Tooltip detail that appears mid-scroll */}
              <div 
                className="absolute -right-8 top-1/2 -translate-y-1/2 bg-[#C50000] text-white p-4 rounded-2xl shadow-xl max-w-[200px] transition-all duration-500"
                style={{ 
                  opacity: scrollProgress > 0.2 && scrollProgress < 0.6 ? 1 : 0,
                  transform: `translateX(${scrollProgress > 0.2 && scrollProgress < 0.6 ? 0 : 20}px)`
                }}
              >
                <p className="text-sm font-bold leading-tight">Prioritized 6-11 servings of refined grains daily.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Background Glows */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-colors duration-1000"
          style={{ 
            backgroundColor: scrollProgress > 0.5 ? '#3A4D24' : '#C50000',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Transition to next section spacer */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className="container px-8 flex flex-col items-center">
          <h2 
            className="text-[48px] md:text-[80px] lg:text-[100px] font-extrabold text-center leading-none tracking-tighter"
            style={{ 
              opacity: Math.max(0, (scrollProgress - 0.85) * 6.6),
              transform: `translateY(${(1 - scrollProgress) * 100}px)`
            }}
          >
            Real Food <br />
            <span className="text-[#E6FF9E]">can solve this crisis.</span>
          </h2>
        </div>
      </div>

      <style jsx global>{`
        .dga_line_dimmed__BUp_B {
          opacity: 0.2;
          transition: opacity 0.4s ease;
        }
        .dga_line_active__BUp_B {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}