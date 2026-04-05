import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsSection from "@/components/sections/StatSection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* STATS */}
      <StatsSection />
    </>
  );
}