"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const NAV_ITEMS = [
    { label: t("nav.home"), id: "intro", path: "/" },
    { label: t("nav.about"), id: "about", path: "/about" },
    { label: t("nav.uae"), id: "uae", path: "/uae-initiative" },
    { label: t("nav.traditional"), id: "traditional", path: "/traditional-foods" },
    { label: t("nav.contact"), id: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      {/* Desktop Navigation Pill */}
      <nav className="hidden md:flex pointer-events-auto items-center gap-4" aria-label="Main navigation">
        <div 
          className={cn(
            "glass-nav flex items-center px-2 py-2 transition-all duration-500 gap-1",
            "bg-[#0A0202]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full",
            scrolled ? "scale-95" : "scale-100"
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  if (pathname === "/" && item.path === "/") {
                    e.preventDefault();
                    scrollToSection("intro");
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "relative flex items-center h-10 px-6 rounded-full text-sm font-bold transition-all duration-300 group overflow-hidden uppercase tracking-widest",
                  isActive 
                    ? "bg-[#E0F5A1] text-[#0A0202]" 
                    : "text-white/60 hover:text-white"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {!isActive && (
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
          className={cn(
            "pointer-events-auto flex items-center justify-center h-12 w-12 rounded-full",
            "bg-[#0A0202]/80 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:bg-white/10 transition-all",
            scrolled ? "scale-95" : "scale-100"
          )}
        >
          <span className="text-xs font-bold uppercase">{language === "en" ? "AR" : "EN"}</span>
        </button>
      </nav>

      {/* Mobile Navigation Pill */}
      <nav className="md:hidden w-full max-w-[calc(100vw-3rem)] pointer-events-auto" aria-label="Mobile navigation">
        <div className="relative">
          <div 
            className={cn(
              "glass-nav flex items-center justify-between px-6 py-4 transition-all duration-500",
              "bg-[#0A0202]/90 backdrop-blur-2xl border border-white/10 shadow-2xl",
              isMobileMenuOpen ? "rounded-[32px]" : "rounded-full"
            )}
          >
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white transition-transform active:scale-90"
              >
                <span className="text-xs font-bold">{language === "en" ? "AR" : "EN"}</span>
              </button>
              <span className="text-white font-bold tracking-tight uppercase text-[12px]">
                {NAV_ITEMS.find(i => i.path === pathname)?.label || "Menu"}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div 
            className={cn(
              "absolute top-full left-0 right-0 mt-3 p-2 bg-[#0A0202]/95 backdrop-blur-3xl border border-white/10 rounded-[32px] shadow-2xl transition-all duration-500 origin-top overflow-hidden max-h-[60vh] overflow-y-auto",
              isMobileMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
            )}
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center w-full px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all",
                    pathname === item.path 
                      ? "bg-[#E0F5A1] text-[#0A0202]" 
                      : "text-white/70 active:bg-white/10 active:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .glass-nav {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
        }
        [dir="rtl"] .glass-nav {
          direction: rtl;
        }
      `}</style>
    </header>
  );
}
