import React from 'react';

/**
 * LocalInitiatives Section
 * 
 * Clones the "America Returns to Real Food" policy wins section but 
 * adapted for Dubai/UAE health initiatives as per design instructions.
 * Uses the light theme backdrop (#F7F5E6) as per the high-level design transitions.
 */

const LocalInitiatives = () => {
  const initiatives = [
    {
      title: "Dubai Health Authority (DHA) Sugar-Sweetened Beverage Tax",
      description: "In alignment with the UAE National Food Security Strategy 2051, strict taxation on carbonated and sweetened drinks is being leveraged to reduce childhood obesity and promote traditional, hydrating alternatives."
    },
    {
      title: "Ensuring Schools and Healthcare Facilities Serve Real Food",
      description: "The Dubai Health Authority has updated nutritional standards for all school and hospital canteens, mandating the removal of ultra-processed snacks in favor of fresh local produce and nutrient-dense traditional meals."
    },
    {
      title: "Dubai Municipality Food Safety Standard Overhaul",
      description: "Implementing the first comprehensive review of food additive safety since the launch of the 'Foodwatch' platform, ensuring gold-standard safety analysis for all ingredients entering the emirate's supply chain."
    },
    {
      title: "Phasing Out Synthetic Colorants from Locally Produced Goods",
      description: "A national timeline has been established for the UAE food industry to phase out artificial petroleum-based food dyes (Yellow 5, Red 40) in favor of natural, plant-based alternatives like saffron and turmeric."
    },
    {
      title: "MENA-Wide Unified Nutrition Standards",
      description: "Collaborating with regional partners across the MENA region to establish unified nutrition labeling and food safety standards, ensuring that 'Real Food' is accessible from Casablanca to Dubai."
    },
    {
      title: "National Nutrition Labeling Transparency 'E-Nasf'",
      description: "Strengthening transparency with mandatory front-of-pack labeling that clearly identifies high levels of processed sugars and industrial fats, empowering families to choose whole foods first."
    }
  ];

  return (
    <section 
      id="winning" 
      className="bg-[#F7F5E6] text-[#0A0504] py-16 md:py-32 lg:py-[160px] px-4 md:px-8 lg:px-0"
    >
      <div className="max-w-[1280px] mx-auto container">
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-[40px] md:text-[72px] font-bold tracking-[-0.03em] leading-tight max-w-4xl mx-auto">
            UAE Returns <br className="hidden md:block" /> to Real Food
          </h2>
          
          <div className="max-w-[700px] mx-auto">
            <p className="text-[16px] md:text-[20px] font-normal leading-[1.6] opacity-80 font-sans">
              Under current national leadership, the results speak for themselves. 
              Federal health policy has been reset with strength and conviction. 
              Real, whole, nutrient-dense food is once again the foundation of UAE&apos;s health mission.
            </p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-[40px] shadow-[0px_4px_40px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="divide-y divide-[rgba(0,0,0,0.1)] p-4 md:p-8">
              {initiatives.map((item, index) => (
                <div 
                  key={index} 
                  className={`py-8 ${index === 0 ? 'pt-4' : ''} ${index === initiatives.length - 1 ? 'pb-4' : ''}`}
                >
                  <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] leading-[1.6] text-[rgba(10,5,4,0.7)] font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block h-[1px] w-24 bg-primary mb-8 opacity-20"></div>
          <p className="text-[18px] font-mono uppercase tracking-[0.2em] opacity-40">
            A National Food Security Strategic Goal
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalInitiatives;