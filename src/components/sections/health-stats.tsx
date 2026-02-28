"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { FOOD_ASSETS } from '@/lib/food-assets';

const HealthStats = () => {
  const { t, dir } = useLanguage();

  const statsData = [
    {
      percentage: 20,
      description: t("stats.uae_diabetes_desc"),
      highlight: t("stats.diabetes"),
      barHeight: "160px", 
    },
    {
      percentage: 33,
      description: t("stats.mena_obesity_desc"),
      highlight: t("stats.obesity"),
      barHeight: "240px",
    },
    {
      percentage: 85,
      description: "85% of regional healthcare spending goes to ",
      highlight: "preventable chronic disease",
      suffix: "—directly linked to the rise of processed food",
      barHeight: "320px",
    }
  ];

  return (
    <section 
      id="problem" 
      className="bg-[#0A0202] text-white pt-16 pb-16 md:pt-32 md:pb-32 lg:pt-[160px] lg:pb-[160px] px-8 md:px-16"
      aria-label="The State of Our Health"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-[#8E8E8E] font-medium tracking-tight text-lg mb-6 uppercase">
            {t("stats.title")}
          </h2>
          <h3 className="text-[clamp(48px,6vw,80px)] font-bold leading-[1.0] tracking-[-0.02em]">
            {dir === 'rtl' ? (
              <>
                منطقة الشرق الأوسط في أزمة.<br />
                <span className="text-white font-black italic">البيانات واضحة.</span>
              </>
            ) : (
              <>
                The MENA Region is in crisis.<br />
                <span className="text-white font-black italic">The data is clear.</span>
              </>
            )}
          </h3>
        </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end relative z-10">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col gap-8 group">
                {/* Bar Container */}
                <div className="relative w-full flex items-end">
                   {/* 3D floating element near the bars */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute -top-12 -right-4 w-16 h-16 pointer-events-none group-hover:scale-125 transition-transform"
                  >
                    <Image 
                      src={index === 0 ? FOOD_ASSETS.tomatoes :
                           index === 1 ? FOOD_ASSETS.bananas :
                           FOOD_ASSETS.avocado}
                      alt="3D Asset"
                      width={100}
                      height={100}
                      className="drop-shadow-xl"
                    />
                  </motion.div>
                <div 
                  className="data-bar w-full bg-[#D00202] relative rounded-t-2xl overflow-hidden shadow-[0_0_50px_rgba(208,2,2,0.2)]"
                  style={{ 
                    height: stat.barHeight,
                    transition: 'height 1s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Percentage Display */}
                  <div className={index === 0 ? "absolute top-4 left-4 flex items-baseline font-black leading-none" : "absolute top-4 left-4 flex items-baseline font-black leading-none"}>
                    <span className="text-[clamp(48px,5vw,64px)] tracking-tighter">
                      {stat.percentage}
                    </span>
                    <span className="text-[clamp(24px,2vw,32px)] ml-0.5">%</span>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(208,2,2,0.15)_0%,transparent_70%)]" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[16px] md:text-[20px] leading-[1.4] font-normal text-white/80">
                {stat.description}
                <span className="text-[#D00202] font-black block mt-2 text-[24px]">
                  {stat.highlight}
                </span>
                {stat.suffix && <span className="text-sm block mt-2 opacity-50">{stat.suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .data-bar::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default HealthStats;
