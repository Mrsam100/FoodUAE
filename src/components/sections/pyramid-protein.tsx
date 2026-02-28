import React from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * PyramidProtein Component
 * Clones the "Protein, Dairy, & Healthy Fats" section of the interactive pyramid.
 * Focuses on pixel-perfect accuracy for the illustrated assets and nutrient targets.
 */
export default function PyramidProtein() {
  const proteinAssets = [
    {
      src: FOOD_ASSETS.milk,
      alt: "Milk",
      width: 120,
      height: 250,
      className: "absolute top-[10%] right-[5%] z-20 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.steak,
      alt: "Steak",
      width: 300,
      height: 140,
      className: "absolute top-[15%] left-[10%] z-10 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.salmon,
      alt: "Salmon",
      width: 280,
      height: 160,
      className: "absolute bottom-[10%] left-[25%] z-30 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.eggs,
      alt: "Eggs",
      width: 160,
      height: 80,
      className: "absolute bottom-[20%] left-[0%] z-40 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.oliveOil,
      alt: "Olive Oil",
      width: 80,
      height: 200,
      className: "absolute bottom-[5%] right-[20%] z-10 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.groundBeef,
      alt: "Ground Beef",
      width: 180,
      height: 140,
      className: "absolute top-[40%] right-[15%] z-0 hover:scale-105 transition-transform duration-300",
    },
    {
      src: FOOD_ASSETS.yogurt,
      alt: "Yogurt",
      width: 110,
      height: 180,
      className: "absolute bottom-[0%] right-[35%] z-30 hover:scale-105 transition-transform duration-300",
    },
  ];

  return (
    <section 
      className="bg-[#f9f7e8] text-[#0a0504] py-16 px-6 lg:px-16 overflow-hidden" 
      id="protein-section"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content: Text and Nutrient Targets */}
        <div className="z-10 order-2 lg:order-1">
          <h3 className="font-display text-[32px] font-semibold leading-[1.2] mb-6 tracking-[-0.02em]">
            Protein, Dairy, & Healthy Fats
          </h3>
          
          <div className="space-y-6 max-w-[480px]">
            <p className="text-[18px] leading-[1.5] font-normal text-[#0a0504]">
              We are ending the war on protein. Every meal must prioritize high-quality, 
              nutrient-dense protein from both animal and plant sources, paired with 
              healthy fats from whole foods such as eggs, seafood, meats, full-fat 
              dairy, nuts, seeds, olives, and avocados.
            </p>
            
            <div className="pt-4 border-t border-[#0a0504]/10">
              <p className="text-[18px] leading-[1.5] font-bold text-[#0a0504]">
                Protein target: <span className="font-normal text-[#444]">1.2–1.6 grams of protein per kilogram of body weight per day</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Cluster of Illustrated Assets */}
        <div className="relative h-[500px] w-full order-1 lg:order-2">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Decorations for Depth (Subtle Shadows) */}
            <div className="absolute inset-0 bg-radial from-[#e8ff99]/10 to-transparent blur-[60px] opacity-50 -z-10" />
            
            {/* Clustered Food Images */}
            {proteinAssets.map((asset, index) => (
              <div 
                key={asset.alt} 
                className={asset.className}
              >
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  className="object-contain"
                  priority={index < 3}
                />
              </div>
            ))}

            {/* Specifically Highlighted Assets from Scraped Content */}
            <div className="absolute top-[5%] left-[20%] w-[130px] opacity-90 -rotate-6 hover:rotate-0 transition-all duration-500">
               <Image 
                src={FOOD_ASSETS.chicken}
                alt="Chicken" 
                width={200} 
                height={160} 
                className="drop-shadow-xl"
               />
            </div>

            <div className="absolute bottom-[2%] right-[0%] w-[140px] opacity-95 rotate-3 hover:rotate-0 transition-all duration-500 z-50">
               <Image 
                src={FOOD_ASSETS.cheese}
                alt="Cheese" 
                width={150} 
                height={120} 
                className="drop-shadow-lg"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}