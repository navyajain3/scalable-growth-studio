import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Insights } from "@/components/sections/Insights";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { useGSAPScrollAnimations, cleanupScrollTriggers } from "@/hooks/useGSAPScrollAnimations";

const Index = () => {
  // Initialize GSAP ScrollTrigger
  useGSAPScrollAnimations();

  useEffect(() => {
    return () => {
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <WhyUs />
        <Stats />
        <Process />
        <Insights />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
