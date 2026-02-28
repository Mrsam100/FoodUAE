"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.uae": "UAE Strategy",
      "nav.traditional": "Traditional",
      "nav.contact": "Contact",
      "hero.title": "Real Food",
      "hero.subtitle": "A Public Initiative by Lycoris Design Studios",
      "hero.description": "Bringing ancestral health wisdom to the heart of the UAE and MENA region. Reclaiming our heritage, one meal at a time.",
      "hero.cta": "Explore the Initiative",
      "stats.title": "The Crisis in Numbers",
      "stats.desc": "Modern diets are failing our health. In the UAE and MENA, the impact is profound.",
      "heritage.title": "Traditional Wisdom",
      "heritage.desc": "Our ancestors thrived on what the land and sea provided. Dates, camel milk, and fresh seafood are our true superfoods.",
      "heritage.dubai": "The Dubai Vision",
      "heritage.dubai_desc": "Dubai is not just a city of the future, but a guardian of ancestral health secrets.",
      "footer.branding": "Lycoris Design Studios : http://thelycoris.com/",
      "footer.mission": "Revolutionizing regional health through design and data-driven initiatives.",
      "footer.links": "Quick Links",
      "footer.pages": "Pages",
      "footer.rights": "All rights reserved. Lycoris Design Studios.",
      "traditional.dates": "The Blessed Fruit",
      "traditional.camel_milk": "Desert Gold",
      "traditional.sidr_honey": "Liquid Medicine",
      "traditional.local_fish": "Gulf Bounty",
      "culture.uae": "UAE Health Culture",
      "culture.desc": "The traditional Emirati diet was naturally low in processed sugars and high in nutrient density. Let's return to our roots.",
      "culture.traditional_good": "Why Traditional is Best",
      "culture.traditional_good_desc": "Our bodies are biologically tuned to the foods of our ancestors. Fresh, local, and real.",
      "initiative.title": "A UAE-Focused Initiative",
      "initiative.desc": "This is a public initiative focused on the health of UAE citizens and residents.",
      "heritage.dates_desc": "More than a fruit, dates were the foundation of life in the UAE desert.",
      "heritage.camel_milk_desc": "Packed with immune-boosting proteins and healthy fats.",
      "heritage.sidr_desc": "Harversted from the UAE mountains, a powerful natural antibiotic.",
      "stats.diabetes": "20% Diabetes Rate",
      "stats.obesity": "33% Obesity Rate",
      "stats.prediabetes": "1 in 5 Pre-diabetic",
      "cta.learn_more": "Learn More",
      "cta.join_us": "Join the Initiative",
      "culture.dubai_title": "Dubai: A Hub for Longevity",
      "culture.dubai_desc": "Integrating modern science with ancient Bedouin health practices to create the healthiest city in the world.",
      "culture.ancestral_diet": "The Ancestral Emirati Diet",
      "culture.ancestral_diet_desc": "Sustainably sourced protein, healthy fats from nuts and seeds, and natural sweetness from dates.",
      "culture.modern_problem": "The Modern Challenge",
      "culture.modern_problem_desc": "The rapid urbanization of the UAE has brought convenience at the cost of health. We are here to bridge that gap.",
      "culture.veggies_title": "Local Agriculture",
      "culture.veggies_desc": "Modern vertical farming in Dubai is bringing back the freshness of locally grown vegetables to our tables.",
      "nav.services": "Services",
      "nav.impact": "Our Impact",
      "nav.faq": "FAQ",
      "footer.explore": "Explore",
      "footer.community": "Community",
      "footer.legal": "Legal",
      "footer.terms": "Terms of Use",
      "footer.privacy": "Privacy Policy",
      "footer.dubai_office": "Dubai Design District, Building 4",
      "footer.mena_region": "MENA Regional Hub",
      "traditional.gahwa": "Arabic Coffee (Gahwa)",
      "traditional.gahwa_desc": "A symbol of hospitality and a powerhouse of antioxidants and metabolic boosters.",
      "traditional.spices": "The Silk Road Spices",
      "traditional.spices_desc": "Turmeric, cumin, and cardamom – the anti-inflammatory foundation of our cuisine.",
      "culture.awareness": "Spreading Awareness",
      "culture.awareness_desc": "Our goal is to educate the next generation of UAE citizens on the power of real food.",
      "culture.arabic_table": "The Arabic Table",
      "culture.arabic_table_desc": "A traditional setup that prioritizes natural diversity, sharing, and nutrient-dense ingredients.",
      "culture.majlis_health": "Majlis Health Talks",
      "culture.majlis_health_desc": "Community gatherings focused on restoring the health of our families through ancestral wisdom.",
      "culture.dubai_future": "Dubai's Future is Real Food",
      "culture.dubai_future_desc": "Leading the global movement towards metabolic health from the heart of the Middle East.",
      "culture.superfood_dates": "Dates: Nature's Candy",
      "culture.superfood_dates_desc": "Rich in minerals, fiber, and slow-release energy for the modern desert dweller.",
      "culture.superfood_camel": "Camel Milk: Liquid Gold",
      "culture.superfood_camel_desc": "Naturally low in lactose and high in insulin-like proteins, a true desert miracle.",
      "culture.superfood_sidr": "Sidr Honey: Ancient Medicine",
      "culture.superfood_sidr_desc": "Harvested from the mountains of Ras Al Khaimah, a potent anti-inflammatory powerhouse."
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "عن المبادرة",
      "nav.uae": "استراتيجية الإمارات",
      "nav.traditional": "الأطعمة التقليدية",
      "nav.contact": "اتصل بنا",
      "hero.title": "الغذاء الحقيقي",
      "hero.subtitle": "مبادرة عامة من استوديوهات ليكوريس للتصميم",
      "hero.description": "جلب حكمة الصحة الموروثة إلى قلب الإمارات ومنطقة الشرق الأوسط وشمال أفريقيا. استعادة تراثنا، وجبة تلو الأخرى.",
      "hero.cta": "اكتشف المبادرة",
      "stats.title": "الأزمة في أرقام",
      "stats.desc": "الأنظمة الغذائية الحديثة تضر بصحتنا. في الإمارات والمنطقة، التأثير عميق.",
      "heritage.title": "حكمة التراث",
      "heritage.desc": "ازدهر أجدادنا بما وفرته الأرض والبحر. التمور، حليب الإبل، والأسماك الطازجة هي أطعمتنا الخارقة الحقيقية.",
      "heritage.dubai": "رؤية دبي",
      "heritage.dubai_desc": "دبي ليست مجرد مدينة للمستقبل، بل هي حارس لأسرار الصحة الموروثة.",
      "footer.branding": "استوديوهات ليكوريس للتصميم : http://thelycoris.com/",
      "footer.mission": "إحداث ثورة في الصحة الإقليمية من خلال التصميم والمبادرات القائمة على البيانات.",
      "footer.links": "روابط سريعة",
      "footer.pages": "الصفحات",
      "footer.rights": "جميع الحقوق محفوظة. استوديوهات ليكوريس للتصميم.",
      "traditional.dates": "الثمرة المباركة",
      "traditional.camel_milk": "ذهب الصحراء",
      "traditional.sidr_honey": "دواء سائل",
      "traditional.local_fish": "خيرات الخليج",
      "culture.uae": "ثقافة الصحة في الإمارات",
      "culture.desc": "كان النظام الغذائي الإماراتي التقليدي منخفضاً بشكل طبيعي في السكريات المصنعة وعالياً في الكثافة الغذائية. لنعد إلى جذورنا.",
      "culture.traditional_good": "لماذا التقليدي هو الأفضل",
      "culture.traditional_good_desc": "أجسامنا متناغمة بيولوجياً مع أطعمة أجدادنا. طازجة ومحلية وحقيقية.",
      "initiative.title": "مبادرة تركز على الإمارات",
      "initiative.desc": "هذه مبادرة عامة تركز على صحة مواطني ومقيمي دولة الإمارات العربية المتحدة.",
      "heritage.dates_desc": "أكثر من مجرد فاكهة، كانت التمور هي أساس الحياة في صحراء الإمارات.",
      "heritage.camel_milk_desc": "مليء بالبروتينات المعززة للمناعة والدهون الصحية.",
      "heritage.sidr_desc": "يُحصد من جبال الإمارات، وهو مضاد حيوي طبيعي قوي.",
      "stats.diabetes": "20% نسبة السكري",
      "stats.obesity": "33% نسبة السمنة",
      "stats.prediabetes": "1 من كل 5 معرض للسكري",
      "cta.learn_more": "تعرف على المزيد",
      "cta.join_us": "انضم إلى المبادرة",
      "culture.dubai_title": "دبي: مركز لطول العمر",
      "culture.dubai_desc": "دمج العلم الحديث مع ممارسات الصحة البدوية القديمة لإنشاء المدينة الأكثر صحة في العالم.",
      "culture.ancestral_diet": "النظام الغذائي الإماراتي القديم",
      "culture.ancestral_diet_desc": "بروتين مستدام، دهون صحية من المكسرات والبذور، وحلاوة طبيعية من التمور.",
      "culture.modern_problem": "التحدي الحديث",
      "culture.modern_problem_desc": "جلب التوسع الحضري السريع في الإمارات الراحة على حساب الصحة. نحن هنا لسد هذه الفجوة.",
      "culture.veggies_title": "الزراعة المحلية",
      "culture.veggies_desc": "الزراعة الرأسية الحديثة في دبي تعيد نضارة الخضروات المزروعة محلياً إلى موائدنا.",
      "nav.services": "خدماتنا",
      "nav.impact": "تأثيرنا",
      "nav.faq": "الأسئلة الشائعة",
      "footer.explore": "استكشف",
      "footer.community": "المجتمع",
      "footer.legal": "قانوني",
      "footer.terms": "شروط الاستخدام",
      "footer.privacy": "سياسة الخصوصية",
      "footer.dubai_office": "حي دبي للتصميم، المبنى 4",
      "footer.mena_region": "مركز الشرق الأوسط وشمال أفريقيا",
      "traditional.gahwa": "القهوة العربية (القهوة)",
      "traditional.gahwa_desc": "رمز للضيافة ومصدر غني بمضادات الأكسدة ومعززات الأيض.",
      "traditional.spices": "توابل طريق الحرير",
      "traditional.spices_desc": "الكركم والكمون والهيل - الأساس المضاد للالتهابات في مطبخنا.",
      "culture.awareness": "نشر الوعي",
      "culture.awareness_desc": "هدفنا هو تثقيف الجيل القادم من مواطني الإمارات حول قوة الغذاء الحقيقي.",
      "culture.arabic_table": "المائدة العربية",
      "culture.arabic_table_desc": "إعداد تقليدي يعطي الأولوية للتنوع الطبيعي والمشاركة والمكونات الغنية بالعناصر الغذائية.",
      "culture.majlis_health": "مجلس الصحة",
      "culture.majlis_health_desc": "تجمعات مجتمعية تركز على استعادة صحة عائلاتنا من خلال الحكمة الموروثة.",
      "culture.dubai_future": "مستقبل دبي هو الغذاء الحقيقي",
      "culture.dubai_future_desc": "قيادة الحركة العالمية نحو الصحة الأيضية من قلب الشرق الأوسط.",
      "culture.superfood_dates": "التمور: حلوى الطبيعة",
      "culture.superfood_dates_desc": "غنية بالمعادن والألياف والطاقة بطيئة الامتصاص لسكان الصحراء المعاصرين.",
      "culture.superfood_camel": "حليب الإبل: الذهب السائل",
      "culture.superfood_camel_desc": "منخفض اللاكتوز بشكل طبيعي وعالي البروتينات الشبيهة بالأنسولين، معجزة صحراوية حقيقية.",
      "culture.superfood_sidr": "عسل السدر: دواء قديم",
      "culture.superfood_sidr_desc": "يُحصد من جبال رأس الخيمة، وهو مصدر قوي جداً لمضادات الالتهاب."
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Language) || "en";
    }
    return "en";
  });

  const t = useCallback((key: string) => {
    return translations[language][key] ?? key;
  }, [language]);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language, dir]);

  const value = useMemo(() => ({ language, setLanguage, t, dir }), [language, setLanguage, t, dir]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
