import React from 'react';

/**
 * StatsSection Component
 * 
 * A high-impact section featuring large red bar charts and localized health statistics
 * for the MENA/UAE region, adhering to the "Brutalist Minimalism" design system.
 */
const StatsSection: React.FC = () => {
  // Localized data for the MENA / UAE region as per design instructions
  const statsData = [
    {
      percentage: 45,
      label: "45% of UAE residents have",
      highlight: "prediabetes or diabetes",
      description: "reflecting a regional metabolic crisis linked to processed intake."
    },
    {
      percentage: 66,
      label: "66% of MENA adults report having",
      highlight: "at least one chronic condition",
      description: "driven by a rapid shift toward sedentary lifestyles and poor diet."
    },
    {
      percentage: 82,
      label: "82% of regional healthcare spending",
      highlight: "goes to treating chronic disease",
      description: "much of which is preventable through real, nutrient-dense nutrition."
    }
  ];

  return (
    <section 
      id="problem" 
      className="bg-[#0B0504] text-white py-[160px] px-6 md:px-12 flex flex-col items-center"
      aria-label="The Health Crisis - Stats"
    >
      {/* Section Header */}
      <div className="max-w-[1280px] w-full text-center mb-24">
        <h2 className="text-[#888888] font-mono text-[10px] uppercase tracking-[0.2em] mb-8">
          The State of Our Health
        </h2>
        <h3 className="text-[clamp(48px,8vw,100px)] font-[800] leading-[0.95] tracking-[-0.04em] mb-4">
          The UAE is sick.<br />
          The data is clear.
        </h3>
      </div>

      {/* Stats Grid */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col h-full group">
            {/* Bar Visualizer */}
            <div className="relative flex-grow flex items-end mb-8 min-h-[300px] md:min-h-[400px]">
              <div 
                className="w-full bg-[#CB0000] relative transition-all duration-1000 ease-out flex items-start p-6"
                style={{ height: `${stat.percentage}%` }}
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-[clamp(48px,5vw,72px)] font-extrabold tracking-tighter leading-none">
                    {stat.percentage}
                  </span>
                  <span className="text-[24px] font-bold opacity-80">%</span>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-2">
              <p className="text-[18px] md:text-[20px] leading-[1.4] font-medium">
                {stat.label}{" "}
                <span className="text-[#CB0000] underline decoration-2 underline-offset-4">
                  {stat.highlight}
                </span>
              </p>
              <p className="text-[#888888] text-[14px] md:text-[16px] leading-[1.5]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support text below stats */}
      <div className="max-w-[800px] w-full mt-32 text-center">
        <p className="text-[#888888] text-[clamp(18px,1.5vw,22px)] leading-relaxed font-normal">
          For decades regional health has been impacted by global food systems that prioritized 
          convenience and shelf-life over human biology. We are now facing rates of 
          unprecedented chronic conditions that can be reversed by returning to real food.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;