"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

interface PromptCard {
  id: number;
  title: string;
  prompt: string;
}

const PROMPTS: PromptCard[] = [
  {
    id: 1,
    title: "Planning a Healthy Ramadan Iftar",
    prompt: "I want to break my fast with real, nutrient-dense foods that give me sustained energy. Can you help me plan a week of healthy Ramadan Iftars focusing on local MENA ingredients like dates, labneh, and whole grains, avoiding highly processed sweets?",
  },
  {
    id: 2,
    title: "Local Market Shopping in Dubai",
    prompt: "I'm shopping at a traditional local market in Dubai and want to prioritize real food. What are the best seasonal vegetables, local fish (like Hamour or Sheri), and regional staples I should look for to replace packaged alternatives?",
  },
  {
    id: 3,
    title: "Busy Professional in Riyadh",
    prompt: "I work long hours in Riyadh and often rely on fast food deliveries. How can I quickly meal prep real food breakfasts and lunches using local ingredients that fit into a high-pressure corporate schedule?",
  },
  {
    id: 4,
    title: "Traditional Flavors, Modern Health",
    prompt: "I love traditional Arabic cuisine but want to make it healthier. How can I adapt classic dishes like Machboos or Mansaf to include more whole grains and lean proteins while reducing seed oils and refined carbs?",
  },
  {
    id: 5,
    title: "School Lunch and Kids' Habits",
    prompt: "My children are surrounded by processed snacks at school. What are some real food alternatives for their lunchboxes that honor our cultural tastes but provide better nourishment than packaged cakes and juices?",
  },
  {
    id: 6,
    title: "Mediterranean Diet MENA Style",
    prompt: "The Mediterranean diet is famous for health. How do I implement its core principles within a MENA cultural context, specifically using olives, legumes, and fresh herbs common in our regional markets?",
  },
];

export default function AIPrompts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveIndex(Math.min(newIndex, Math.ceil(PROMPTS.length / 3) - 1));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="real-answers" className="bg-[#F5F4E4] py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[#0A0505] font-display text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.03em] mb-8">
            Use AI to get real answers about real food
          </h2>
          <p className="text-[#918F84] text-[18px] md:text-[20px] font-body leading-[1.5] mb-12">
            From the guidelines to your kitchen. Ask AI to help you plan meals, shop smarter, cook simply, and replace processed food with real food. Not sure where to start? Use one of these example prompts adapted for MENA cultural contexts.
          </p>

          {/* Search Bar Placeholder */}
          <div className="relative max-w-2xl mx-auto mb-20">
            <div className="relative flex items-center bg-white/50 backdrop-blur-sm border border-black/10 rounded-full p-2 pl-6 pr-3 h-[64px] shadow-sm">
              <Search className="w-5 h-5 text-[#918F84] mr-3" />
              <input
                type="text"
                placeholder="Ask AI about real food..."
                className="flex-grow bg-transparent border-none outline-none text-[#0A0505] placeholder:text-[#918F84] text-[18px] font-body"
                readOnly
              />
              <button className="bg-[#918F84] text-white px-8 py-3 rounded-full font-semibold text-[16px] transition-opacity cursor-not-allowed">
                Ask
              </button>
            </div>
          </div>
        </div>

        {/* Prompts Slider */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROMPTS.map((card) => (
              <div 
                key={card.id}
                className="flex-shrink-0 w-[85%] md:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="ai-card h-full flex flex-col min-h-[320px] bg-white border border-black/10 rounded-[24px] p-8 hover:scale-[1.02] transition-transform duration-300 shadow-sm">
                  <h3 className="text-[#0A0505] font-mono font-bold text-[18px] mb-4 uppercase tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#0A0505] font-mono text-[15px] leading-[1.6] flex-grow">
                    &quot;{card.prompt}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-4">
            {[0, 1].map((dot) => (
              <button
                key={dot}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const scrollAmount = dot * scrollContainerRef.current.clientWidth;
                    scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === dot ? "bg-[#0A0505] scale-125" : "bg-[#0A0505]/20"
                }`}
                aria-label={`Go to prompt slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-[#918F84] text-[14px] font-body leading-relaxed">
            By clicking a prompt or using the tool, you will be taken to a separate, external website. AI-generated culinary guidance is for informational purposes only. Consult with regional healthcare providers for dietary changes during religious observance.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .ai-card {
           /* Matches global.css ai-card token */
           border: 1px solid rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}