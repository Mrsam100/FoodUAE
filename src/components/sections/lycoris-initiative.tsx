"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Extracted to avoid useTransform inside .map() loop (Rules of Hooks violation)
function FloatingFoodItem({ food, idx, scrollProgress, rotateEffect }: { food: { name: string; x: string }; idx: number; scrollProgress: any; rotateEffect: any }) {
  const y = useTransform(scrollProgress, [0, 1], [100 * (idx + 1), -100 * (idx + 1)]);
  return (
    <motion.div
      style={{ left: food.x, top: `${20 * (idx + 1)}%`, y, rotate: rotateEffect }}
      className="absolute flex items-center justify-center"
    >
      <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-[#D9EE9B]/20 to-transparent blur-2xl" />
      <div className="absolute font-mono text-[12px] uppercase tracking-[0.2em] text-[#D9EE9B]">
        [ {food.name} ]
      </div>
    </motion.div>
  );
}

const LycorisInitiative = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yTranslate = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const rotateEffect = useSpring(useTransform(scrollYProgress, [0, 1], [-15, 15]), springConfig);

  // Localized 3D-ish hand-painted assets (Simulated since specific assets aren't in list)
  const localizedFoods = [
    { name: "Dates", x: "10%", delay: 0 },
    { name: "Hummus", x: "75%", delay: 0.2 },
    { name: "Sea Bream", x: "20%", delay: 0.4 },
    { name: "Labneh", x: "85%", delay: 0.1 },
    { name: "Olives", x: "45%", delay: 0.3 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0504] py-16 md:py-32 lg:py-[160px] text-white"
    >
      {/* 3D Animated Food Scroll Effects Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 hidden lg:block">
        {localizedFoods.map((food, idx) => (
          <FloatingFoodItem key={idx} food={food} idx={idx} scrollProgress={scrollYProgress} rotateEffect={rotateEffect} />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block rounded-full bg-[#1A1A1A] px-6 py-2 border border-white/10"
          >
            <span className="font-mono text-[12px] uppercase tracking-widest text-[#888888]">
              Official Design Partner
            </span>
          </motion.div>

          <h2 className="mb-12 max-w-4xl text-balance text-center text-[clamp(32px,8vw,100px)] font-bold leading-[0.95] tracking-[-0.04em]">
            Lycoris Design Studios <span className="text-[#CB0000]">Initiative</span>
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:text-left">
            <div className="space-y-8">
              <p className="body-text text-balance text-[#888888]">
                In collaboration with the USG health reset, Lycoris Design Studios has spearheaded
                the visual translation of complex nutritional science into actionable,
                high-impact design systems. Our mission is to make "Real Food" more than a guideline—it's a cultural shift.
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 border-l-2 border-[#CB0000] pl-6 py-2">
                  <span className="font-mono text-sm tracking-tighter text-[#D9EE9B]">01</span>
                  <span className="text-xl font-semibold tracking-tight">Systemic Visual Overhaul</span>
                </div>
                <div className="flex items-center space-x-4 border-l-2 border-[#262626] pl-6 py-2">
                  <span className="font-mono text-sm tracking-tighter text-[#888888]">02</span>
                  <span className="text-xl font-semibold tracking-tight">Regional MENA Adaptation</span>
                </div>
                <div className="flex items-center space-x-4 border-l-2 border-[#262626] pl-6 py-2">
                  <span className="font-mono text-sm tracking-tighter text-[#888888]">03</span>
                  <span className="text-xl font-semibold tracking-tight">Behavioral UI Architecture</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 lg:pl-12">
              <div className="ai-card border-white/5 bg-white/5 backdrop-blur-sm">
                <p className="mb-4 text-sm leading-relaxed text-white/80">
                  "Our goal was to strip away the industrial noise of processed food marketing
                  and replace it with the brutalist honesty of real ingredients. We wanted every 
                  pixel to feel as refreshing as a whole meal."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-[#D9EE9B]" />
                  <div>
                    <div className="text-[14px] font-bold uppercase tracking-wide">Lead Curator</div>
                    <div className="font-mono text-[10px] text-[#888888]">Lycoris Design Ops</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://thelycoris.com" 
                  className="cta-button bg-[#D9EE9B] hover:scale-105 transition-transform"
                >
                  Explore the Studio
                </a>
                <button className="flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
                  View Framework
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer style branding */}
        <div className="mt-16 md:mt-24 lg:mt-40 flex flex-col items-center justify-between space-y-8 border-t border-white/10 pt-12 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-[#CB0000] rotate-45" />
            <span className="font-mono text-[14px] font-medium tracking-[0.2em] text-white">
              LYCORIS DESIGN
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#888888]">
            &copy; {new Date().getFullYear()} All Rights Reserved. Prepared for the Department of Health.
          </div>
        </div>
      </div>

      {/* Background radial gradient for depth */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 rounded-[100%] bg-[#CB0000]/5 blur-[120px]" />
    </section>
  );
};

export default LycorisInitiative;