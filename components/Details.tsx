"use client";

import Image from "next/image";

export default function Details() {
  const activities = [
    { title: "SUPREME COOKING\nCOMPETITION", desc: "Bring your A-game, showcase your cooking skills, and win big.", bg: "bg-[#B11217]" },
    { title: "MASTERCLASS", desc: "Tap into knowledge from the best minds in the game.", bg: "bg-[#0000B1]" },
    { title: "DANCE COMPETITION", desc: "Dance your way to the spotlight, and win prizes.", bg: "bg-[#FF6B6B]" },
    { title: "GAMES", desc: "Games and fun activities to keep the energy going all day.", bg: "bg-[#C06014]" },
  ];

  return (
    <section className="relative min-h-[1000px] flex flex-col items-center justify-center overflow-visible py-12 md:py-24 font-lilita text-white">
      {/* 1. Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/assets/BG PATTERN 2.svg" 
          alt="" 
          fill 
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* 2. Plates */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[900px] z-10 pointer-events-none hidden md:block">
        <Image 
          src="/assets/plate-left.png" 
          alt="" 
          fill 
          className="object-contain object-left"
          sizes="450px"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[900px] z-10 pointer-events-none hidden md:block">
        <Image 
          src="/assets/plate-right.png" 
          alt="" 
          fill 
          className="object-contain object-right"
          sizes="450px"
        />
      </div>

      {/* 3. Vectors and Containers */}
      <div className="relative z-20 w-full px-6 flex flex-col items-center">
        
        {/* Vector Date */}
        <div className="relative w-full max-w-[320px] md:max-w-[550px] -mt-[280px] md:-mt-[420px] mb-6">
          <div className="relative w-full aspect-[1046/484]">
            <Image 
              src="/assets/Vector-date.svg" 
              alt="Date" 
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 320px, 550px"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 pb-2">
              <h2 className="text-[#C10706] text-2xl md:text-3xl font-lilita">APRIL 5TH-6TH, 2026</h2>
              <p className="text-black text-sm md:text-xl mt-1 font-lilita capitalize">A Day Packed with Real Enjoyment</p>
              <p className="text-black text-sm md:text-sm mt-1 font-sans capitalize"><span className="font-semibold">The Real Essence Festival</span> is designed to deliver unforgettable moments. From tasting delicious meals to dancing to great music and participating in exciting games, every corner of the festival is filled with energy, flavor, and fun.</p>
            </div>
          </div>
        </div>

        {/* Vector Venue */}
        <div className="relative w-full max-w-[280px] md:max-w-[450px] -mt-[40px] md:-mt-[100px] mb-12">
          <div className="relative w-full aspect-[800/450]">
            <Image 
              src="/assets/Vector-venue.svg" 
              alt="Venue" 
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 280px, 450px"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 pt-2 md:pt-6">
              <p className="text-[#FFF113] text-lg md:text-3xl flex items-center gap-2 md:gap-3">
                <span className="text-white">VENUE:</span> IKEJA CITY MALL
              </p>
              <p className="text-[#FFF113] text-lg md:text-3xl">
                <span className="text-white">TIME:</span> 10AM
              </p>
            </div>
          </div>
        </div>

        {/* 4. Interactive Containers */}
        <div className="w-full max-w-[280px] md:max-w-[550px] space-y-3 md:space-y-4">
          {/* Music Performance Pill */}
          <div className="group relative bg-[#004A1F] rounded-full py-2 md:py-4 px-6 cursor-pointer shadow-xl border-2 border-white/10 overflow-hidden min-h-[40px] md:min-h-[64px] flex items-center justify-center">
            <div className="text-center text-sm md:text-2xl uppercase transition-all duration-300 group-hover:opacity-0">
              MUSIC PERFORMANCE BY: SHODAY
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 text-xs md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Get ready for back-to-back energy with Shoday, DJs, and other entertainers;
            </div>
          </div>

          {/* Activity Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {activities.map((act, i) => (
              <div key={i} className={`group relative ${act.bg} rounded-full py-3 md:py-6 px-2 cursor-pointer shadow-xl border-2 border-white/5 overflow-hidden min-h-[50px] md:min-h-[100px] flex items-center justify-center`}>
                <div className="text-center text-[10px] md:text-xl uppercase leading-tight transition-all duration-300 group-hover:opacity-0 whitespace-pre-line">
                  {act.title}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-2 text-[9px] md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 leading-tight">
                  {act.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
