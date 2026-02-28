"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { FOOD_ASSETS } from '@/lib/food-assets';

export default function CulturalHeritage() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const TRADITIONAL_FOODS = [
    {
      name: t("traditional.dates"),
      description: t("heritage.dates_desc"),
      image: FOOD_ASSETS.dates,
      color: "rgba(139,69,19,0.2)"
    },
    {
      name: t("traditional.camel_milk"),
      description: t("heritage.camel_milk_desc"),
      image: FOOD_ASSETS.camelMilk,
      color: "rgba(255,255,255,0.1)"
    },
    {
      name: t("traditional.sidr_honey"),
      description: t("heritage.sidr_desc"),
      image: FOOD_ASSETS.honey,
      color: "rgba(255,191,0,0.2)"
    },
    {
      name: t("traditional.local_fish"),
      description: t("heritage.desc"),
      image: FOOD_ASSETS.fish,
      color: "rgba(224,245,161,0.1)"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0A0202] py-16 md:py-24 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block px-4 py-1 rounded-full border border-[#E0F5A1]/30 bg-[#E0F5A1]/5 text-[#E0F5A1] text-xs font-bold uppercase tracking-widest"
          >
            {t("heritage.dubai")}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(40px,5vw,72px)] font-bold text-white mb-6 leading-tight"
          >
            {t("heritage.title")} <span className="text-[#E0F5A1] italic">Dubai Heritage</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="max-w-[800px] text-[#8E8E8E] text-[18px] md:text-[20px] leading-relaxed"
          >
            {t("heritage.desc")}
          </motion.p>
        </div>

        {/* Overlapping Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
          {TRADITIONAL_FOODS.map((food, idx) => (
            <motion.div 
              key={food.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative flex flex-col p-4 md:p-8 lg:p-12 rounded-[40px] bg-[#111] border border-white/5 group hover:border-[#E0F5A1]/20 transition-all overflow-hidden ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, ${food.color} 0%, transparent 70%)` }}
              />
              
              <div className="relative h-[200px] md:h-[300px] mb-10 overflow-hidden rounded-3xl">
                <Image 
                  src={food.image} 
                  alt={food.name} 
                  fill 
                  className="object-contain group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[22px] md:text-[32px] lg:text-[40px] font-bold text-white mb-4 tracking-tight">{food.name}</h3>
                <p className="text-[#8E8E8E] text-[18px] leading-relaxed mb-8 opacity-80">
                  {food.description}
                </p>
                <div className="flex items-center gap-3 text-[#E0F5A1] font-bold group-hover:gap-5 transition-all cursor-pointer">
                  <span className="text-[14px] uppercase tracking-widest">{t("cta.learn_more")}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating 3D Elements for this section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ 
            y: useTransform(smoothProgress, [0, 1], [-300, 300]),
            rotate: useTransform(smoothProgress, [0, 1], [0, 180]),
            scale: useTransform(smoothProgress, [0, 1], [0.8, 1.2])
          }}
          className="absolute top-0 left-[-5%] w-[500px] h-[500px] opacity-[0.03] hidden lg:block"
        >
          <Image src={FOOD_ASSETS.avocado} alt="3D Float" fill className="object-contain" />
        </motion.div>
        
        <motion.div 
          style={{ 
            y: useTransform(smoothProgress, [0, 1], [300, -300]),
            rotate: useTransform(smoothProgress, [0, 1], [0, -120]),
            scale: useTransform(smoothProgress, [0, 1], [1.2, 0.8])
          }}
          className="absolute bottom-0 right-[-5%] w-[450px] h-[450px] opacity-[0.05] hidden lg:block"
        >
          <Image src={FOOD_ASSETS.bananas} alt="3D Float" fill className="object-contain" />
        </motion.div>
      </div>

      <style jsx>{`
        [dir="rtl"] .group-hover\:gap-5:hover {
          gap: 1.25rem;
          padding-right: 0.5rem;
        }
      `}</style>
    </section>
  );
}
