"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { FOOD_ASSETS } from '@/lib/food-assets';

const FOOD_ITEMS = [
  {
    id: "avocado",
    label: "Real Fat",
    image: FOOD_ASSETS.avocado,
  },
  {
    id: "orange",
    label: "Fresh Citrus",
    image: FOOD_ASSETS.orange,
  },
  {
    id: "apple",
    label: "Real Fruit",
    image: FOOD_ASSETS.apple,
  },
  {
    id: "milk",
    label: "Camel Milk",
    image: FOOD_ASSETS.milk,
  },
  {
    id: "pineapple",
    label: "Tropical Gold",
    image: FOOD_ASSETS.pineapple,
  },
  {
    id: "strawberry",
    label: "Fresh Berries",
    image: FOOD_ASSETS.strawberry,
  },
];

export default function Footer() {
  const { t, dir, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FOOD_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const FOOTER_LINKS = [
    {
      title: t("footer.explore"),
      links: [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.uae"), href: "/uae-initiative" },
        { label: t("nav.traditional"), href: "/traditional-foods" },
        { label: t("nav.contact"), href: "/contact" },
      ]
    },
    {
      title: t("footer.community"),
      links: [
        { label: "Public Forum", href: "" },
        { label: "Local Initiatives", href: "/uae-initiative" },
        { label: "Regional Events", href: "" },
        { label: "Health Workshops", href: "" },
        { label: "Success Stories", href: "" },
      ]
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.terms"), href: "/terms" },
        { label: t("footer.privacy"), href: "/privacy" },
        { label: "Cookie Policy", href: "" },
        { label: "Accessibility", href: "" },
        { label: "Contact Admin", href: "/contact" },
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#0A0202] text-white">
      {/* Dynamic CTA Section */}
      <section className="bg-[#0A0202] text-white min-h-[400px] md:min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-16 md:py-24">
        <div className="z-10 flex flex-col items-center gap-12">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[clamp(36px,10vw,160px)] font-[900] tracking-[-0.06em] leading-none text-center uppercase"
          >
            {dir === "rtl" ? "كل طعاماً حقيقياً" : "Eat Real"}
          </motion.h3>

          {/* Food Item Display */}
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
             <AnimatePresence mode="wait">
              <motion.div
                key={FOOD_ITEMS[currentIndex].id}
                initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 15, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute flex flex-col items-center"
              >
                <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-8 drop-shadow-[0_20px_50px_rgba(224,245,161,0.25)]">
                  <Image
                    src={FOOD_ITEMS[currentIndex].image}
                    alt={FOOD_ITEMS[currentIndex].label}
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[32px] md:text-[48px] font-[800] tracking-tight text-[#E0F5A1] leading-none text-center uppercase"
                >
                  {language === 'ar' ? (
                    currentIndex === 0 ? "سمن" :
                    currentIndex === 1 ? "سمك الخليج" :
                    currentIndex === 2 ? "دهون حقيقية" :
                    currentIndex === 3 ? "تمور ممتازة" :
                    currentIndex === 4 ? "حليب إبل" : "لحم حقيقي"
                  ) : FOOD_ITEMS[currentIndex].label}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,245,161,0.2)_0%,transparent_70%)]" />
        </div>
      </section>

      {/* Structured Links Section */}
      <section className="bg-[#0D0D0D] py-16 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-24">
            <div className="lg:col-span-2 flex flex-col gap-8">
               <span className="text-[32px] font-[900] tracking-tighter text-white">REAL FOOD MENA</span>
               <p className="text-[#8E8E8E] text-[18px] leading-relaxed max-w-[400px]">
                  {t("footer.mission")}
               </p>
               <div className="flex flex-col gap-2">
                 <p className="text-white/40 text-xs font-bold uppercase tracking-widest">A Public Initiative By</p>
                 <a href="http://thelycoris.com/" target="_blank" rel="noopener noreferrer" className="text-[#E0F5A1] font-black text-[18px] uppercase tracking-widest hover:underline transition-all hover:tracking-[0.1em]">
                   {t("footer.branding")}
                 </a>
               </div>
            </div>

            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="flex flex-col gap-8">
                 <h4 className="text-[14px] font-black uppercase tracking-widest text-[#E0F5A1] border-b border-[#E0F5A1]/20 pb-4">{group.title}</h4>
                 <div className="flex flex-col gap-5 text-[#8E8E8E] text-[18px]">
                    {group.links.map((link) => (
                      link.href ? (
                        <Link key={link.label} href={link.href} className="hover:text-white transition-all hover:translate-x-2">{link.label}</Link>
                      ) : (
                        <span key={link.label} className="text-[#8E8E8E]/50 cursor-default">{link.label}</span>
                      )
                    ))}
                 </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-[#8E8E8E] text-[15px] font-medium">
               <span className="text-white flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-[#E0F5A1] animate-pulse" />
                 {t("footer.dubai_office")}
               </span>
               <span className="text-[#8E8E8E]/30 hidden md:block">|</span>
               <span className="text-white flex items-center gap-2">
                 {t("footer.mena_region")}
               </span>
            </div>
            <p className="text-[#8E8E8E] text-[12px] uppercase tracking-[0.3em] font-black text-center md:text-right">
              {t("footer.rights")}
            </p>
          </div>
        </div>
        
        {/* Background Subtle Elements */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E0F5A1] opacity-[0.02] blur-[150px] pointer-events-none rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E0F5A1] opacity-[0.02] blur-[150px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      <style jsx>{`
        [dir="rtl"] .hover\:translate-x-2:hover {
          transform: translateX(-0.5rem);
        }
      `}</style>
    </footer>
  );
}
