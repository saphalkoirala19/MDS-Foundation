import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FoundationMission } from "@/components/FoundationMission";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Programs } from "@/components/Programs";
import { AnimatedCounters } from "@/components/AnimatedCounters";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FoundationMission />
        <WhatWeDo />
        <Programs />
        <AnimatedCounters />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
