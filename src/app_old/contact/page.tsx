"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t, dir } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0A0202] text-white selection:bg-[#E0F5A1] selection:text-[#0A0202]">
      <Header />
      
      <section className="pt-48 pb-32 px-8 overflow-hidden relative">
        <div className="container mx-auto max-w-[1000px] text-center relative z-10">
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-[clamp(48px,10vw,140px)] font-black tracking-[-0.05em] leading-[0.8] mb-8 uppercase"
           >
             {dir === 'rtl' ? <>انضم إلى<br /><span className="text-[#E0F5A1]">الحركة</span></> : <>Join the<br /><span className="text-[#E0F5A1]">Movement</span></>}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-[20px] md:text-[24px] text-[#8E8E8E] leading-relaxed mb-16 max-w-[700px] mx-auto font-medium"
           >
              {dir === 'rtl' ? "تواصل مع استوديوهات ليكوريس للتصميم لمعرفة المزيد عن مبادراتنا الصحية الإقليمية أو للتعاون." : "Reach out to Lycoris Design Studios to learn more about our regional health initiatives or to collaborate."}
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="bg-[#111] rounded-[60px] p-12 md:p-20 text-left border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0F5A1] opacity-[0.03] blur-3xl pointer-events-none" />
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                 <div className="flex flex-col gap-3">
                    <label className="text-[14px] font-black uppercase tracking-[0.2em] text-[#E0F5A1] ml-2">
                      {dir === 'rtl' ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <input 
                      type="text" 
                      placeholder={dir === 'rtl' ? "اسمك" : "Your Name"} 
                      className="bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-[18px] w-full focus:ring-2 focus:ring-[#E0F5A1] transition-all outline-none text-white font-medium"
                    />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[14px] font-black uppercase tracking-[0.2em] text-[#E0F5A1] ml-2">
                      {dir === 'rtl' ? "البريد الإلكتروني" : "Email Address"}
                    </label>
                    <input 
                      type="email" 
                      placeholder={dir === 'rtl' ? "بريدك" : "Your Email"} 
                      className="bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-[18px] w-full focus:ring-2 focus:ring-[#E0F5A1] transition-all outline-none text-white font-medium"
                    />
                 </div>
                 <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-[14px] font-black uppercase tracking-[0.2em] text-[#E0F5A1] ml-2">
                      {dir === 'rtl' ? "الرسالة" : "Message"}
                    </label>
                    <textarea 
                      rows={6} 
                      placeholder={dir === 'rtl' ? "أخبرنا كيف يمكننا التعاون..." : "Tell us how we can collaborate..."} 
                      className="bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-[18px] w-full focus:ring-2 focus:ring-[#E0F5A1] transition-all outline-none text-white resize-none font-medium"
                    />
                 </div>
                 <button className="md:col-span-2 bg-[#E0F5A1] text-[#0A0202] px-12 py-6 rounded-3xl font-black text-[20px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(224,245,161,0.2)]">
                   {dir === 'rtl' ? "إرسال الرسالة" : "Send Message"}
                 </button>
              </form>
           </motion.div>

           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 text-[#8E8E8E] text-[18px] font-bold uppercase tracking-[0.3em]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-4"
              >
                 <span className="text-[#E0F5A1] text-[14px] font-black">{dir === 'rtl' ? "تفضل بزيارتنا" : "Visit Us"}</span>
                 <p className="text-white text-[22px] font-black tracking-tight normal-case">
                   Lycoris Design Studios<br />Dubai Design District (D3), UAE
                 </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-4"
              >
                 <span className="text-[#E0F5A1] text-[14px] font-black">{dir === 'rtl' ? "الاستفسارات" : "Inquiries"}</span>
                 <p className="text-white text-[22px] font-black tracking-tight normal-case">
                   hello@thelycoris.com<br />thelycoris.com
                 </p>
              </motion.div>
           </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#E0F5A1] opacity-[0.03] blur-[200px] translate-x-1/2 translate-y-1/2" />
      </section>

      <Footer />
    </main>
  );
}
