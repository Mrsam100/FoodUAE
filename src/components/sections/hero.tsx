"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { FOOD_ASSETS } from '@/lib/food-assets';

const HeroSection = () => {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 md:pb-40 lg:pb-60 bg-[#0A0202] text-white selection:bg-[#E0F5A1] selection:text-[#0A0202]"
      aria-label="Real Food Wins - Lycoris Design Studios Initiative"
    >
        {/* 3D-like Parallax Assets - Richer and More Detailed */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Avocado Left */}
          <motion.div 
            style={{ 
              y: useTransform(smoothProgress, [0, 1], [0, -400]),
              rotate: useTransform(smoothProgress, [0, 1], [0, 120]),
              scale: useTransform(smoothProgress, [0, 0.5], [1, 1.2])
            }}
            className="absolute left-[5%] top-[20%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] opacity-80"
          >
            <Image 
              src={FOOD_ASSETS.avocado}
              alt="3D Avocado" 
              width={480} 
              height={456}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(224,245,161,0.2)]"
            />
          </motion.div>

          {/* Fruit Right */}
          <motion.div 
            style={{ 
              y: useTransform(smoothProgress, [0, 1], [0, -600]),
              rotate: useTransform(smoothProgress, [0, 1], [0, -90]),
              scale: useTransform(smoothProgress, [0, 0.5], [1, 1.5])
            }}
            className="absolute right-[8%] top-[15%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[220px] lg:h-[220px] opacity-90"
          >
            <Image 
              src={FOOD_ASSETS.bananas}
              alt="3D Bananas" 
              width={324} 
              height={264}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(208,2,2,0.2)]"
            />
          </motion.div>

          {/* Dates Element - Adding New Regional Content */}
          <motion.div 
            style={{ 
              y: useTransform(smoothProgress, [0, 1], [0, -450]),
              rotate: useTransform(smoothProgress, [0, 1], [0, -60]),
              scale: useTransform(smoothProgress, [0, 0.5], [1, 1.3])
            }}
            className="absolute left-[15%] top-[45%] w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] opacity-90"
          >
            <Image 
              src={FOOD_ASSETS.tomatoes}
              alt="Traditional Dates" 
              width={480} 
              height={456}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(139,69,19,0.3)] filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay rounded-full" />
          </motion.div>

          {/* Orange Floating */}
          <motion.div
            style={{
              y: useTransform(smoothProgress, [0, 1], [0, -200]),
              rotate: useTransform(smoothProgress, [0, 1], [0, 45]),
              x: useTransform(smoothProgress, [0, 1], [0, 50])
            }}
            className="absolute right-[15%] top-[60%] w-[60px] md:w-[90px] lg:w-[120px] opacity-60 filter blur-[1px]"
          >
            <Image
              src={FOOD_ASSETS.orange}
              alt="3D Orange"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

            {/* Pineapple Floating Bottom Left */}
            <motion.div
              style={{
                y: useTransform(smoothProgress, [0, 1], [0, -300]),
                rotate: useTransform(smoothProgress, [0, 1], [0, -30]),
                x: useTransform(smoothProgress, [0, 1], [0, -50])
              }}
              className="absolute left-[10%] top-[75%] w-[90px] md:w-[140px] lg:w-[200px] opacity-70"
            >
              <Image
                src={FOOD_ASSETS.pineapple}
                alt="3D Pineapple"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              />
            </motion.div>

            {/* Arabic Coffee Pot (Dallah) Placeholder - Using a stylized shape */}
            <motion.div 
              style={{ 
                y: useTransform(smoothProgress, [0, 1], [0, -900]),
                rotate: useTransform(smoothProgress, [0, 1], [0, 15]),
                scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1.1])
              }}
              className="absolute right-[5%] top-[40%] w-[70px] md:w-[110px] lg:w-[150px] opacity-80 z-20 hidden md:block"
            >
              <div className="relative w-full aspect-[2/3] bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 rounded-t-[100px] rounded-b-lg shadow-[0_0_50px_rgba(251,191,36,0.3)] border border-white/20">
                <div className="absolute -left-4 top-1/4 w-8 h-20 border-l-4 border-y-4 border-amber-500 rounded-l-full" />
                <div className="absolute right-0 top-0 w-4 h-full bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-[10px] font-bold text-amber-200/50 rotate-90 tracking-[0.5em] uppercase">GAHWA</span>
                </div>
              </div>
            </motion.div>

            {/* Spices / Dates Bowl Placeholder */}
            <motion.div 
              style={{ 
                y: useTransform(smoothProgress, [0, 1], [0, -350]),
                rotate: useTransform(smoothProgress, [0, 1], [0, -45]),
              }}
              className="absolute left-[30%] top-[80%] w-[60px] md:w-[90px] lg:w-[120px] opacity-60 z-10 hidden md:block"
            >
              <div className="w-full aspect-square bg-gradient-to-tr from-orange-900 to-red-900 rounded-full shadow-2xl border border-white/10 flex items-center justify-center">
                 <div className="w-4/5 h-4/5 bg-black/40 rounded-full blur-sm" />
              </div>
            </motion.div>

            {/* More Vegetables - Broccoli */}
            <motion.div 
              style={{ 
                y: useTransform(smoothProgress, [0, 1], [0, -550]),
                rotate: useTransform(smoothProgress, [0, 1], [0, 180]),
              }}
              className="absolute right-[35%] top-[70%] w-[50px] md:w-[75px] lg:w-[100px] opacity-50"
            >
               <Image 
                src={FOOD_ASSETS.broccoli}
                alt="3D Broccoli" 
                width={400} 
                height={400}
                className="w-full h-auto hue-rotate-[45deg]"
              />
            </motion.div>


        {/* Apple Floating Top Center */}
        <motion.div
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -800]),
            rotate: useTransform(smoothProgress, [0, 1], [0, 360]),
            scale: useTransform(smoothProgress, [0, 0.5], [0.5, 0.8])
          }}
          className="absolute left-[45%] top-[5%] w-[70px] md:w-[110px] lg:w-[150px] opacity-40 blur-[2px]"
        >
          <Image
            src={FOOD_ASSETS.apple}
            alt="3D Apple"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Strawberry Floating */}
        <motion.div
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -500]),
            rotate: useTransform(smoothProgress, [0, 1], [0, -180]),
          }}
          className="absolute left-[25%] top-[40%] w-[50px] md:w-[75px] lg:w-[100px] opacity-50 blur-[1px]"
        >
          <Image
            src={FOOD_ASSETS.strawberry}
            alt="3D Strawberry"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Berries Floating */}
        <motion.div
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -700]),
            rotate: useTransform(smoothProgress, [0, 1], [0, 90]),
          }}
          className="absolute right-[25%] top-[30%] w-[40px] md:w-[60px] lg:w-[80px] opacity-60"
        >
          <Image
            src={FOOD_ASSETS.berries}
            alt="3D Berries"
            width={400}
            height={400}
            className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,150,0,0.3)]"
          />
        </motion.div>
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center px-4">
        {/* Initiative Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
           <div className="w-2 h-2 rounded-full bg-[#E0F5A1] animate-pulse" />
           <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E0F5A1]">{t("hero.subtitle")}</span>
        </motion.div>

        {/* Display Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 max-w-[1200px]"
        >
          <h1 className={cn(
            "text-display leading-[0.85] tracking-[-0.05em]",
            dir === "rtl" && "font-tajawal"
          )}>
            <span className="block">{t("hero.title")}</span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block italic font-light text-[#E0F5A1] opacity-90"
            >
              {dir === "rtl" ? "ينتصر" : "Wins"}
            </motion.span>
          </h1>
        </motion.div>

        {/* Description - Regionalized for UAE/MENA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-[720px] mb-12"
        >
          <p className="text-[20px] md:text-[24px] text-[#8E8E8E] leading-relaxed font-medium">
            {t("hero.description")}
          </p>
        </motion.div>

        {/* Pulse Button CTA */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-pulse group"
          onClick={() => document.getElementById('pyramid')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10 tracking-tight">{t("hero.cta")}</span>
        </motion.button>

        {/* Hero Video Section Linkage */}
        <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           id="hero-video" 
           className="mt-16 md:mt-40 w-full max-w-[1100px] aspect-video relative group cursor-pointer video-container rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(224,245,161,0.1)]"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0202] via-transparent to-transparent z-10 pointer-events-none" />
           
           <div className="absolute inset-0 overflow-hidden">
             <Image 
                src={FOOD_ASSETS.foodSpread}
                alt="Lycoris Public Initiative Video Placeholder"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
           </div>

           <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="glass-nav px-8 py-4 flex items-center gap-4 transition-all duration-300 group-hover:bg-[#E0F5A1] group-hover:text-[#0A0202]">
                <span className="font-bold text-lg tracking-tight uppercase">{dir === "rtl" ? "شاهد فيلم المبادرة" : "Watch Initiative Film"}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg group-hover:bg-[#0A0202] group-hover:text-white transition-colors">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(224,245,161,0.05)_0%,transparent_70%)] pointer-events-none" />

      <style jsx>{`
        .font-tajawal {
          font-family: 'Tajawal', sans-serif !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
