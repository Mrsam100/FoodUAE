"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

/**
 * DisintegratingText Component
 * Implementation of the "We can solve this crisis" animated typography section.
 * Features character-by-character reveal/disintegration based on scroll.
 */
export default function DisintegratingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  // Text content split based on the structure in the provided HTML
  const line1Words = [
    { text: "We", chars: ["W", "e"] },
    { text: "can", chars: ["c", "a", "n"] },
    { text: "solve", chars: ["s", "o", "l", "v", "e"] },
  ];
  const line2Words = [
    { text: "this", chars: ["t", "h", "i", "s"] },
    { text: "crisis.", chars: ["c", "r", "i", "s", "i", "s", "."] },
  ];

  return (
    <section
      ref={containerRef}
      id="solution-solvable"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-center bg-[#0A0505] py-16 md:py-32 lg:py-[160px]"
    >
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="flex flex-col items-center text-center">
          {/* First Line */}
          <div className="mb-4 flex flex-wrap justify-center gap-x-[0.3em] overflow-hidden leading-[1.1]">
            {line1Words.map((word, wordIdx) => (
              <span key={`l1-w-${wordIdx}`} className="inline-flex">
                {word.chars.map((char, charIdx) => (
                  <motion.span
                    key={`l1-c-${charIdx}`}
                    initial={{ opacity: 0.1, y: 10, filter: "blur(4px)" }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0.1, y: 10, filter: "blur(4px)" }
                    }
                    transition={{
                      duration: 0.5,
                      delay: wordIdx * 0.1 + charIdx * 0.03,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block text-[clamp(48px,10vw,120px)] font-bold tracking-tight text-[#F7F5EF]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>

          {/* Second Line */}
          <div className="flex flex-wrap justify-center gap-x-[0.3em] overflow-hidden leading-[1.1]">
            {line2Words.map((word, wordIdx) => (
              <span key={`l2-w-${wordIdx}`} className="inline-flex">
                {word.chars.map((char, charIdx) => (
                  <motion.span
                    key={`l2-c-${charIdx}`}
                    initial={{ opacity: 0.1, y: 10, filter: "blur(4px)" }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0.1, y: 10, filter: "blur(4px)" }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + wordIdx * 0.1 + charIdx * 0.03,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block text-[clamp(48px,10vw,120px)] font-bold tracking-tight text-[#F7F5EF]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </h2>
      </div>

      {/* Narrative Subtext Following the Disintegrating Title */}
      <div className="container mx-auto mt-12 md:mt-24 px-4 md:px-10">
        <motion.p
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[900px] text-center text-[18px] font-normal leading-[1.4] text-[#8E8A85] md:text-[24px] lg:text-[32px]"
        >
          For the first time, we{"'"}re calling out the dangers of highly
          processed foods and rebuilding a broken system from the ground up with
          gold-standard science and common sense.
        </motion.p>
      </div>
      
      {/* Visual background ambient glow consistent with UAE adaptation */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="h-full w-full rounded-full bg-[#E6FF8C] blur-[120px]"></div>
      </div>
    </section>
  );
}