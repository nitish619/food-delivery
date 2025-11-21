import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <section className="h-[1180px] bg-[#FAFAFA] md:bg-white">
        <HeroSection />
      </section>
      <SectionDivider />
    </main>
  );
}
