"use client";

import React, { useMemo, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// Pre-compute random values outside render to avoid non-deterministic behavior
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Separate component for each animated character (hooks at top level, not in a loop)
function DisintegratingChar({
  char, delay, progress
}: {
  char: string; delay: number; progress: any;
}) {
  // Pre-compute stable random values using index as seed
  const randomY = useMemo(() => -100 - seededRandom(delay * 1000) * 200, [delay]);
  const randomX = useMemo(() => (seededRandom(delay * 2000) - 0.5) * 150, [delay]);
  const randomRotate = useMemo(() => (seededRandom(delay * 3000) - 0.5) * 90, [delay]);

  const opacity = useTransform(progress, [0.3 + delay, 0.6 + delay], [1, 0]);
  const y = useTransform(progress, [0.3 + delay, 0.7 + delay], [0, randomY]);
  const x = useTransform(progress, [0.3 + delay, 0.7 + delay], [0, randomX]);
  const rotate = useTransform(progress, [0.3 + delay, 0.7 + delay], [0, randomRotate]);
  const filter = useTransform(progress, [0.3 + delay, 0.6 + delay], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.span
      style={{ display: "inline-block", opacity, x, y, rotate, filter }}
    >
      {char}
    </motion.span>
  );
}

// Separate component for each animated word (hooks at top level)
function RevealWord({ word, progress, start, end }: { word: string; progress: any; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.25em] mb-2 overflow-hidden">
      <motion.span style={{ opacity }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
}

const CrisisSolution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const disintegrateRef = useRef<HTMLDivElement>(null);
  const textBodyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: disintegrateProgress } = useScroll({
    target: disintegrateRef,
    offset: ["start end", "end start"],
  });

  const titleLines = [
    ["R", "e", "a", "l"],
    ["F", "o", "o", "d"],
    ["c", "a", "n"],
    ["s", "o", "l", "v", "e"],
    ["t", "h", "i", "s"],
    ["c", "r", "i", "s", "i", "s", "."],
  ];

  const { scrollYProgress: bodyProgress } = useScroll({
    target: textBodyRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const bodyText =
    "For the first time, our regional initiative calls on UAE and MENA families to avoid highly processed food. This is not an attack on commerce. It reflects a health reality families live with every day.";
  const words = bodyText.split(" ");

  return (
    <div ref={containerRef} className="relative bg-[#0a0504] text-white overflow-hidden pb-40">
      <section
        ref={disintegrateRef}
        className="min-h-[100vh] flex items-center justify-center py-20 px-6 sm:px-16"
        aria-label="Real Food can solve this crisis"
      >
        <div className="max-w-[1280px] w-full mx-auto text-center">
          <h2 className="flex flex-wrap justify-center font-bold tracking-[-0.04em] leading-[1.0] text-[40px] sm:text-[64px] lg:text-[80px]">
            {titleLines.map((lineChars, lineIdx) => (
              <React.Fragment key={`line-${lineIdx}`}>
                <div className="flex mr-[0.3em] last:mr-0 mb-4 lg:mb-0">
                  {lineChars.map((char, charIdx) => (
                    <DisintegratingChar
                      key={`char-${lineIdx}-${charIdx}`}
                      char={char}
                      delay={(lineIdx * 4 + charIdx) * 0.02}
                      progress={disintegrateProgress}
                    />
                  ))}
                </div>
                {lineIdx === 2 && <div className="basis-full h-0" />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </section>

      <section
        ref={textBodyRef}
        className="min-h-[80vh] flex items-start justify-center px-6 sm:px-16 mt-20"
        aria-label="Initiative description"
      >
        <div className="max-w-[1280px] w-full">
          <p className="flex flex-wrap font-normal leading-[1.4] text-[24px] sm:text-[40px] lg:text-[64px] tracking-tight text-left">
            {words.map((word, i) => (
              <RevealWord
                key={i}
                word={word}
                progress={bodyProgress}
                start={i / words.length}
                end={i / words.length + 1 / words.length}
              />
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CrisisSolution;
