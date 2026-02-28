import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HealthStats from "@/components/sections/health-stats";
import ProblemSolution from "@/components/sections/problem-solution";
import CulturalHeritage from "@/components/sections/cultural-heritage";
import DubaiCulture from "@/components/sections/dubai-culture";
import ArabicTable from "@/components/sections/arabic-table";
import RegionalImpact from "@/components/sections/regional-impact";
import FoodPyramid from "@/components/sections/food-pyramid";
import AIResources from "@/components/sections/ai-resources";
import Initiatives from "@/components/sections/initiatives";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0202]">
      <Header />
      <section id="intro" aria-label="Introduction">
        <Hero />
      </section>
      <section id="problem" aria-label="Health Statistics">
        <HealthStats />
        <ProblemSolution />
        <RegionalImpact />
      </section>
      <section id="heritage" aria-label="Cultural Heritage">
        <CulturalHeritage />
        <DubaiCulture />
        <ArabicTable />
      </section>
      <section id="solution" aria-label="The Solution">
        <FoodPyramid />
        <AIResources />
        <Initiatives />
      </section>
      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
}
