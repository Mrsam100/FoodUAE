import React from 'react';

/**
 * PolicyUpdates Component
 * 
 * This component clones the "America Returns to Real Food" section 
 * (localized here to UAE branding as per design instructions) which 
 * features a list of policy card updates with clean white backgrounds 
 * and clear typography.
 * 
 * Theme: Dark (Section itself utilizes the "Paper Background" #F3F1E1 
 * and white cards to create the 'solution phase' look).
 */

const PolicyUpdates: React.FC = () => {
  const policies = [
    {
      title: "Removing Sugary Beverages from Public Programs",
      description: "The Ministry is working with local entities to prevent support funds from being used for sugary drinks, ensuring more support goes toward nutrient-dense, real food."
    },
    {
      title: "Ensuring Schools and Military Bases Serve Real Food",
      description: "The Administration is updating federal procurement guidelines to ensure schools and the military serve more delicious, real food."
    },
    {
      title: "Improving Infant Formula Standards",
      description: "Health authorities are conducting the first full review of infant formula nutrition standards to ensure optimal childhood development."
    },
    {
      title: "Phasing Out Petroleum-Based Dyes from Food",
      description: "A national standard and timeline is being established for the food industry to phase out petroleum-based food dyes in favor of natural alternatives."
    },
    {
      title: "Overhauling Ingredient Safety Designations",
      description: "Strengthening transparency and requiring gold-standard safety analysis for future ingredients entering the regional food supply."
    }
  ];

  return (
    <section 
      id="policy-winning" 
      className="bg-[#F3F1E1] py-16 md:py-32 lg:py-[160px] px-4 md:px-6 text-[#111111]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-20 max-w-[800px] mx-auto">
          <h2 className="text-[clamp(32px,8vw,100px)] font-bold leading-[0.95] tracking-[-0.04em] mb-8 text-[#111111]">
            UAE Returns <br className="hidden md:block" /> to Real Food
          </h2>
          <p className="text-[clamp(18px,1.5vw,22px)] leading-[1.5] font-normal text-[#111111]/80 px-4">
            Under recent initiatives, the results speak for themselves. 
            Regional nutrition policy has been reset with strength and conviction. 
            Real, whole, nutrient-dense food is once again the foundation of 
            our nation's health.
          </p>
        </div>

        {/* Policy Cards Container */}
        <div className="max-w-[720px] mx-auto">
          <div className="bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/5 overflow-hidden">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className={`p-4 md:p-6 lg:p-10 transition-colors hover:bg-gray-50/50 ${
                  index !== policies.length - 1 ? 'border-b border-black/5' : ''
                }`}
              >
                <h3 className="text-[20px] md:text-[22px] font-bold leading-tight mb-3 tracking-tight">
                  {policy.title}
                </h3>
                <p className="text-[16px] md:text-[17px] leading-relaxed text-[#111111]/70 font-sans">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyUpdates;