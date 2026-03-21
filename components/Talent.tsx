"use client";

import Image from "next/image";

export default function Talent() {
  return (
    <section 
      className="relative min-h-[1000px] pt-8 md:pt-12 pb-24 overflow-hidden font-lilita text-white"
      style={{ 
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* 2 & 3. Intersect Borders (Left & Right) - Placed ON TOP */}
      <div className="absolute top-0 left-0 h-full w-[69px] z-30 pointer-events-none">
        <Image src="/assets/Intersect-left.svg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute top-0 right-0 h-full w-[69px] z-30 pointer-events-none">
        <Image src="/assets/Intersect-right.svg" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 relative z-20">
        {/* 1. Header Text */}
        <h2 className="text-[#FFF113] text-4xl md:text-7xl leading-[0.9] text-center drop-shadow-lg capitalize">
          big names. bold talent.<br />non-stop vibes.
        </h2>
      </div>
    </section>
  );
}
