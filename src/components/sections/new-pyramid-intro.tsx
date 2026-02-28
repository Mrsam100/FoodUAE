import React from 'react';

const NewPyramidIntro = () => {
  return (
    <div className="w-full bg-[#f9f7e8] py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-24">
          <h2 className="text-[#0a0504] font-bold tracking-[-0.04em] leading-[1.0] text-[32px] md:text-[48px] lg:text-[80px] mb-8">
            Eat Real Food
          </h2>
          <div className="w-full h-px bg-[#0a0504]/10"></div>
        </div>

        {/* New Pyramid Visual Layout - Initial State */}
        <div className="relative min-h-[350px] md:min-h-[600px] flex flex-col items-center justify-start">
          
          {/* Top Divider Line (Visual Hierarchy) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] md:w-[320px] h-px bg-[#0a0504]/20"></div>

          {/* Floating Category Labels */}
          <div className="w-full relative h-[400px]">
            
            {/* Protein, Dairy & Healthy Fats Label */}
            <div className="absolute left-[5%] md:left-[15%] top-10 flex flex-col items-start max-w-[140px] md:max-w-[180px]">
              <span className="text-[#888888] font-semibold text-[14px] md:text-[16px] tracking-tight leading-tight uppercase mb-2">
                Protein, Dairy,
                <br />
                & Healthy Fats
              </span>
              <div className="w-full h-0.5 bg-[#0a0504]/10 mt-1"></div>
            </div>

            {/* Vegetables & Fruits Label */}
            <div className="absolute right-[5%] md:right-[15%] top-10 flex flex-col items-end text-right max-w-[140px] md:max-w-[180px]">
              <span className="text-[#888888] font-semibold text-[14px] md:text-[16px] tracking-tight leading-tight uppercase mb-2">
                Vegetables
                <br />
                & Fruits
              </span>
              <div className="w-full h-0.5 bg-[#0a0504]/10 mt-1"></div>
            </div>

            {/* Whole Grains Label (Centered Lower) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[180px] md:top-[220px] flex flex-col items-center text-center max-w-[140px] md:max-w-[180px]">
              <span className="text-[#888888] font-semibold text-[14px] md:text-[16px] tracking-tight leading-tight uppercase mb-2">
                Whole
                <br />
                Grains
              </span>
              <div className="w-[80px] md:w-[100px] h-px bg-[#0a0504]/20 mt-1"></div>
            </div>

            {/* Central Pyramid Interaction Area (Empty for initial layout as requested) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full max-w-[600px] opacity-[0.03]"
                style={{ filter: 'grayscale(1)' }}
              >
                <path d="M50 5 L95 95 L5 95 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="0.5" />
                <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* Intro Text for the Pyramid Section */}
          <div className="mt-12 text-center max-w-[800px]">
            <p className="text-[#0a0504] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.4] opacity-80">
              The New Pyramid is a simple guide designed to help people across the UAE and MENA region eat real, whole foods more consistently. It prioritizes nutrient-dense foods and reduces reliance on highly processed products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPyramidIntro;