"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-4 md:px-8 md:py-6 transition-all duration-300 ease-in-out",
          "bg-[#F5F5E9] hover:bg-[#EFEFDF] rounded-[40px]",
          "text-left group"
        )}
        aria-expanded={isOpen}
      >
        <span className="text-[16px] md:text-[20px] font-semibold text-[#0A0202] tracking-tight">
          {question}
        </span>
        <div className={cn(
          "transition-transform duration-300 ease-out",
          isOpen ? "rotate-180" : "rotate-0 text-[#0A0202]/40"
        )}>
          <ChevronDown size={24} strokeWidth={2.5} />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 md:px-10 md:py-8 text-[#0A0202] text-[16px] md:text-[18px] leading-[1.6] space-y-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the New Pyramid?",
      answer: (
        <p>
          The New Pyramid is a simple guide designed to help families across the UAE and MENA region eat real, whole foods more consistently. It prioritizes nutrient-dense foods and reduces reliance on highly processed imports, using modern nutrition science to support everyday health.
        </p>
      )
    },
    {
      question: "Why does this matter?",
      answer: (
        <div className="space-y-4">
          <p>
            For the first time, our regional health initiative calls on the public to avoid highly processed food. We are not making a legal definition – we are stating a public health truth that families in our region already feel in their bodies and see in their loved ones.
          </p>
          <p>
            Diets dominated by these foods – engineered for shelf life, speed, and addictiveness rather than nourishment – are strongly linked to obesity, Type 2 diabetes, and heart disease. The consumption of these foods is contributing to billions of dollars per year in regional healthcare costs.
          </p>
          <p>
            There is no more science-based or urgent public health message than to limit highly processed foods and eat real food. Today, nearly 70% of a child's diet in some parts of our region is defined as ultra-processed.
          </p>
          <p>
            Our message is simple: what we eat shapes how long and how well we live – and choosing real food is one of the most powerful health decisions a person, a family, and a nation can make.
          </p>
        </div>
      )
    },
    {
      question: "What does “Eat Real Food” mean?",
      answer: (
        <p>
          Eating real food means choosing foods that are whole or minimally processed and recognizable as food. These foods are prepared with few ingredients and without added sugars, industrial oils, artificial flavors, or preservatives.
        </p>
      )
    },
    {
      question: "Why does the New Pyramid emphasize protein and vegetables?",
      answer: (
        <p>
          Protein and vegetables form the foundation of real food meals. Together, they support muscle health, metabolic function, gut health, and stable energy while naturally crowding out highly processed foods.
        </p>
      )
    },
    {
      question: "Are fats part of eating real foods?",
      answer: (
        <p>
          Yes. Healthy fats are a natural part of real foods such as meat, seafood, dairy, nuts, olives, and avocados. These fats support brain health, hormone function, and nutrient absorption when consumed in their natural forms.
        </p>
      )
    },
    {
      question: "How does the New Pyramid address added sugars?",
      answer: (
        <p>
          Added sugars are not part of eating real foods and are not recommended. The New Pyramid encourages avoiding added sugars entirely, especially for children, while allowing naturally occurring sugars found in whole fruits and plain dairy.
        </p>
      )
    },
    {
      question: "Where do grains fit in the New Pyramid?",
      answer: (
        <p>
          Grains can be part of a real food diet when eaten in whole or traditionally prepared forms. Foods like oats, rice, and true sourdough are preferred. Refined and packaged grain products should be limited.
        </p>
      )
    },
    {
      question: "What about hydration?",
      answer: (
        <p>
          Hydration matters. Choose water or unsweetened beverages to accompany meals and snacks.
        </p>
      )
    },
    {
      question: "Is the New Pyramid a strict diet?",
      answer: (
        <p>
          No. The New Pyramid is a flexible framework meant to guide better choices, not dictate exact meals. It supports cultural traditions, personal preferences, and different lifestyles while reinforcing one core goal: eat real foods most of the time.
        </p>
      )
    }
  ];

  return (
    <section id="faqs" className="bg-[#F5F5E9] py-16 md:py-32 lg:py-[160px]">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="mb-16">
          <h2 className="text-[36px] md:text-[64px] lg:text-[80px] font-bold text-[#0A0202] leading-[0.95] tracking-[-0.03em] max-w-[600px]">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

          <div className="mt-16 md:mt-24 lg:mt-40 text-center max-w-[1000px] mx-auto">
            <p className="text-[24px] md:text-[40px] lg:text-[56px] font-semibold text-[#8E8E8E] leading-[1.1] tracking-[-0.02em]">
              Our message is simple: <span className="text-[#0A0202]">what we eat shapes how long and how well we live</span> – and choosing real food is one of the most powerful health decisions a person, a family, and a nation can make.
            </p>
          </div>
      </div>
    </section>
  );
};

export default FAQSection;