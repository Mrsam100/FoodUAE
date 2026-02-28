"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { FOOD_ASSETS } from '@/lib/food-assets';

export default function DubaiCulture() {
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

  const CULTURE_CARDS = [
    {
      title: t("culture.ancestral_diet"),
      desc: t("culture.ancestral_diet_desc"),
      icon: "🐪",
      delay: 0
    },
    {
      title: t("culture.dubai_title"),
      desc: t("culture.dubai_desc"),
      icon: "🏙️",
      delay: 0.1
    },
    {
      title: t("culture.veggies_title"),
      desc: t("culture.veggies_desc"),
      icon: "🌿",
      delay: 0.2
    },
    {
      title: t("culture.awareness"),
      desc: t("culture.awareness_desc"),
      icon: "✨",
      delay: 0.3
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0D0D0D] py-16 md:py-24 lg:py-40 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1 rounded-full border border-[#E0F5A1]/30 bg-[#E0F5A1]/5 text-[#E0F5A1] text-xs font-bold uppercase tracking-widest mb-6"
            >
              {dir === "rtl" ? "ثقافتنا هي صحتنا" : "Our Culture is Our Health"}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(32px,6vw,96px)] font-black text-white leading-[0.9] mb-8 tracking-tighter"
            >
              {t("culture.uae")} <br/>
              <span className="text-[#E0F5A1] italic">{dir === "rtl" ? "والتراث التقليدي" : "Traditional Wisdom"}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#8E8E8E] text-[20px] md:text-[24px] leading-relaxed max-w-[600px] font-medium"
            >
              {t("culture.desc")} {t("culture.traditional_good_desc")}
            </motion.p>
          </div>

          <div className="lg:w-1/2 relative">
             <motion.div 
               style={{ 
                 rotate: useTransform(smoothProgress, [0, 1], [0, 45]),
                 scale: useTransform(smoothProgress, [0, 1], [0.9, 1.1])
               }}
               className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-[80px] border-2 border-[#E0F5A1]/20 shadow-[0_0_100px_rgba(224,245,161,0.1)]"
             >
               <Image 
                 src={FOOD_ASSETS.foodSpread} 
                 alt="UAE Traditional Food" 
                 fill 
                 className="object-cover contrast-125 brightness-75 hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0202] via-transparent to-transparent" />
             </motion.div>
             
             {/* Overlapping 3D Elements */}
             <motion.div 
               style={{ 
                 y: useTransform(smoothProgress, [0, 1], [100, -100]),
                 rotate: useTransform(smoothProgress, [0, 1], [-15, 15])
               }}
               className="absolute -top-10 -right-10 w-[180px] h-[180px] z-20 drop-shadow-2xl hidden md:block"
             >
                <Image 
                  src={FOOD_ASSETS.avocado} 
                  alt="3D Fruit" 
                  width={300} 
                  height={300}
                />
             </motion.div>

             <motion.div 
               style={{ 
                 y: useTransform(smoothProgress, [0, 1], [-50, 50]),
                 rotate: useTransform(smoothProgress, [0, 1], [45, -45])
               }}
               className="absolute -bottom-10 -left-10 w-[150px] h-[150px] z-20 drop-shadow-2xl hidden md:block"
             >
                <Image 
                  src={FOOD_ASSETS.tomatoes} 
                  alt="3D Dates" 
                  width={300} 
                  height={300}
                  className="filter brightness-75 contrast-125 grayscale-[0.3]"
                />
             </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay }}
              className="p-10 rounded-[48px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-[#E0F5A1]/30 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 origin-left">{card.icon}</div>
              <h3 className="text-[24px] font-bold text-white mb-4 leading-tight">{card.title}</h3>
              <p className="text-[#8E8E8E] text-[16px] leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_center,rgba(224,245,161,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
