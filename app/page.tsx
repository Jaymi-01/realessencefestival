"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Talent from "@/components/Talent";
import ChickenEssence from "@/components/ChickenEssence";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const SECTION_MARGIN = "px-[8vw] lg:px-[10vw]";

  useEffect(() => {
    // Artificial delay to show the loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <main className="min-h-screen bg-white overflow-x-hidden">
        {/* SECTION 1: HERO */}
        <Hero marginClassName={SECTION_MARGIN} />

        {/* SECTION 2: DETAILS */}
        <Details marginClassName={SECTION_MARGIN} />

        {/* SECTION 3: TALENTS */}
        <Talent />

        {/* SECTION 4: CHICKEN ESSENCE */}
        <ChickenEssence />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
