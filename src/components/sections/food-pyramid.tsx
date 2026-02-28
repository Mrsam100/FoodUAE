"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from 'framer-motion';
import { FOOD_ASSETS as ASSETS } from '@/lib/food-assets';

const FOOD_ITEMS_MAP = {
  proteins: [
    { name: 'Milk', src: ASSETS.milk, x: '10%', y: '15%', scale: 0.8, rotate: -5 },
    { name: 'Olive Oil', src: ASSETS.oliveOil, x: '75%', y: '10%', scale: 0.7, rotate: 10 },
    { name: 'Salmon', src: ASSETS.salmon, x: '45%', y: '25%', scale: 0.9, rotate: 0 },
    { name: 'Chicken', src: ASSETS.chicken, x: '20%', y: '40%', scale: 0.85, rotate: 5 },
    { name: 'Steak', src: ASSETS.steak, x: '65%', y: '35%', scale: 1, rotate: -3 },
    { name: 'Avocado', src: ASSETS.avocado, x: '85%', y: '45%', scale: 0.6, rotate: 15 },
  ],
  veggies: [
    { name: 'Dates', src: ASSETS.tomatoes, x: '5%', y: '50%', scale: 0.9, rotate: -15 },
    { name: 'Broccoli', src: ASSETS.broccoli, x: '15%', y: '60%', scale: 0.9, rotate: -10 },
    { name: 'Tomatoes', src: ASSETS.tomatoes, x: '55%', y: '65%', scale: 0.75, rotate: 8 },
    { name: 'Bananas', src: ASSETS.bananas, x: '80%', y: '70%', scale: 0.85, rotate: -5 },
  ]
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[clamp(48px,6vw,80px)] font-bold tracking-tight leading-none text-[#0A0202] mb-12">
    {children}
  </h2>
);

const CategoryInfo = ({ title, body, target, active }: { title: string, body: string, target?: string, active: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: active ? 1 : 0.3, x: active ? 0 : -10 }}
    className="max-w-[440px] mb-24"
  >
    <h3 className="text-[24px] font-bold text-[#0A0202] mb-4 uppercase tracking-wider">{title}</h3>
    <p className="text-[#0A0202] text-[18px] leading-relaxed mb-4">{body}</p>
    {target && <p className="text-[#0A0202] font-bold text-[16px]">{target}</p>}
  </motion.div>
);

