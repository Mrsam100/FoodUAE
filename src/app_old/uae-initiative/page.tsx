"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

export default function UAEInitiativePage() {
  const { t, dir } = useLanguage();

  const strategies = [
    {
      title: dir === 'rtl' ? "وضع الملصقات الغذائية" : "Nutritional Labelling",
      description: dir === 'rtl' ? "تنفيذ نظام ملصقات واضح لجميع الأطعمة المعبأة المباعة في منافذ البيع بالإمارات." : "Implementing a clear, traffic-light style labelling system for all packaged foods sold in UAE outlets."
    },
    {
      title: dir === 'rtl' ? "تطبيق الضريبة الانتقائية" : "Excise Tax Implementation",
      description: dir === 'rtl' ? "ضريبة 50% على المشروبات الغازية و100% على مشروبات الطاقة للحد من استهلاك السكر العالي." : "A 50% tax on carbonated drinks and 100% tax on energy drinks to discourage high sugar consumption."
    },
    {
      title: dir === 'rtl' ? "إصلاح المشتريات العامة" : "Public Procurement Reform",
      description: dir === 'rtl' ? "مراجعة مشتريات الأغذية الحكومية والمدرسية لإعطاء الأولوية للمنتجات المحلية الطازجة." : "Revising government and school food procurement to prioritize local, fresh produce over imported processed goods."
    },
    {
      title: dir === 'rtl' ? "دعم التكنولوجيا الزراعية" : "Agri-Tech Support",
      description: dir === 'rtl' ? "الاستثمار في الزراعة الرأسية والزراعة الصحراوية المستدامة لضمان الوصول للخضروات الطازجة." : "Investing in vertical farming and sustainable desert agriculture to ensure year-round access to fresh greens."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0202] text-white selection:bg-[#E0F5A1] selection:text-[#0A0202]">
      <Header />
      
      <section className="pt-40 pb-32 px-8 overflow-hidden relative">
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#E0F5A1]/30 bg-[#E0F5A1]/10 text-[#E0F5A1] text-xs font-bold uppercase tracking-widest"
                >
                   {dir === 'rtl' ? "مبادرة عامة" : "Public Initiative"}
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[clamp(48px,8vw,110px)] font-black tracking-[-0.04em] leading-[0.85] mb-8 uppercase"
                >
                  {dir === 'rtl' ? <>استراتيجية<br /><span className="text-[#E0F5A1]">الإمارات</span></> : <>UAE National<br /><span className="text-[#E0F5A1]">Strategy</span></>}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[20px] md:text-[24px] font-medium leading-relaxed mb-12 text-[#8E8E8E]"
                >
                  {dir === 'rtl' ? "بالتوازي مع الاستراتيجية الوطنية لجودة الحياة 2031، تهدف مبادرتنا لجعل الإمارات من أكثر الدول صحة عالمياً." : "Aligned with the UAE National Strategy for Wellbeing 2031, our initiative aims to make the UAE one of the healthiest nations globally."}
                </motion.p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {/* Overlapping Content Effect */}
                    {strategies.map((s, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className={`p-8 rounded-[48px] bg-[#111] border border-white/5 hover:border-[#E0F5A1]/30 transition-all group overflow-hidden ${i % 2 !== 0 ? 'md:mt-12' : ''}`}
                      >
                         <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F5A1] opacity-[0.03] group-hover:opacity-[0.1] blur-3xl transition-opacity" />
                         <span className="text-[#E0F5A1] font-black text-xs uppercase tracking-widest mb-4 block">Strategy 0{i+1}</span>
                         <h3 className="text-white font-black text-[24px] mb-4 uppercase group-hover:text-[#E0F5A1] transition-colors">{s.title}</h3>
                         <p className="text-[#8E8E8E] leading-relaxed text-[18px] font-medium group-hover:text-white/80 transition-colors">{s.description}</p>
                      </motion.div>
                    ))}
                  </div>
             </div>
             <div className="flex-1 relative w-full lg:sticky lg:top-40">
                <div className="aspect-square bg-[#E0F5A1] rounded-[60px] relative overflow-hidden flex items-center justify-center shadow-[0_40px_100px_rgba(224,245,161,0.15)]">
                   <span className="absolute text-[#0A0202] text-[150px] font-black opacity-[0.05] rotate-90 whitespace-nowrap select-none">DUBAI VISION 2031</span>
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                      <p className="text-[#0A0202] text-[36px] md:text-[42px] font-black leading-tight tracking-tighter uppercase italic">
                        {dir === 'rtl' ? "\"صحتك هي أعظم استثمار يمكنك القيام به من أجل مستقبل أمتنا.\"" : "\"Your health is the greatest investment you can make for our nation's future.\""}
                      </p>
                      <div className="mt-8 h-1 w-20 bg-[#0A0202]" />
                      <p className="mt-4 text-[#0A0202] font-black uppercase tracking-[0.2em] text-[12px]">Lycoris Health Initiative</p>
                   </div>
                </div>
                
                {/* Overlapping Floating Element */}
                <div className="absolute -bottom-10 -left-10 bg-[#0A0202] border border-white/10 p-8 rounded-3xl shadow-2xl max-w-[250px] hidden md:block z-20">
                   <p className="text-white font-bold text-[18px]">100%</p>
                   <p className="text-[#8E8E8E] text-[14px]">Commitment to a healthier UAE</p>
                </div>
             </div>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E0F5A1] opacity-[0.03] blur-[150px] -translate-x-1/2" />
      </section>

      <Footer />
    </main>
  );
}
