"use client";

import Hero from "@/components/Hero";

export default function Home() {
  // 6. Consistent margin to be maintained for all sections
  const SECTION_MARGIN = "px-20";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <Hero marginClassName={SECTION_MARGIN} />

      {/* Awaiting your instructions for Section 2... */}
    </main>
  );
}
