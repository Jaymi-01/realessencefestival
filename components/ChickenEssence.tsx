"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChickenEssence() {
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[800px] py-16 md:py-24 overflow-hidden font-lilita text-[#C10706]"
      style={{ 
        backgroundImage: 'url("/assets/BG PATTERN 2.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Intersect Borders (Red Ribbons) */}
      {/* Matching section 3 to blend: top-0 means it starts right where section 3 ends */}
      <div className="absolute top-0 bottom-0 -left-[49px] md:-left-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left-2.svg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute top-0 bottom-0 -right-[49px] md:-right-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right-2.svg" alt="" fill className="object-cover object-top" />
      </div>

      <div className="w-full px-6 md:px-20 relative z-20 flex flex-col items-center">
        {/* Header - Large Red Title, Single Line, Centered */}
        <div className="w-full text-center flex justify-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[100px] leading-none drop-shadow-sm uppercase whitespace-nowrap">
            real chicken essence
          </h2>
        </div>

        {/* Products Row removed as requested */}
      </div>
    </section>
  );
}
