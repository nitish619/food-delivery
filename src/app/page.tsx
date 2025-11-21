import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import HowWork from "@/components/HowWork";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <section className="h-auto md:h-[1180px]">
        <HeroSection />
      </section>
      <SectionDivider />
      <section className="section-padding">
        <HowWork />
      </section>
      <section className="bg-[#252B42]">
        <CTA />
      </section>
    </main>
  );
}
