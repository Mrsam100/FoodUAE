"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * LineInTheSand component
 * Clones the high-contrast text section with an image of the 1992 Food Pyramid 
 * that appears on scroll, with a focus on global nutrition guidance impact.
 */
export default function LineInTheSand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPyramidVisible, setIsPyramidVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is scrolled through
      // Start appearing when top is at 50% of viewport, finished by the time bottom reaches top
      const start = viewportHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end + viewportHeight)));
      setScrollProgress(progress);

      // Visibility toggle for the floating pyramid image
      if (rect.top < viewportHeight * 0.8 && rect.bottom > 0) {
        setIsPyramidVisible(true);
      } else {
        setIsPyramidVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text content for the scrubber effect
  const mainText = "For the first time, official guidance calls on everyone to avoid highly processed food. This is not an attack on industry or a legal definition. It reflects a public health reality families live with every day.";
  const words = mainText.split(" ");

  // Sidebar text content
  const sidebarText = "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.";
  const sidebarWords = sidebarText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#0A0505] text-white min-h-[200vh] py-20 overflow-hidden"
      id="solution"
    >
      {/* Background/Sticky Container Structure */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative h-full">
          
          {/* Main Scrubber Text (Center-Left Focus) */}
          <div className="lg:col-span-8 z-10 pointer-events-auto">
            <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-tighter mb-12">
              {words.map((word, i) => {
                // Calculation for per-word highlighting
                // We want the text to fill up as we scroll
                const wordThreshold = i / words.length;
                const nextThreshold = (i + 1) / words.length;
                const opacity = scrollProgress > nextThreshold 
                  ? 1 
                  : scrollProgress < wordThreshold 
                    ? 0.2 
                    : 0.2 + (scrollProgress - wordThreshold) / (nextThreshold - wordThreshold) * 0.8;

                return (
                  <span 
                    key={i} 
                    className="inline-block mr-[0.25em] transition-opacity duration-75"
                    style={{ opacity }}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>

          {/* Sidebar / Image Container (Right) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center h-full pointer-events-auto">
            {/* 1992 Food Pyramid Image Card */}
            <div 
              className={`mb-12 transition-all duration-1000 transform ${
                isPyramidVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="bg-[#1A1A1A] p-4 rounded-[24px] border border-white/10 shadow-2xl max-w-[320px]">
                <div className="relative aspect-[440/340] w-full overflow-hidden rounded-[12px] bg-black">
                  <Image
                    src={FOOD_ASSETS.foodPyramid}
                    alt="1992 Food Pyramid"
                    fill
                    className="object-cover opacity-90 grayscale-[0.2]"
                  />
                </div>
                <p className="mt-4 text-[#918F84] text-[14px] font-mono tracking-wider uppercase text-center">
                  1992 Food Pyramid
                </p>
              </div>
            </div>

            {/* Sidebar Muted Narrative */}
            <div className="max-w-[280px] text-right">
              <p className="text-[20px] font-medium leading-[1.4] text-[#918F84]">
                {sidebarWords.map((word, i) => {
                  const threshold = 0.2 + (i / sidebarWords.length) * 0.6;
                  const isActive = scrollProgress > threshold;
                  return (
                    <span 
                      key={i} 
                      className={`inline-block mr-1 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#918F84]"
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlays for Transition */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#0A0505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#0A0505] to-transparent pointer-events-none" />

      {/* Internal Trigger Section for Scroll Space */}
      <div className="h-[150vh]" />
      
      {/* Disintegrating / Solution Reveal Heading (at the very bottom of the scroll) */}
      <div className="container mx-auto px-6 pb-40">
        <div 
          className="max-w-4xl transition-all duration-1000"
          style={{ opacity: Math.max(0, (scrollProgress - 0.85) * 6.6) }}
        >
          <h3 className="text-[64px] md:text-[96px] font-extrabold leading-[0.9] tracking-tighter text-[#E7FFAC]">
            Real Food <br />
            can solve <br />
            this crisis.
          </h3>
        </div>
      </div>
    </section>
  );
}