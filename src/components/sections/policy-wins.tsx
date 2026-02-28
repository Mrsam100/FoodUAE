import React from 'react';

const policyWins = [
  {
    title: "Banning Sugary Drinks in School Canteens",
    description: "The UAE Ministry of Education has partnered with health authorities to remove sugary beverages from school canteens, ensuring students have access to nutrient-dense, real food options."
  },
  {
    title: "Ensuring Schools and Public Institutions Serve Real Food",
    description: "The UAE government is updating nutrition guidelines for schools, hospitals, and public institutions to prioritize whole, unprocessed foods in daily meals."
  },
  {
    title: "Strengthening Infant Nutrition Standards",
    description: "The Emirates Authority for Standardization and Metrology is conducting a comprehensive review of infant formula nutrition standards to align with the latest health research."
  },
  {
    title: "Phasing Out Artificial Dyes from Food",
    description: "The UAE is establishing regional standards and timelines for the food industry to phase out petroleum-based food dyes in favor of natural alternatives."
  },
  {
    title: "Overhauling Food Safety and Additive Standards",
    description: "The UAE is strengthening transparency in food labeling and requiring rigorous safety analysis for additives and ingredients entering the regional food supply."
  }
];

const PolicyWins = () => {
  return (
    <section
      id="winning"
      className="py-16 md:py-24 lg:py-[120px] px-4 md:px-16 light-section"
      style={{
        backgroundColor: '#f9f7e8',
        color: '#0a0504'
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-8">
          <h2
            className="h2 mx-auto max-w-4xl"
            style={{
              fontSize: 'clamp(32px, 8vw, 80px)',
              lineHeight: '1.0',
              letterSpacing: '-0.04em',
              fontWeight: 700
            }}
          >
            The UAE Returns to Real Food
          </h2>

          <div className="max-w-[700px] mx-auto">
            <p
              className="body-base"
              style={{
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'rgba(10, 5, 4, 0.7)',
                textAlign: 'center'
              }}
            >
              The results speak for themselves. Regional nutrition policy is being reset with strength and conviction. Real, whole, nutrient-dense food is once again the foundation of health across the UAE and MENA.
            </p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto mt-12">
          <div
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[rgba(10,5,4,0.05)]"
            style={{
              padding: '12px'
            }}
          >
            {policyWins.map((policy, index) => (
              <div
                key={index}
                className={`p-4 md:p-6 lg:p-10 ${index !== policyWins.length - 1 ? 'border-b border-[rgba(10,5,4,0.1)]' : ''}`}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontSize: '20px',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.3'
                  }}
                >
                  {policy.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'rgba(10, 5, 4, 0.7)'
                  }}
                >
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

export default PolicyWins;
