"use client";

import Hero from "@/components/Hero";
import Details from "@/components/Details";

export default function Home() {
  const SECTION_MARGIN = "px-32";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <Hero marginClassName={SECTION_MARGIN} />

      {/* SECTION 2: DETAILS - Removed custom margin prop as requested */}
      <Details />

      {/* Awaiting your instructions for Section 3... */}
    </main>
  );
}
