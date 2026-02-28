"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { FOOD_ASSETS } from '@/lib/food-assets';

function FloatingOverlay({ smoothProgress, image, position }: { smoothProgress: MotionValue<number>; image: string; position: string }) {
  const y = useTransform(smoothProgress, [0, 1], [50, -50]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 90]);

  return (
    <motion.div
      style={{ y, rotate }}
      className={`absolute top-1/2 w-32 h-32 opacity-20 pointer-events-none blur-[1px] ${position}`}
    >
      <Image src={image} alt="" fill className="object-contain" />
    </motion.div>
  );
}

export default function ArabicTable() {
  const { t } = useLanguage();
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

  const TABLE_ITEMS = [
    {
      title: t("culture.superfood_dates"),
      desc: t("culture.superfood_dates_desc"),
      image: FOOD_ASSETS.dates,
      delay: 0
    },
    {
      title: t("culture.superfood_camel"),
      desc: t("culture.superfood_camel_desc"),
      image: FOOD_ASSETS.camelMilk,
      delay: 0.1
    },
    {
      title: t("culture.superfood_sidr"),
      desc: t("culture.superfood_sidr_desc"),
      image: FOOD_ASSETS.honey,
      delay: 0.2
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0A0202] py-40 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(36px,8vw,140px)] font-black text-white leading-none mb-8 tracking-tighter uppercase"
          >
            {t("culture.arabic_table")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#8E8E8E] text-[20px] md:text-[24px] max-w-[800px] mx-auto font-medium"
          >
            {t("culture.arabic_table_desc")}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {TABLE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-12 p-4 md:p-8 lg:p-16 rounded-[24px] md:rounded-[40px] lg:rounded-[60px] bg-white/[0.02] border border-white/5 relative overflow-hidden group ${i % 2 !== 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}
            >
               <div className="w-full md:w-1/2 aspect-square relative rounded-[40px] overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-1000">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-12 transition-transform duration-1000 group-hover:rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E0F5A1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>

               <div className="w-full md:w-1/2">
                  <span className="text-[#E0F5A1] font-black text-[32px] md:text-[48px] lg:text-[64px] opacity-10 leading-none mb-4 block">0{i+1}</span>
                  <h3 className="text-[24px] md:text-[40px] lg:text-[56px] font-black text-white mb-6 leading-none tracking-tight">{item.title}</h3>
                  <p className="text-[#8E8E8E] text-[20px] md:text-[22px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <div className="mt-10 h-1 w-24 bg-[#E0F5A1] group-hover:w-full transition-all duration-700" />
               </div>

               <div className="hidden md:block">
                 <FloatingOverlay
                   smoothProgress={smoothProgress}
                   image={item.image}
                   position={i % 2 === 0 ? '-right-10' : '-left-10'}
                 />
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 pointer-events-none opacity-[0.01]">
         <span className="text-[40vw] font-black text-white leading-none whitespace-nowrap select-none">TRADITION</span>
      </div>
    </section>
  );
}
