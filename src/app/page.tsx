import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsSection from "@/components/sections/StatSection";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Faq from "@/components/sections/Faq";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* STATS */}
      <StatsSection />

      {/* ABOUT */}
      <About />

      {/* Services */}
      <Services />

      {/* Solutions */}
      <Solutions />

      {/* FAQ */}
      <Faq />

      {/* PORTFOLIO */}
      <Portfolio />
      {/* TESTIMONIALS */}
      <Testimonials />
    </>
  );
}