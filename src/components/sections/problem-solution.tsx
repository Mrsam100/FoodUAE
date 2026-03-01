"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { FOOD_ASSETS } from '@/lib/food-assets';

// Separate component so useTransform is called at top level, not inside .map()
function ScrollWord({ word, progress, start, end, dir }: { word: string; progress: any; start: number; end: number; dir: string }) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(progress, [start, end], ["#444444", "#FFFFFF"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.25em] transition-colors duration-300"
    >
      {word}
    </motion.span>
  );
}

export default function ProblemSolutionSection() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pyramidOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const pyramidScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const subTextOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const pyramidImage = FOOD_ASSETS.foodPyramid;

  const mainText = dir === 'rtl'
    ? "لأول مرة، تدعو مبادرتنا الإقليمية عائلات الإمارات والشرق الأوسط لتجنب الأطعمة المستوردة عالية المعالجة. هذا ليس هجوماً على التجارة، بل هو انعكاس للواقع الصحي الذي تعيشه عائلاتنا يومياً."
    : "For the first time, our regional initiative calls on the UAE and MENA families to avoid highly processed imports. This is not an attack on commerce. It reflects a health reality our families live with every day.";

  const subText = dir === 'rtl'
    ? "لعقود من الزمن، تم تضليلنا بتوجيهات أعطت الأولوية للأغذية المصنعة، ونواجه الآن معدلات غير مسبوقة من الأمراض المزمنة."
    : "For decades we've been misled by guidance that prioritized highly processed food, and are now facing rates of unprecedented chronic disease.";

  const finalPhrase = dir === 'rtl' ? "الغذاء الحقيقي يمكنه حل هذه الأزمة." : "Real Food can solve this crisis.";

  return (
    <div ref={containerRef} className="relative bg-[#0A0202] text-white">
      <section className="relative min-h-[200vh] md:min-h-[300vh] w-full px-6 lg:px-0">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1200px] mx-auto h-full py-20">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <ScrollText
                progress={scrollYProgress}
                text={mainText}
                dir={dir}
              />
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <motion.div
                style={{ opacity: pyramidOpacity, scale: pyramidScale }}
                className="relative group"
              >
                <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[440/340] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(208,2,2,0.15)] group-hover:shadow-[0_40px_100px_rgba(208,2,2,0.3)] transition-all duration-700">
                  <Image
                    src={pyramidImage}
                    alt="1992 Food Pyramid"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    priority
                  />
                </div>
                <p className="mt-4 text-[#8E8E8E] font-black text-xs uppercase tracking-[0.3em] text-center lg:text-right">
                  1992 Food Pyramid
                </p>

                <div className="mt-12 max-w-full md:max-w-[280px]">
                  <motion.p
                    style={{ opacity: subTextOpacity }}
                    className={cn(
                      "text-[#8E8E8E] text-xl leading-relaxed font-bold italic",
                      dir === 'rtl' ? "text-right" : "text-left"
                    )}
                  >
                    {subText}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex flex-col items-center justify-center bg-[#0A0202]">
        <div className="container max-w-[1200px] text-center px-4">
          <DisintegratingText progress={scrollYProgress} text={finalPhrase} />
        </div>
      </section>
    </div>
  );
}

function ScrollText({ progress, text, dir }: { progress: any; text: string; dir: string }) {
  const words = text.split(" ");

  return (
    <p className={cn(
      "text-[clamp(32px,4vw,64px)] font-black leading-[1.05] tracking-tight",
      dir === 'rtl' ? "text-right" : "text-left"
    )}>
      {words.map((word, i) => {
        const start = Math.max(0, (i / words.length) * 0.6);
        const end = Math.min(1, (i / words.length) * 0.6 + 0.1);
        return (
          <ScrollWord
            key={i}
            word={word}
            progress={progress}
            start={start}
            end={end}
            dir={dir}
          />
        );
      })}
    </p>
  );
}

function DisintegratingText({ progress, text }: { progress: any, text: string }) {
  const textOpacity = useTransform(progress, [0.8, 0.9], [0, 1]);
  const textY = useTransform(progress, [0.8, 0.9], [60, 0]);

  const words = text.split(" ");

  return (
    <motion.h2
      style={{ opacity: textOpacity, y: textY }}
      className="text-[clamp(48px,10vw,140px)] font-black leading-[0.85] tracking-tighter uppercase"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              className="inline-block text-[#E0F5A1] italic"
              initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: (wordIdx * 0.1) + (charIdx * 0.05),
                ease: "easeOut"
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
