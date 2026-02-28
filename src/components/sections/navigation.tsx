"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * A floating navigation pill component that mimics the reference site's dot-based navigation.
 * Government-specific banners and branding have been removed.
 * Links implemented: 'Real Food', 'MENA Health Stats', 'The Solution', 'Food Pyramid', 'AI Tool', and 'FAQs'.
 */

const NAV_LINKS = [
  { id: "intro", label: "Real Food" },
  { id: "problem", label: "MENA Health Stats" },
  { id: "solution", label: "The Solution" },
  { id: "pyramid", label: "Food Pyramid" },
  { id: "ai-tool", label: "AI Tool" },
  { id: "faqs", label: "FAQs" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      // Simple intersection logic for active dot
      const sectionElements = NAV_LINKS.map(link => document.getElementById(link.id));
      
      let currentSection = "intro";
      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
        <div 
          className={cn(
            "flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300",
            activeSection === "pyramid" || activeSection === "ai-tool" || activeSection === "faqs" 
              ? "bg-black/80 text-white" 
              : "bg-white/10 text-white"
          )}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group relative flex items-center justify-center p-2 transition-transform active:scale-95"
              aria-label={link.label}
            >
              {/* Tooltip Label */}
              <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="bg-white text-black text-[12px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
                  {link.label}
                </span>
              </div>

              {/* Dot */}
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white/20",
                  activeSection === link.id 
                    ? "bg-[#E7FFAC] scale-125 shadow-[0_0_10px_rgba(231,255,172,0.8)]" 
                    : "bg-white/40 hover:bg-white/70"
                )}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Sticky Navigation Pill */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-[400px]">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full h-14 flex items-center justify-between px-6 shadow-2xl">
          <div className="text-[14px] font-bold tracking-tight text-white uppercase">
            {NAV_LINKS.find(l => l.id === activeSection)?.label || "Menu"}
          </div>
          
          <div className="flex gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "p-1.5 rounded-full transition-all",
                )}
                aria-label={link.label}
              >
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeSection === link.id
                    ? "bg-[#E7FFAC] scale-150"
                    : "bg-white/20"
                )} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <style jsx global>{`
        /* Replicating the distinct pill style from globals or specific animations */
        .nav-label-pop {
          animation: popIn 0.3s ease-out forwards;
        }

        @keyframes popIn {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}