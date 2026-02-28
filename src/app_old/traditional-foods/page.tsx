"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FOOD_ASSETS } from '@/lib/food-assets';

export default function TraditionalFoodsPage() {
  const { t, dir } = useLanguage();

  const foods = [
    {
      name: dir === 'rtl' ? "التمور وحليب الإبل" : "Dates & Camel Milk",
      benefit: dir === 'rtl' ? "فيتامين سي وألياف" : "Vitamin C & Fiber",
      description: dir === 'rtl' ? "ملف غذائي متكامل للبقاء في الصحراء، غني بالمعادن الأساسية والطاقة الطبيعية." : "A complete nutritional profile for desert survival, rich in essential minerals and natural energy.",
      image: FOOD_ASSETS.milk
    },
    {
      name: dir === 'rtl' ? "أسماك الخليج الطازجة" : "Fresh Gulf Fish",
      benefit: dir === 'rtl' ? "أوميغا 3" : "Omega-3 Fatty Acids",
      description: dir === 'rtl' ? "الهامور والشعري والكنعد توفر الدهون الحيوية لصحة القلب والذكاء." : "Hamour, Sheri, and Kingfish provide vital fats for heart and cognitive health.",
      image: FOOD_ASSETS.salmon
    },
    {
      name: dir === 'rtl' ? "عسل السدر" : "Sidr Honey",
      benefit: dir === 'rtl' ? "دعم المناعة" : "Immune Support",
      description: dir === 'rtl' ? "من أثمن أنواع العسل في العالم، مع خصائص مضادة للبكتيريا قوية جداً." : "One of the most prized honeys in the world, with potent antibacterial properties.",
      image: FOOD_ASSETS.butter
    },
    {
      name: dir === 'rtl' ? "الحبوب الكاملة التقليدية" : "Traditional Whole Grains",
      benefit: dir === 'rtl' ? "طاقة مستدامة" : "Slow Release Energy",
      description: dir === 'rtl' ? "الهريس والجريش المصنوعان من القمح الكامل يوفران تغذية دائمة دون ارتفاع السكر." : "Harees and Jareesh made from whole wheat provide lasting nourishment without sugar spikes.",
      image: FOOD_ASSETS.steak
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0202] text-white selection:bg-[#E0F5A1] selection:text-[#0A0202]">
      <Header />
      
      <section className="pt-48 pb-32 px-8">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[clamp(48px,10vw,140px)] font-black tracking-[-0.04em] leading-[0.8] mb-16 text-center uppercase"
          >
            {dir === 'rtl' ? <>أغذية خارقة<br /><span className="text-[#E0F5A1]">موروثة</span></> : <>Ancestral<br /><span className="text-[#E0F5A1]">Superfoods</span></>}
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {foods.map((food, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col group bg-[#111] rounded-[48px] overflow-hidden border border-white/5 hover:border-[#E0F5A1]/20 transition-all shadow-2xl"
              >
                 <div className="h-[320px] relative overflow-hidden bg-white/5">
                    <Image 
                      src={food.image} 
                      alt={food.name} 
                      fill 
                      className="object-contain p-8 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#E0F5A1] text-[#0A0202] text-[12px] font-black uppercase tracking-widest shadow-xl">
                       {food.benefit}
                    </div>
                 </div>
                 <div className="p-12 flex flex-col gap-5 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#111] border-t border-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0F5A1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                       </svg>
                    </div>
                    <h3 className="text-[28px] md:text-[32px] font-black text-white leading-tight tracking-tight">{food.name}</h3>
                    <p className="text-[#8E8E8E] leading-relaxed text-[18px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {food.description}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
