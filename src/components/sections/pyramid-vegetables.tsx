import React from 'react';
import Image from 'next/image';
import { FOOD_ASSETS } from '@/lib/food-assets';

const VegetableFruitsSection = () => {
  return (
    <section className="bg-[#f9f7e8] text-[#0a0504] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-24">
        {/* Left Content Column */}
        <div className="w-full md:w-5/12 z-10">
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.0] tracking-[-0.04em] mb-8">
            Vegetables & Fruits
          </h2>
          <div className="space-y-6 max-w-lg">
            <p className="text-[20px] md:text-[24px] leading-relaxed opacity-90">
              Vegetables and fruits are essential to real food nutrition. Eat a wide variety of whole, colorful, nutrient-dense vegetables and fruits in their original form, prioritizing freshness and minimal processing.
            </p>
            <div className="space-y-2 pt-4">
              <p className="text-[18px] md:text-[20px] font-semibold">
                Vegetables: <span className="font-normal opacity-70">3 servings per day.</span>
              </p>
              <p className="text-[18px] md:text-[20px] font-semibold">
                Fruits: <span className="font-normal opacity-70">2 servings per day.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Asset Cluster Column */}
        <div className="w-full md:w-7/12 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full transform scale-100 lg:scale-110">
            {/* Broccoli - Background depth */}
            <div className="absolute top-[-40px] right-[15%] w-[180px] md:w-[320px] z-[1]">
              <Image
                src={FOOD_ASSETS.broccoli}
                alt="Broccoli"
                width={890}
                height={705}
                className="object-contain"
              />
            </div>

            {/* Frozen Peas - Tucked middle */}
            <div className="absolute top-[40px] left-[35%] w-[120px] md:w-[200px] z-[2]">
              <Image
                src={FOOD_ASSETS.peas}
                alt="Frozen Peas"
                width={510}
                height={580}
                className="object-contain"
              />
            </div>

            {/* Bananas - Far left sweep */}
            <div className="absolute top-[120px] left-[-30px] md:left-[-60px] w-[180px] md:w-[320px] z-[5] rotate-[-5deg]">
              <Image
                src={FOOD_ASSETS.bananas}
                alt="Bananas"
                width={740}
                height={700}
                className="object-contain"
              />
            </div>

            {/* Carrots - Horizontal anchor top right */}
            <div className="absolute top-[30px] right-[-40px] md:right-[-80px] w-[200px] md:w-[420px] z-[3] rotate-[10deg]">
              <Image
                src={FOOD_ASSETS.carrots}
                alt="Carrots"
                width={1337}
                height={553}
                className="object-contain"
              />
            </div>

            {/* Tomato - Center focus */}
            <div className="absolute top-[160px] left-[38%] w-[100px] md:w-[180px] z-[10]">
              <Image
                src={FOOD_ASSETS.tomatoes}
                alt="Tomato"
                width={452}
                height={542}
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Lettuce - Far right foreground */}
            <div className="absolute top-[180px] right-[-20px] md:right-[-40px] w-[140px] md:w-[260px] z-[11] rotate-[5deg]">
              <Image
                src={FOOD_ASSETS.lettuce}
                alt="Lettuce"
                width={650}
                height={564}
                className="object-contain"
              />
            </div>

            {/* Blueberries - Small scatter center-right */}
            <div className="absolute bottom-[20%] right-[30%] w-[60px] md:w-[110px] z-[12]">
              <Image
                src={FOOD_ASSETS.blueberries}
                alt="Blueberries"
                width={459}
                height={212}
                className="object-contain"
              />
            </div>

            {/* Strawberry - Front layer point */}
            <div className="absolute bottom-[10%] right-[10%] w-[60px] md:w-[120px] z-[15] rotate-[-15deg]">
              <Image
                src={FOOD_ASSETS.strawberry}
                alt="Strawberry"
                width={324}
                height={264}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VegetableFruitsSection;