import React from 'react';
import { Search } from 'lucide-react';

const promptCards = [
  {
    title: "Overwhelmed Parent on a Budget",
    text: "How can I meal prep for a family of four using only REAL FOOD while spending less than $100 a week? I need quick recipes that my kids will actually eat."
  },
  {
    title: "Junk Food Habit I Can't Break",
    text: "How do I switch to REAL FOOD when junk food is the only thing that feels satisfying? I live on chips, cookies, candy, and Pop-Tarts. I'm a student on a budget and I can't imagine giving it up without feeling deprived."
  },
  {
    title: "Food Desert + Fixed Income",
    text: "How are we supposed to eat REAL FOOD when the only nearby option is a gas station and we're on a fixed income? I feel guilty about all the packaged snacks, but I don't know how to access REAL FOOD where we live."
  },
  {
    title: "School Lunch Guilt",
    text: "My child eats school breakfast and lunch and it doesn't feel like REAL FOOD. I don't have time to pack meals every day. Am I failing them? Is there any realistic way to get more REAL FOOD into their day?"
  },
  {
    title: "Pregnant and Barely Functioning",
    text: "I'm exhausted and nauseous. What are the best REAL FOOD sources of folate and iron that don't require standing over a stove for an hour?"
  },
  {
    title: "Working Two Jobs, No Time",
    text: "I have 15 minutes between shifts to eat. What REAL FOOD options can I grab that don't come from a drive-thru and will actually keep me full?"
  }
];

export default function AIAnswers() {
  return (
    <section id="real-answers" className="section-light py-24 md:py-40 overflow-hidden">
      <div className="container px-6 md:px-10">
        {/* Header */}
        <div className="max-w-[1000px] mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-[48px] md:text-[84px] font-bold tracking-[-0.04em] leading-[1.0] text-[#0A0404] mb-8">
            Use AI to get real answers about real food
          </h2>
          <p className="body-text text-[#8E8E93] max-w-[800px] mx-auto text-[18px] md:text-[24px] leading-[1.6]">
            From the guidelines to your kitchen. Ask AI to help you plan meals, shop smarter, cook simply, and replace processed food with real food. Not sure where to start? Use one of these example prompts. This will take you to a separate, external web site.
          </p>
        </div>

        {/* Search Input Field */}
        <div className="max-w-[760px] mx-auto mb-20 md:mb-32">
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-[#8E8E93]" />
            </div>
            <input
              type="text"
              placeholder="Ask AI about real food..."
              className="w-full bg-[#F7F5E9] border border-[rgba(10,4,4,0.1)] rounded-full py-6 pl-16 pr-24 text-[18px] focus:outline-none focus:ring-2 focus:ring-[#DB0000] transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#B5B2A1] text-white px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#0A0404] transition-colors">
              Ask
            </button>
          </div>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x">
            {promptCards.map((card, index) => (
              <div 
                key={index}
                className="ai-prompt-card min-w-full md:min-w-[400px] flex-1 snap-center bg-transparent border border-[rgba(10,4,4,0.1)] hover:bg-white/50 transition-colors duration-300"
              >
                <h4 className="font-mono text-[14px] uppercase tracking-wider mb-6 text-[#0A0404]">
                  {card.title}
                </h4>
                <p className="font-mono text-[14px] leading-[1.6] text-[#444444] line-clamp-6">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots (Visual Only as per Screenshot) */}
          <div className="flex justify-center gap-3 mt-8">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0A0404]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D1CFBF]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D1CFBF]"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}