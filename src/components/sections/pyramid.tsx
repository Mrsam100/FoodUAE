"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

const FOOD_ITEMS = [
  { id: 'milk', src: FOOD_ASSETS.milk, alt: 'Milk', group: 'protein', x: '75%', y: '50px', scale: 0.8, delay: 0.1 },
  { id: 'olive-oil', src: FOOD_ASSETS.oliveOil, alt: 'Olive Oil', group: 'protein', x: '85%', y: '120px', scale: 0.7, delay: 0.2 },
  { id: 'salmon', src: FOOD_ASSETS.salmon, alt: 'Salmon', group: 'protein', x: '55%', y: '180px', scale: 1, delay: 0.15 },
  { id: 'chicken', src: FOOD_ASSETS.chicken, alt: 'Chicken', group: 'protein', x: '70%', y: '-50px', scale: 0.9, delay: 0.3 },
  { id: 'avocado', src: FOOD_ASSETS.avocado, alt: 'Avocado', group: 'protein', x: '92%', y: '60px', scale: 0.6, delay: 0.25 },
  { id: 'cheese', src: FOOD_ASSETS.cheese, alt: 'Cheese', group: 'protein', x: '65%', y: '70px', scale: 0.8, delay: 0.05 },
  { id: 'steak', src: FOOD_ASSETS.steak, alt: 'Steak', group: 'protein', x: '45%', y: '100px', scale: 1.1, delay: 0.12 },
  { id: 'broccoli', src: FOOD_ASSETS.broccoli, alt: 'Broccoli', group: 'fv', x: '70%', y: '180px', scale: 1, delay: 0.1 },
  { id: 'bananas', src: FOOD_ASSETS.bananas, alt: 'Bananas', group: 'fv', x: '35%', y: '80px', scale: 0.85, delay: 0.2 },
  { id: 'carrots', src: FOOD_ASSETS.carrots, alt: 'Carrots', group: 'fv', x: '82%', y: '150px', scale: 0.8, delay: 0.15 },
];

export default function PyramidSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = (item: typeof FOOD_ITEMS[0]) => {
    const startY = 150 * (item.delay + 1);
    const easedProgress = Math.pow(scrollProgress, 0.8);
    const translateY = startY * (1 - easedProgress);
    const opacity = Math.min(scrollProgress * 4, 1);
    const rotation = (1 - easedProgress) * 15 * (item.id.length % 2 === 0 ? 1 : -1);

    return {
      transform: `translate(${item.x}, calc(${item.y} + ${translateY}px)) scale(${item.scale}) rotate(${rotation}deg)`,
      opacity,
      transition: 'opacity 0.6s ease-out, transform 0.1s linear',
    };
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#F5F4E4' }} ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-40">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 lg:mb-40">
          <h2 className="text-[clamp(36px,10vw,120px)] font-[800] leading-[0.9] tracking-[-0.05em] text-[#0A0505] mb-10 md:mb-20">
            Eat Real Food
          </h2>
        </div>

        <div className="relative min-h-[800px] md:min-h-[1200px] lg:min-h-[1600px] w-full">
          {/* Section 1: Proteins */}
          <div className="relative z-10 max-w-[500px] mb-[150px] md:mb-[300px] lg:mb-[400px]">
            <h3 className="text-[32px] font-[700] text-[#0A0505] mb-4">Protein, Dairy, & Healthy Fats</h3>
            <p className="text-[18px] leading-[1.6] text-[#0A0505] opacity-80 mb-6">
              We are ending the war on protein. Every meal must prioritize high-quality, nutrient-dense protein from both animal and plant sources, paired with healthy fats from whole foods such as eggs, seafood, meats, full-fat dairy, nuts, seeds, olives, and avocados.
            </p>
            <p className="text-[16px] font-[600] text-[#0A0505]">
              Protein target: 1.2–1.6 grams of protein per kilogram of body weight per day
            </p>
          </div>

          {/* Section 2: Veggies & Fruits */}
          <div className="relative z-10 max-w-[500px] mb-[150px] md:mb-[300px] lg:mb-[400px]">
            <h3 className="text-[32px] font-[700] text-[#0A0505] mb-4">Vegetables & Fruits</h3>
            <p className="text-[18px] leading-[1.6] text-[#0A0505] opacity-80 mb-6">
              Vegetables and fruits are essential to real food nutrition. Eat a wide variety of whole, colorful, nutrient-dense vegetables and fruits in their original form, prioritizing freshness and minimal processing.
            </p>
            <div className="space-y-1">
              <p className="text-[16px] font-[600] text-[#0A0505]">Vegetables: 3 servings per day.</p>
              <p className="text-[16px] font-[600] text-[#0A0505]">Fruits: 2 servings per day.</p>
            </div>
          </div>

          {/* Section 3: Whole Grains */}
          <div className="relative z-10 max-w-[500px] pb-40">
            <h3 className="text-[32px] font-[700] text-[#0A0505] mb-4">Whole Grains</h3>
            <p className="text-[18px] leading-[1.6] text-[#0A0505] opacity-80 mb-6">
              Whole grains are encouraged. Refined carbohydrates are not. Prioritize fiber-rich whole grains and significantly reduce the consumption of highly processed, refined carbohydrates that displace real nourishment.
            </p>
            <p className="text-[16px] font-[600] text-[#0A0505]">Target: 2–4 servings per day.</p>
          </div>

          {/* Floating Food Elements Overlay - Absolute positioned relative to container */}
          <div className="absolute inset-0 pointer-events-none">
            {FOOD_ITEMS.map((item) => (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-[200px] md:w-[300px] lg:w-[400px]"
                style={getTransform(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Narrative */}
        <div className="mt-16 md:mt-24 lg:mt-40 max-w-[800px] mx-auto text-center">
          <p className="text-[24px] leading-[1.4] text-[#0A0505] font-[400]">
            Better health begins on your plate—not in your medicine cabinet. Real, whole, nutrient-dense foods belong at the center of health across the UAE and MENA region.
          </p>
        </div>
      </div>

      {/* Pyramid Background Graphic (Subtle SVG Overlay) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-full opacity-5 pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#0A0505] stroke-[0.1]">
            <path d="M50 5 L95 95 L5 95 Z" />
            <line x1="15" y1="65" x2="85" y2="65" />
            <line x1="30" y1="35" x2="70" y2="35" />
         </svg>
      </div>
    </div>
  );
}