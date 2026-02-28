"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FOOD_ASSETS } from '@/lib/food-assets';

const BrokenSystemScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text highlighting logic
  // We have two main text blocks. 
  // Block 1: "For decades we've been misled..."
  // Block 2: "For the first time, official U.S. guidance..."
  
  const text1 = "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.".split(" ");
  const text2 = "For the first time, regional health guidance calls on citizens to avoid highly processed food. This is not an attack on industry or a legal definition. It reflects a public health reality families live with every day.".split(" ");

  // Movement for the sticky image
  // It starts right, then moves as we scroll
  const imageX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["0%", "0%", "-300%", "-300%"]);
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0%", "0%", "50%", "100%"]);
  const imageOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#0A0404] text-white min-h-[200vh] md:min-h-[300vh]"
      id="broken-system-section"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pointer-events-none">
        <div className="container mx-auto px-6 lg:px-10 relative h-full flex items-center">
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* Left side: The Large Scrolling Text */}
            <div className="lg:col-span-8 pointer-events-auto">
              {/* Block 1 */}
              <div className="mb-[20vh]">
                <p className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-tight">
                  {text1.map((word, i) => {
                    const start = i / (text1.length * 4); // Activate in the first 25%
                    const end = (i + 1) / (text1.length * 4);
                    return (
                      <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}{" "}
                      </Word>
                    );
                  })}
                </p>
              </div>

              {/* Block 2 */}
              <div className="mt-[20vh]">
                <p className="text-[18px] md:text-[32px] lg:text-[42px] font-semibold leading-[1.3] text-[#8E8E93]">
                   {text2.map((word, i) => {
                    const start = 0.4 + (i / (text2.length * 2)); // Activate from 40% to 90%
                    const end = 0.4 + ((i + 1) / (text2.length * 2));
                    return (
                      <Word key={i} progress={scrollYProgress} range={[start, end]} activeColor="#FFFFFF">
                        {word}{" "}
                      </Word>
                    );
                  })}
                </p>
              </div>
            </div>

            {/* Right side: Sticky Pyramid Image */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <motion.div 
                style={{ 
                  x: imageX, 
                  y: imageY,
                  opacity: imageOpacity
                }}
                className="relative z-10"
              >
                <div className="bg-[#1C1C1E]/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-[320px]">
                  <Image 
                    src={FOOD_ASSETS.foodPyramid}
                    alt="1992 Food Pyramid"
                    width={440}
                    height={340}
                    className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[#8E8E93] text-center">
                    1992 Food Pyramid
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer to allow for scrolling duration */}
      <div className="h-[200vh]" />
    </section>
  );
};

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
  activeColor?: string;
}

const Word = ({ children, progress, range, activeColor = "#FFFFFF" }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#444444", activeColor]);

  return (
    <motion.span 
      style={{ opacity, color }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default BrokenSystemScroll;