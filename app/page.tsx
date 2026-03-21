"use client";

import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Talent from "@/components/Talent";
import ChickenEssence from "@/components/ChickenEssence";

export default function Home() {
  const SECTION_MARGIN = "px-32";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <Hero marginClassName={SECTION_MARGIN} />

      {/* SECTION 2: DETAILS */}
      <Details />

      {/* SECTION 3: TALENTS */}
      <Talent />

      {/* SECTION 4: CHICKEN ESSENCE */}
      <ChickenEssence />

      {/* Awaiting your instructions for Section 5... */}
    </main>
  );
}
