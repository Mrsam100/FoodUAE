import React from 'react';

/**
 * RegionalInitiatives Component
 * Clones the policy list section with UAE-specific health initiatives and food safety standards.
 * Theme: Dark
 */

const RegionalInitiatives = () => {
  const initiatives = [
    {
      title: "Dubai Municipality 'Food Watch' Digital Platform",
      description: "Implementing a world-class digital tracking system to ensure the safety and nutritional quality of food throughout the entire supply chain in Dubai."
    },
    {
      title: "UAE National Strategy for Wellbeing 2031",
      description: "Prioritizing healthy nutrition through the 'Esha' initiative to reduce the consumption of sugar, salt, and saturated fats across the Emirates."
    },
    {
      title: "Mandatory Front-of-Pack Nutritional Labeling",
      description: "The Emirates Authority for Standardization and Metrology (ESMA) is rolling out a traffic-light labeling system to help citizens identify highly processed products."
    },
    {
      title: "Restriction of High-Calorie Foods in Schools",
      description: "The Ministry of Education and Abu Dhabi Public Health Centre are enforcing strict nutritional standards, banning soda and energy drinks from all campus premises."
    },
    {
      title: "Dubai Health Authority 'Sahtak' Program",
      description: "A comprehensive initiative aimed at reducing obesity rates by promoting traditional Emirate diets rich in whole grains, local fish, and fresh dates."
    }
  ];

  return (
    <section className="bg-[#0A0505] py-16 md:py-32 lg:py-[160px] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-white font-display text-[28px] md:text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.03em] mb-4 md:mb-6">
            UAE Leading the <br />Way to Real Food
          </h2>
          <p className="text-[#918F84] font-body text-[20px] md:text-[24px] max-w-[800px] mx-auto leading-[1.4]">
            Under the vision of the UAE leadership, regional health policy has been reset with a focus on longevity and prevention. Real, whole foods are the foundation of the nation's future health.
          </p>
        </div>

        {/* Initiatives List Card */}
        <div className="bg-[#F5F4E4] rounded-[24px] p-4 md:p-8 lg:p-12 shadow-2xl max-w-[900px] mx-auto overflow-hidden">
          <div className="space-y-0">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className={`group py-6 md:py-10 ${index !== initiatives.length - 1 ? 'border-b border-black/10' : ''} transition-all duration-300 hover:bg-black/[0.02] -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12`}
              >
                <h3 className="text-[#0A0505] font-display text-[20px] md:text-[24px] font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#0A0505]/70 font-body text-[16px] md:text-[18px] leading-[1.6] max-w-[720px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Decoration Elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#D0021B] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#E7FFAC] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: 'Inter', sans-serif;
        }
        .font-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default RegionalInitiatives;