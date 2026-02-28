"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FOOD_ASSETS } from '@/lib/food-assets';

const InteractivePyramid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pyramidRef = useRef<HTMLDivElement>(null);

  // Asset mapping based on provided list
  const assetsMap = {
    milk: FOOD_ASSETS.milk,
    oliveOil: FOOD_ASSETS.oliveOil,
    salmon: FOOD_ASSETS.salmon,
    chicken: FOOD_ASSETS.chicken,
    avocado: FOOD_ASSETS.avocado,
    steak: FOOD_ASSETS.steak,
    eggs: FOOD_ASSETS.eggs,
    broccoli: FOOD_ASSETS.broccoli,
    lettuce: FOOD_ASSETS.lettuce,
    tomatoes: FOOD_ASSETS.tomatoes,
    bananas: FOOD_ASSETS.bananas,
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Background reveal animation
      gsap.fromTo(".dga_card_bg", 
        { scaleY: 0, transformOrigin: "bottom" },
        { 
          scaleY: 1, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: 1
          }
        }
      );

      // Parallax and 3D rotation for food items
      const foodItems = gsap.utils.toArray<HTMLElement>(".dga_food_item");
      foodItems.forEach((item, i) => {
        const speed = 0.1 + (i % 5) * 0.05;
        const rotateSpeed = 45 + (i % 3) * 30;
        
        gsap.set(item, { transformPerspective: 1000 });
        
        gsap.to(item, {
          y: (i % 2 === 0 ? -150 : 150) * speed * 15,
          rotationZ: (i % 2 === 0 ? 20 : -20),
          rotationY: (i % 3 === 0 ? 30 : -30),
          rotationX: (i % 2 === 0 ? 15 : -15),
          z: (i % 2 === 0 ? 50 : -50),
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      // Layer reveal animation
      const layers = [".protein-layer", ".veg-layer", ".grain-layer"];
      layers.forEach((selector, i) => {
        gsap.fromTo(selector, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: selector,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0A0504] overflow-hidden min-h-[200vh] md:min-h-[300vh]">
      {/* Scroll-triggered background transition */}
      <div className="dga_card_bg absolute inset-0 bg-[#F7F5E6] z-0" />

      {/* Main Narrative Content */}
      <div className="relative z-10 pt-16 md:pt-24 lg:pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 lg:mb-40">
          <h2 className="text-[clamp(36px,8vw,72px)] font-bold leading-[0.9] tracking-tighter text-[#0A0504] mb-8">
            Eat Real Food
          </h2>
          <div className="w-20 h-px bg-black/20 mx-auto" />
        </div>

        {/* Section 1: Protein */}
        <div className="protein-layer grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-20 md:mb-40 lg:mb-60">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold text-[#0A0504] mb-6">
              Protein, Dairy, & Healthy Fats
            </h3>
            <p className="body-text text-[#0A0504]/80 mb-8">
              We are ending the war on protein. Every meal must prioritize high-quality, 
              nutrient-dense protein from both animal and plant sources, paired with 
              healthy fats from whole foods.
            </p>
            <div className="font-mono text-sm uppercase tracking-wider text-[#C50000]">
              Target: 1.2–1.6g per kg / day
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] hidden md:flex items-center justify-center">
            <div className="dga_food_item absolute top-10 right-10 z-20 w-48 h-48">
              <Image src={assetsMap.steak} alt="Steak" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute bottom-10 left-0 z-20 w-56 h-32">
              <Image src={assetsMap.salmon} alt="Salmon" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute top-40 left-20 z-10 w-32 h-64">
              <Image src={assetsMap.milk} alt="Whole Milk" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute bottom-20 right-0 z-10 w-40 h-40">
              <Image src={assetsMap.eggs} alt="Eggs" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Section 2: Veggies & Fruits */}
        <div className="veg-layer grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-20 md:mb-40 lg:mb-60">
          <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] lg:h-[500px] hidden md:flex items-center justify-center">
            <div className="dga_food_item absolute top-0 left-10 z-20 w-48 h-48">
              <Image src={assetsMap.broccoli} alt="Broccoli" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute bottom-0 right-10 z-20 w-64 h-56">
              <Image src={assetsMap.bananas} alt="Bananas" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute top-40 right-20 z-10 w-40 h-40">
              <Image src={assetsMap.tomatoes} alt="Tomatoes" fill className="object-contain" />
            </div>
            <div className="dga_food_item absolute bottom-40 left-0 z-10 w-48 h-48">
              <Image src={assetsMap.lettuce} alt="Lettuce" fill className="object-contain" />
            </div>
          </div>
          <div className="order-1 lg:order-2 max-w-md lg:ml-auto text-right">
            <h3 className="text-3xl font-semibold text-[#0A0504] mb-6">
              Vegetables & Fruits
            </h3>
            <p className="body-text text-[#0A0504]/80 mb-8">
              Vegetables and fruits are essential to real food nutrition. Eat a wide 
              variety of whole, colorful, nutrient-dense vegetables and fruits in 
              their original form.
            </p>
            <div className="font-mono text-sm uppercase tracking-wider text-[#3A4D24]">
              Veg: 3 servings / day | Fruit: 2 servings / day
            </div>
          </div>
        </div>

        {/* Section 3: Whole Grains */}
        <div className="grain-layer text-center max-w-2xl mx-auto mb-16 md:mb-24 lg:mb-40">
          <h3 className="text-3xl font-semibold text-[#0A0504] mb-6">
            Whole Grains
          </h3>
          <p className="body-text text-[#0A0504]/80 mb-8">
            Whole grains are encouraged. Refined carbohydrates are not. Prioritize 
            fiber-rich whole grains and significantly reduce processing.
          </p>
          <div className="font-mono text-sm uppercase tracking-wider text-[#C50000] mb-12">
            Target: 2–4 servings per day
          </div>
          
          <div className="relative h-64 w-full">
            {/* Visualizing grains with floating motion */}
             <div className="dga_food_item absolute left-1/4 top-0 w-24 h-24 bg-[#E6FF9E]/20 rounded-full blur-2xl" />
             <div className="dga_food_item absolute right-1/4 bottom-0 w-32 h-32 bg-[#C50000]/10 rounded-full blur-3xl" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[clamp(48px,15vw,120px)] font-black opacity-10 text-[#0A0504] select-none">GRAINS</span>
             </div>
          </div>
        </div>
      </div>

      {/* Interactive Pyramid Overlay (Fixed/Sticky behavior) */}
      <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference hidden xl:flex items-center justify-center opacity-40">
        <svg 
          viewBox="0 0 100 100" 
          className="w-[80vw] h-[80vh] stroke-white stroke-[0.1] fill-none"
        >
          <path d="M50 10 L90 90 L10 90 Z" />
          <line x1="20" y1="70" x2="80" y2="70" />
          <line x1="35" y1="40" x2="65" y2="40" />
        </svg>
      </div>

      {/* Bottom CTA Area */}
      <section className="relative z-10 bg-[#F7F5E6] py-16 md:py-24 lg:py-40 border-t border-black/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h4 className="text-[32px] font-semibold text-[#0A0504] mb-8 leading-tight">
            Better health begins on your plate—not in your medicine cabinet.
          </h4>
          <p className="text-xl text-[#0A0504]/60 mb-12">
            Real, whole, nutrient-dense foods belong at the center of health across the UAE and MENA region.
          </p>
          <button className="pulse-button">
            Begin Your Real Food Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default InteractivePyramid;