"use client";

import Image from "next/image";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#B11217] flex flex-col items-center justify-center p-6 relative overflow-hidden font-lilita text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image 
          src="/assets/BG-PATTERN 1.svg" 
          alt="" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Back Button */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 md:top-8 md:left-20 z-20 flex items-center gap-1.5 md:gap-2 hover:text-[#FFF113] transition-colors group"
      >
        <CaretLeft weight="bold" className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm md:text-2xl uppercase">BACK TO HOME</span>
      </Link>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Logo */}
        <div className="w-[280px] h-[140px] md:w-[500px] md:h-[250px] relative mb-8">
          <Image 
            src="/assets/LOGO LOCKUP 1.png" 
            alt="Real Essence Festival Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl text-[#FFF113] uppercase leading-tight mb-4 drop-shadow-xl">
          We are preparing something amazing for you
        </h1>
        <p className="text-xl md:text-2xl text-white/90 uppercase">
          Come back later
        </p>
      </div>
    </main>
  );
}
