"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";
import { FOOD_ASSETS } from '@/lib/food-assets';

export default function AboutPage() {
  const { t, dir } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0A0202] text-white selection:bg-[#E0F5A1] selection:text-[#0A0202]">
      <Header />
      
      <section className="pt-48 pb-32 px-8 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[clamp(48px,10vw,140px)] font-black tracking-[-0.05em] leading-[0.8] mb-16 uppercase"
          >
            {dir === 'rtl' ? <>مبادرة<br /><span className="text-[#E0F5A1]">ليكوريس</span></> : <>The Lycoris<br /><span className="text-[#E0F5A1]">Initiative</span></>}
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
                <p className="text-[24px] md:text-[28px] font-black leading-tight mb-10 tracking-tight text-white/90">
                  {dir === 'rtl' ? "استوديوهات ليكوريس للتصميم ليست مجرد وكالة إبداعية، بل هي محفز للتحول الصحي الإقليمي." : "Lycoris Design Studios is not just a creative agency; we are a catalyst for regional health transformation."}
                </p>
                <p className="text-[#8E8E8E] text-[20px] leading-relaxed mb-10 font-medium">
                  {dir === 'rtl' ? "أُطلقت مبادرة الغذاء الحقيقي في دبي، وهي جهد عام لمعالجة أزمة التمثيل الغذائي التي تؤثر على مجتمعاتنا. نحن نؤمن أنه من خلال الوعي القائم على التصميم والعودة إلى التغذية الموروثة، يمكننا عكس اتجاهات السمنة والسكري في الإمارات." : "Launched in Dubai, the Real Food MENA initiative is a public effort to address the metabolic crisis affecting our communities. We believe that through design-led awareness and a return to ancestral nutrition, we can reverse the trends of obesity and diabetes in the UAE."}
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#111] p-10 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0F5A1] opacity-[0.05] blur-3xl group-hover:opacity-[0.1] transition-opacity" />
                   <h3 className="text-[#E0F5A1] font-black uppercase tracking-[0.3em] text-[12px] mb-6">Our Mission</h3>
                   <p className="text-white text-[22px] font-bold leading-tight">
                     {dir === 'rtl' ? "استعادة الثقافة الصحية والحيوية الأيضية من خلال الترويج للأطعمة الحقيقية وغير المصنعة والغنية بالعناصر الغذائية." : "To restore health literacy and metabolic vitality through the promotion of real, unprocessed, nutrient-dense foods."}
                   </p>
                </motion.div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-white/10 group shadow-[0_40px_100px_rgba(224,245,161,0.1)]"
             >
                <Image 
                  src={FOOD_ASSETS.foodSpread}
                  alt="About Lycoris" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0202] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12 z-10">
                   <p className="text-[#E0F5A1] font-black uppercase tracking-widest text-[12px] mb-2">Based in Dubai</p>
                   <p className="text-white font-bold text-[24px]">Innovating Regional Health Since 2026</p>
                </div>
             </motion.div>
          </div>
        </div>
        
        {/* Background Subtle Text */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 rotate-90 pointer-events-none opacity-[0.02]">
           <span className="text-[300px] font-black whitespace-nowrap leading-none text-white uppercase select-none">DESIGN FOR HEALTH</span>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#E0F5A1] text-[#0A0202] rounded-[100px] mx-4 md:mx-8 mb-32 shadow-2xl overflow-hidden relative">
         <div className="container mx-auto max-w-[1200px] relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(48px,6vw,96px)] font-black tracking-[-0.05em] mb-16 leading-[0.85] uppercase"
            >
              Why We<br /><span className="italic">Exist</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 {
                   id: "01",
                   title: dir === 'rtl' ? "أزمة الأيض" : "Metabolic Crisis",
                   desc: dir === 'rtl' ? "تعاني الإمارات من أعلى معدلات الأمراض المرتبطة بنمط الحياة عالمياً بسبب بيئات الغذاء المصنعة." : "The UAE has some of the highest rates of lifestyle-related diseases globally due to ultra-processed food environments."
                 },
                 {
                   id: "02",
                   title: dir === 'rtl' ? "المعرفة الموروثة" : "Ancestral Knowledge",
                   desc: dir === 'rtl' ? "لقد نسينا الطعام الذي بنى أجدادنا. نحن هنا لسد الفجوة بين التقاليد والعلم الحديث." : "We have forgotten the food that built our ancestors. We are here to bridge the gap between tradition and modern science."
                 },
                 {
                   id: "03",
                   title: dir === 'rtl' ? "الوعي العام" : "Public Awareness",
                   desc: dir === 'rtl' ? "مبادرتنا هي خدمة عامة لتمكين الأفراد بالحقائق حول ما يأكلونه." : "Our initiative is a public service to empower individuals with the truth about what they eat."
                 }
               ].map((item, idx) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex flex-col gap-6 p-10 bg-white/30 backdrop-blur-xl rounded-[40px] border border-white/40 shadow-xl group hover:bg-[#0A0202] hover:text-white transition-all duration-500"
                 >
                    <span className="text-[64px] font-black text-[#D00202] leading-none group-hover:text-[#E0F5A1] transition-colors">{item.id}</span>
                    <h3 className="text-[24px] font-black uppercase tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-[#0A0202]/70 leading-relaxed text-[18px] font-medium group-hover:text-white/60 transition-colors">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-[100px] pointer-events-none rounded-full" />
      </section>

      <Footer />
    </main>
  );
}
