"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

export default function RegionalImpact() {
  const { t, dir } = useLanguage();

  const STATS = [
    {
      label: dir === 'rtl' ? "السكري ومقدمات السكري" : "Diabetes & Prediabetes",
      value: "20%",
      description: dir === 'rtl' ? "الانتشار الحالي في سكان الإمارات، نتيجة مباشرة لبيئات الغذاء عالية المعالجة." : "The current prevalence in the UAE population, a direct result of ultra-processed food environments."
    },
    {
      label: dir === 'rtl' ? "معدل السمنة في الشرق الأوسط" : "MENA Obesity Rate",
      value: "33%",
      description: dir === 'rtl' ? "من بين أعلى المعدلات عالمياً، مدفوعاً بالكربوهيدرات المكررة وأنماط الحياة المستوردة." : "One of the highest globally, driven by refined carbohydrates and sedentary imported lifestyles."
    },
    {
      label: dir === 'rtl' ? "الإنفاق الإقليمي على الصحة" : "Regional Healthcare Spend",
      value: "$100B+",
      description: dir === 'rtl' ? "سنوياً في دول مجلس التعاون الخليجي، لعلاج الأمراض المزمنة المرتبطة بالتغذية." : "Annually across GCC, primarily treating nutrition-related chronic diseases."
    },
    {
      label: dir === 'rtl' ? "التحول الأيضي" : "Metabolic Transformation",
      value: "60%+",
      description: dir === 'rtl' ? "انخفاض محتمل في مخاطر الأمراض المزمنة من خلال العودة إلى الأطعمة الكاملة." : "Potential reduction in chronic disease risks through a return to ancestral whole foods."
    }
  ];

  return (
    <section className="bg-[#E0F5A1] py-16 md:py-24 lg:py-40 overflow-hidden relative border-y border-black/5">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 lg:mb-24 gap-8 md:gap-12">
          <div className="max-w-[700px]">
             <h2 className="text-[clamp(32px,6vw,96px)] font-bold text-[#0A0202] leading-[0.85] tracking-[-0.04em] mb-8 uppercase">
               {dir === 'rtl' ? "واقع المنطقة" : "Regional Reality Check"}
             </h2>
             <p className="text-[20px] md:text-[24px] text-[#0A0202]/70 font-medium leading-relaxed max-w-[500px]">
                {dir === 'rtl' ? "الإمارات والشرق الأوسط على مفترق طرق. يمكننا الاستمرار في استيراد المرض أو استعادة حيويتنا." : "The UAE and MENA region are at a crossroads. We can continue importing disease or we can reclaim our vitality."}
             </p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl max-w-[400px]">
             <p className="text-[#0A0202] text-[18px] leading-relaxed font-bold italic">
               {dir === 'rtl' ? "\"يجب أن نعود إلى الطعام الذي بنى أجدادنا. الغذاء الحقيقي ليس رفاهية، بل هو حقنا المكتسب.\"" : "\"We must return to the food that built our ancestors. Real food is not a luxury, it's our birthright.\""}
             </p>
             <p className="text-[#0A0202]/50 text-[14px] mt-4 font-bold uppercase tracking-widest">— Lycoris Health Initiative</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-4 md:p-6 lg:p-10 rounded-[24px] md:rounded-[32px] lg:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/[0.03] group hover:bg-[#0A0202] transition-colors duration-500"
            >
              <h3 className="text-[36px] md:text-[48px] lg:text-[64px] font-black text-[#D00202] leading-none mb-4 group-hover:text-[#E0F5A1] transition-colors">{stat.value}</h3>
              <p className="text-[20px] font-bold text-[#0A0202] mb-4 leading-tight group-hover:text-white transition-colors">{stat.label}</p>
              <p className="text-[#4A4A4A] text-[16px] leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none hidden lg:block">
        <span className="text-[500px] font-black whitespace-nowrap leading-none">DUBAI UAE MENA HEALTH</span>
      </div>
    </section>
  );
}
