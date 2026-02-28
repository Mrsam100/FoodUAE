"use client";

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

// Stable seeded random to avoid non-deterministic rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

const ProblemStatement: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const disintegrationRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
        setScrollProgress(progress);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { percentage: 20, label: "20% of UAE adults have ", span: "diabetes" },
    { percentage: 33, label: "33% of adults in the region are ", span: "obese or overweight" },
    { percentage: 70, label: "70% of a child's diet in some parts of our region is ", span: "ultra-processed", extra: "—linked to rising chronic disease" }
  ];

  const narrativeText = "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.";
  const narrativeWords = narrativeText.split(' ');

  const footerNarrative = "For the first time, our regional initiative calls on UAE and MENA families to avoid highly processed food. This is not an attack on commerce. It reflects a health reality families live with every day.";
  const footerWords = footerNarrative.split(' ');

  // Pre-compute random values for disintegration effect so they're stable across renders
  const line1Words = ["Real", "Food", "can"];
  const line2Words = ["solve", "this", "crisis."];

  const line1Randoms = useMemo(() =>
    line1Words.map((word, wIdx) =>
      word.split('').map((_, cIdx) => ({
        tx: seededRandom(wIdx * 100 + cIdx * 10 + 1) * 40 - 20,
        ty: seededRandom(wIdx * 100 + cIdx * 10 + 2) * 60 - 30,
        rot: seededRandom(wIdx * 100 + cIdx * 10 + 3) * 45 - 22.5,
        blur: seededRandom(wIdx * 100 + cIdx * 10 + 4) * 10,
      }))
    ), []);

  const line2Randoms = useMemo(() =>
    line2Words.map((word, wIdx) =>
      word.split('').map((_, cIdx) => ({
        tx: seededRandom(wIdx * 200 + cIdx * 10 + 5) * 50 - 25,
        ty: seededRandom(wIdx * 200 + cIdx * 10 + 6) * 80 - 40,
        rot: seededRandom(wIdx * 200 + cIdx * 10 + 7) * 60 - 30,
        blur: seededRandom(wIdx * 200 + cIdx * 10 + 8) * 15,
      }))
    ), []);

  return (
    <div ref={sectionRef} className="bg-[#0B0504] text-white">
      {/* Stats Section */}
      <section className="pt-16 pb-8 md:pt-32 md:pb-16 lg:pt-[160px] lg:pb-[80px]" aria-label="Health statistics">
        <div className="container mx-auto px-6">
          <div className="mb-[64px] text-left">
            <h2 className="text-[14px] uppercase tracking-[0.2em] font-mono text-[#888888] mb-4">
              The State of Our Health
            </h2>
            <h3 className="text-[clamp(32px,8vw,100px)] font-bold leading-[0.95] tracking-[-0.04em] mb-4">
              Our region is hurting.<br />The data is clear.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end" role="list" aria-label="Health statistics">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col" role="listitem">
                <div className="relative w-full bg-[#1A1A1A] h-[200px] md:h-[280px] lg:h-[340px] flex flex-col justify-end overflow-hidden mb-6" role="img" aria-label={`${stat.percentage}% statistic`}>
                  <div
                    className="bg-[#CB0000] w-full transition-all duration-1000 ease-out"
                    style={{
                      height: `${stat.percentage}%`,
                      transform: scrollProgress > 0.1 ? 'translateY(0)' : 'translateY(100%)'
                    }}
                  >
                    <div className="p-4 md:p-6 text-[32px] md:text-[48px] font-extrabold leading-none tracking-tighter">
                      {stat.percentage}%
                    </div>
                  </div>
                </div>
                <p className="text-[18px] md:text-[20px] leading-[1.4] font-medium max-w-[320px]">
                  {stat.label}
                  <span className="text-[#CB0000]">{stat.span}</span>
                  {stat.extra}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Scroll Narrative */}
      <section className="relative min-h-[200vh] md:min-h-[300vh]" aria-label="Narrative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative inline-block group">
                <div className="bg-[#1A1A1A] p-1 rounded-sm overflow-hidden mb-4">
                  <Image
                    src={FOOD_ASSETS.foodPyramid}
                    alt="1992 Food Pyramid"
                    width={440}
                    height={340}
                    className="w-[240px] h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <span className="text-[12px] font-mono tracking-widest text-[#888888] uppercase">1992 Food Pyramid</span>
              </div>

              <div className="mt-12 text-[24px] leading-tight max-w-[300px] text-[#888888]">
                {narrativeWords.map((word, i) => {
                  const start = 0.15 + (i * 0.008);
                  const opacity = Math.min(Math.max((scrollProgress - start) * 20, 0.2), 1);
                  return (
                    <span key={i} style={{ opacity }} className="transition-opacity duration-200">
                      {word}{' '}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="max-w-4xl">
                <div className="mb-12 md:mb-24 text-[clamp(24px,6vw,84px)] font-bold tracking-tight leading-[1.1]">
                  {footerWords.map((word, i) => {
                    const start = 0.3 + (i * 0.006);
                    const opacity = Math.min(Math.max((scrollProgress - start) * 15, 0.2), 1);
                    return (
                      <span key={i} style={{ opacity }} className="mr-[0.3em] inline-block">
                        {word}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disintegrating Solution Reveal */}
      <section className="py-24 md:py-40 lg:py-[240px] bg-[#0B0504]" aria-label="Real Food can solve this crisis">
        <div className="container mx-auto px-6 flex justify-center">
          <h2
            ref={disintegrationRef}
            className="text-[clamp(36px,12vw,160px)] font-extrabold leading-[0.85] tracking-[-0.06em] text-center max-w-[1000px]"
          >
            <div className="flex flex-wrap justify-center gap-x-[0.3em]">
              {line1Words.map((word, wIdx) => (
                <span key={wIdx} className="inline-flex">
                  {word.split('').map((char, cIdx) => {
                    const r = line1Randoms[wIdx][cIdx];
                    return (
                      <span
                        key={cIdx}
                        className="transition-transform duration-[1.5s] ease-out inline-block"
                        style={{
                          transform: scrollProgress > 0.8 ? `translate(${r.tx}px, ${r.ty}px) rotate(${r.rot}deg)` : 'translate(0,0) rotate(0)',
                          opacity: scrollProgress > 0.82 ? 0.3 : 1,
                          filter: scrollProgress > 0.8 ? `blur(${r.blur}px)` : 'none'
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-[0.3em]">
              {line2Words.map((word, wIdx) => (
                <span key={wIdx} className="inline-flex">
                  {word.split('').map((char, cIdx) => {
                    const r = line2Randoms[wIdx][cIdx];
                    return (
                      <span
                        key={cIdx}
                        className="transition-transform duration-[1.5s] ease-out inline-block"
                        style={{
                          transform: scrollProgress > 0.8 ? `translate(${r.tx}px, ${r.ty}px) rotate(${r.rot}deg)` : 'translate(0,0) rotate(0)',
                          opacity: scrollProgress > 0.82 ? 0.2 : 1,
                          filter: scrollProgress > 0.8 ? `blur(${r.blur}px)` : 'none'
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </div>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ProblemStatement;
