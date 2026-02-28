"use client";

import React from 'react';
import { Search } from 'lucide-react';

const AIResources = () => {
  const prompts = [
    {
      title: "Overwhelmed Parent on a Budget",
      content: "I'm a parent of three on a tight budget. We usually rely on boxed mac and cheese and chicken nuggets because they are cheap and fast. How can I start incorporating REAL FOOD without spending more money or hours in the kitchen?"
    },
    {
      title: "School Lunch Guilt",
      content: "My child eats school breakfast and lunch and it doesn't feel like REAL FOOD. I don't have time to pack meals every day. Am I failing them? Is there any realistic way to get more REAL FOOD into their day?"
    },
    {
      title: "Pregnant and Barely Functioning",
      content: "I'm pregnant, nauseous, exhausted, and living off crackers — but I want to eat REAL FOOD for my baby. What actually matters in pregnancy? What REAL FOOD options are realistic when you're this tired?"
    }
  ];

  return (
    <section className="bg-[#F5F5E9] text-[#0A0202] py-16 md:py-32 lg:py-[160px] font-display overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1240px]">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(48px,6vw,80px)] font-bold leading-[1.0] tracking-[-0.02em] mb-8 max-w-[900px] mx-auto">
            Use AI to get real answers about real food
          </h2>
          <div className="max-w-[760px] mx-auto text-[clamp(18px,1.5vw,22px)] opacity-60 leading-[1.5] space-y-4">
            <p>
              From the guidelines to your kitchen. Ask AI to help you plan meals, shop smarter, cook simply, and replace processed food with real food. Not sure where to start? Use one of these example prompts. This will take you to a separate, external web site.
            </p>
          </div>
        </div>

        {/* AI Input Bar */}
        <div className="max-w-[800px] mx-auto mb-24 relative">
          <div className="ai-input-wrapper flex items-center bg-white rounded-full h-[64px] pl-6 pr-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[rgba(10,2,2,0.1)]">
            <Search className="w-5 h-5 text-[#8E8E8E] mr-3" />
            <input 
              type="text" 
              placeholder="Ask AI about real food..." 
              className="flex-1 bg-transparent border-none outline-none text-[16px] md:text-[18px] placeholder:text-[#8E8E8E] font-medium"
            />
            <button className="bg-[#B5B5A5] text-white px-8 h-[48px] rounded-full text-[16px] font-semibold hover:bg-[#a0a090] transition-colors cursor-pointer">
              Ask
            </button>
          </div>
        </div>

        {/* Prompt Cards Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prompts.map((prompt, index) => (
            <div 
              key={index} 
              className="bg-transparent border border-[rgba(10,2,2,0.1)] rounded-[32px] p-4 md:p-6 lg:p-8 min-h-[320px] flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <h3 className="text-[20px] font-bold mb-6 group-hover:text-primary transition-colors">
                {prompt.title}
              </h3>
              <div className="font-mono text-[14px] leading-[1.6] opacity-70 text-justify">
                {prompt.content}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#0A0202]"></div>
          <div className="w-2 h-2 rounded-full bg-[#0A0202]/20"></div>
          <div className="w-2 h-2 rounded-full bg-[#0A0202]/20"></div>
        </div>
      </div>

      <style jsx>{`
        .ai-input-wrapper:focus-within {
          border-color: #D00202;
          box-shadow: 0 4px 25px rgba(208, 2, 2, 0.1);
        }
      `}</style>
    </section>
  );
};

export default AIResources;