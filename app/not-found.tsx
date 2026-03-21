"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-48 p-6 relative overflow-hidden font-lilita text-white text-center"
      style={{ 
        backgroundColor: '#004700',
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Small Logo in Top Left (based on design) */}
      <div className="absolute top-8 left-6 md:left-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-20">
        <Image 
          src="/assets/LOGO LOCKUP 1.png" 
          alt="Logo" 
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl">
        {/* 404 Illustration */}
        <div className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] relative mb-4">
          <Image 
            src="/assets/404.svg" 
            alt="404 - Not Found" 
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Message */}
        <h1 className="text-xl md:text-3xl uppercase leading-tight mb-4 drop-shadow-lg">
          Oops! There&apos;s Nothing To See Here
        </h1>

        {/* Back Button */}
        <Link href="/">
          <Button className="bg-[#FFF113] text-black hover:bg-white rounded-full px-6 md:px-10 py-2.5 md:py-3 text-base md:text-xl shadow-lg border-none h-auto uppercase transition-transform active:scale-95 font-lilita">
            Back To Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