export default function FoodPyramid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothScroll.on("change", (latest) => {
      if (latest < 0.33) setActiveSegment(0);
      else if (latest < 0.66) setActiveSegment(1);
      else setActiveSegment(2);
    });
    return () => unsubscribe();
  }, [smoothScroll]);

    return (
      <div id="pyramid" ref={containerRef} className="relative bg-[#F5F5E9] min-h-[200vh] md:min-h-[300vh]">
        {/* Sticky content container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10 px-8">
          
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                style={{
                  opacity: useTransform(smoothScroll, [0, 0.1], [0, 1]),
                  y: useTransform(smoothScroll, [0, 0.1], [20, 0])
                }}
              >
                <SectionHeading>The MENA Real Food Pyramid</SectionHeading>
              </motion.div>


            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                {activeSegment === 0 && (
                  <CategoryInfo 
                    key="p1"
                    active={true}
                    title="Protein, Dairy, & Healthy Fats"
                    body="We are ending the war on protein. Every meal must prioritize high-quality, nutrient-dense protein from both animal and plant sources, paired with healthy fats from whole foods such as eggs, seafood, meats, full-fat dairy, nuts, seeds, olives, and avocados."
                    target="Protein target: 1.2–1.6 grams of protein per kilogram of body weight per day"
                  />
                )}
                {activeSegment === 1 && (
                  <CategoryInfo 
                    key="p2"
                    active={true}
                    title="Vegetables & Fruits"
                    body="Vegetables and fruits are essential to real food nutrition. Eat a wide variety of whole, colorful, nutrient-dense vegetables and fruits in their original form, prioritizing freshness and minimal processing."
                    target="Vegetables: 3 servings / Fruits: 2 servings per day."
                  />
                )}
                {activeSegment === 2 && (
                  <CategoryInfo 
                    key="p3"
                    active={true}
                    title="Whole Grains"
                    body="Whole grains are encouraged. Refined carbohydrates are not. Prioritize fiber-rich whole grains and significantly reduce the consumption of highly processed, refined carbohydrates that displace real nourishment."
                    target="Target: 2–4 servings per day."
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Interactive Pyramid & Floating Elements */}
          <div className="relative h-[80vh] flex items-center justify-center">
            {/* Pyramid SVG Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] stroke-[#0A0202] stroke-[0.5] fill-none">
                <path d="M50 5 L95 95 L5 95 Z" />
                <line x1="27.5" y1="50" x2="72.5" y2="50" />
                <line x1="16.25" y1="72.5" x2="83.75" y2="72.5" />
              </svg>
            </div>

            {/* Floating Food Elements */}
            <div className="absolute inset-0 w-full h-full perspective-[1000px]">
              {/* Protein Group */}
              {FOOD_ITEMS_MAP.proteins.map((food, i) => (
                <FoodItem 
                  key={food.name} 
                  food={food} 
                  index={i} 
                  progress={smoothScroll} 
                  activeRange={[0, 0.4]} 
                />
              ))}

              {/* Veggie Group */}
              {FOOD_ITEMS_MAP.veggies.map((food, i) => (
                <FoodItem 
                  key={food.name} 
                  food={food} 
                  index={i} 
                  progress={smoothScroll} 
                  activeRange={[0.3, 0.7]} 
                />
              ))}

              {/* Grains Indicator (Visual Placeholder as specific assets for grains are minimal in list) */}
              <motion.div
                style={{
                   opacity: useTransform(smoothScroll, [0.6, 0.7], [0, 1]),
                   scale: useTransform(smoothScroll, [0.6, 0.8], [0.8, 1])
                }}
                className="absolute top-[40%] left-[45%] w-32 h-32 bg-[#E0F5A1] rounded-full blur-[60px] opacity-20"
              />
            </div>

            {/* Micro-Navigation / Tooltips for Pyramid Segments */}
            <div className="absolute right-0 hidden lg:flex flex-col gap-8">
              {[
                "Protein, Dairy, & Healthy Fats",
                "Vegetables & Fruits",
                "Whole Grains"
              ].map((label, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <span className={`text-[12px] font-bold uppercase tracking-widest transition-all duration-300 ${activeSegment === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
                    {label}
                  </span>
                  <div 
                    className={`w-3 h-3 rounded-full border border-[#0A0202] transition-colors duration-300 ${activeSegment === idx ? 'bg-[#D00202]' : 'bg-transparent'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodItem({ food, index, progress, activeRange }: { food: { name: string; src: string; x: string; y: string; scale: number; rotate: number }, index: number, progress: MotionValue<number>, activeRange: [number, number] }) {
  const yOffset = useTransform(progress, [0, 1], [index * 50, -index * 50]);
  const opacity = useTransform(progress, [activeRange[0] - 0.1, activeRange[0], activeRange[1], activeRange[1] + 0.1], [0, 1, 1, 0]);
  const scale = useTransform(progress, [activeRange[0], activeRange[1]], [0.8 * food.scale, 1.2 * food.scale]);
  const rotateX = useTransform(progress, [0, 1], [0, 15]);
  const rotateY = useTransform(progress, [0, 1], [0, index % 2 === 0 ? 20 : -20]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: food.x,
        top: food.y,
        y: yOffset,
        opacity,
        scale,
        rotate: food.rotate,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        zIndex: 20 + index
      }}
      className="drop-shadow-2xl"
    >
      <div className="relative group">
        <Image 
          src={food.src} 
          alt={food.name}
          width={300}
          height={300}
          className="w-auto h-auto max-w-[180px] object-contain"
        />
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
      </div>
    </motion.div>
  );
}