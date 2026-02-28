import React from 'react';

/**
 * Initiatives Section - Regional MENA Highlights
 * 
 * Clones the "America Returns to Real Food" section layout, 
 * replacing US policy with UAE/MENA specific health initiatives.
 * 
 * Layout: Centered card with vertical list of bulleted points against light cream background.
 */

interface InitiativeItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const InitiativeItem = ({ title, description, isLast }: InitiativeItemProps) => (
  <div className={`py-8 ${!isLast ? 'border-b border-[rgba(10,2,2,0.1)]' : ''}`}>
    <h4 className="text-[20px] font-bold leading-[1.2] text-[#0A0202] mb-3">
      {title}
    </h4>
    <p className="text-[16px] leading-[1.6] text-[#4A4A4A] font-normal">
      {description}
    </p>
  </div>
);

const Initiatives = () => {
  const regionalInitiatives = [
    {
      title: "UAE National Strategy for Wellbeing 2031",
      description: "Implementing comprehensive nutritional labelling systems across all food outlets to promote healthy dietary choices and reduce the consumption of high-calorie, low-nutrient processed items."
    },
    {
      title: "MENA 'War on Sugar' & Soda Tax",
      description: "Expanding regional excise taxes on carbonated drinks and energy beverages to 50% and 100% respectively, directly funding public health awareness programs for prediabetes prevention."
    },
    {
      title: "School Lunch Transformation Initiative",
      description: "Updating school procurement guidelines to phase out ultra-processed snacks in favor of fresh local produce, organic dairy, and traditionally prepared whole grains for the youth."
    },
    {
      title: "Empowering Local Agriculture (Agri-Tech)",
      description: "Supporting regional vertical farming and hydroponics to ensure a steady supply of fresh, pesticide-free greens and vegetables, reducing reliance on long-haul imported processed goods."
    },
    {
      title: "Public Health Standards for Food Fortification",
      description: "Revising regional fortification standards to ensure essential nutrients are delivered through natural, whole-food carriers rather than synthetic additives in highly processed products."
    }
  ];

  return (
    <section 
      id="initiatives" 
      className="bg-[#F5F5E9] py-16 md:py-32 lg:py-[160px] px-8"
      aria-label="Regional Health Initiatives"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-[#0A0202] text-[32px] md:text-[48px] lg:text-[80px] font-bold leading-[1.0] tracking-[-0.02em] mb-8">
          The UAE & MENA<br />Returns to Real Food
        </h2>
        
        {/* Subtle Subtitle */}
        <p className="max-w-[700px] mx-auto text-[18px] md:text-[20px] font-medium leading-[1.5] text-[#8E8E8E] mb-16">
          Under new regional health frameworks, the results speak for themselves. 
          National nutrition policy has been reset with strength and conviction. 
          Real, ancestral, nutrient-dense food is once again the foundation of regional vitality.
        </p>

        {/* Initiatives Card */}
        <div className="max-w-[800px] mx-auto bg-white rounded-[32px] p-4 md:p-8 lg:p-12 text-left shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]">
          {regionalInitiatives.map((item, index) => (
            <InitiativeItem 
              key={index}
              title={item.title}
              description={item.description}
              isLast={index === regionalInitiatives.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;