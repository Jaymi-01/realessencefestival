"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Details() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activities = [
    { title: "SUPREME COOKING\nCOMPETITION", desc: "Bring your A-game, showcase your cooking skills, and win big.", bg: "bg-[#B11217]" },
    { title: "MASTERCLASS", desc: "Tap into knowledge from the best minds in the game.", bg: "bg-[#0000B1]" },
    { title: "DANCE COMPETITION", desc: "Dance your way to the spotlight, and win prizes.", bg: "bg-[#FF6B6B]" },
    { title: "GAMES", desc: "Games and fun activities to keep the energy going all day.", bg: "bg-[#C06014]" },
  ];

  const mainVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -20 },
  };

  const hoverVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative md:min-h-[1000px] flex flex-col items-center justify-center overflow-visible py-12 md:py-24 font-lilita text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/assets/BG PATTERN 2.svg" 
          alt="" 
          fill 
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[900px] z-10 pointer-events-none hidden md:block">
        <Image src="/assets/plate-left.png" alt="" fill className="object-contain object-left" sizes="450px" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[900px] z-10 pointer-events-none hidden md:block">
        <Image src="/assets/plate-right.png" alt="" fill className="object-contain object-right" sizes="450px" />
      </div>

      <div className="relative z-20 w-full px-6 flex flex-col items-center">

        {/* Vector Date */}
        <div className="relative w-full max-w-[320px] md:max-w-[550px] mt-0 md:-mt-[350px] mb-6">
          <div className="relative w-full aspect-[1046/484]">
            <Image src="/assets/Vector-date.svg" alt="Date" fill className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 320px, 550px" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10 pb-2">
              <h2 className="text-[#C10706] text-xl md:text-3xl font-lilita leading-tight">APRIL 5TH-6TH, 2026</h2>
              <p className="text-black text-xs md:text-xl mt-1 font-lilita capitalize">A Day Packed with Real Enjoyment</p>
              <p className="text-black text-[10px] md:text-sm mt-1 font-sans capitalize md:block">
                <span className="font-semibold">The Real Essence Festival</span> is designed to deliver unforgettable moments. From tasting delicious meals to dancing to great music and participating in exciting games, every corner of the festival is filled with energy, flavor, and fun.
              </p>
            </div>
          </div>
        </div>

        {/* Vector Venue */}
        <div className="relative w-full max-w-[280px] md:max-w-[450px] -mt-[70px] md:-mt-[100px] mb-2 z-20">
          <div className="relative w-full aspect-[800/450]">
            <Image src="/assets/Vector-venue.svg" alt="Venue" fill className="object-contain drop-shadow-xl" sizes="(max-width: 768px) 280px, 450px" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10 pt-2 md:pt-6">
              <p className="text-[#FFF113] text-lg md:text-3xl flex items-center gap-2 md:gap-3">
                <span className="text-white">VENUE:</span> IKEJA CITY MALL
              </p>
              <p className="text-[#FFF113] text-lg md:text-3xl">
                <span className="text-white">TIME:</span> 10AM
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[280px] md:max-w-[550px] space-y-3 md:space-y-4 pb-0">
          {/* Music Performance Pill */}
          <motion.div 
            initial={isMobile ? "hover" : "initial"}
            animate={isMobile ? "hover" : "initial"}
            whileHover="hover"
            className="group relative bg-[#004A1F] rounded-full py-2 md:py-4 px-6 cursor-pointer shadow-xl border-2 border-white/10 overflow-hidden min-h-[40px] md:min-h-[64px] flex items-center justify-center"
          >
            <motion.div variants={mainVariants} className="text-center text-[10px] md:text-2xl uppercase leading-tight px-2">
              MUSIC PERFORMANCE BY: SHODAY
            </motion.div>
            <motion.div variants={hoverVariants} className="absolute inset-0 flex items-center justify-center text-center px-4 text-[9px] md:text-lg uppercase leading-tight">
              Get ready for back-to-back energy with Shoday, DJs, and other entertainers;
            </motion.div>
          </motion.div>

          {/* Activity Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {activities.map((act, i) => (
              <motion.div 
                key={i} 
                initial={isMobile ? "hover" : "initial"}
                animate={isMobile ? "hover" : "initial"}
                whileHover="hover"
                className={`group relative ${act.bg} rounded-full py-3 md:py-6 px-2 cursor-pointer shadow-xl border-2 border-white/5 overflow-hidden min-h-[50px] md:min-h-[100px] flex items-center justify-center`}
              >
                <motion.div variants={mainVariants} className="text-center text-[9px] md:text-xl uppercase leading-tight whitespace-pre-line">
                  {act.title}
                </motion.div>
                <motion.div variants={hoverVariants} className="absolute inset-0 flex items-center justify-center text-center px-2 text-[8px] md:text-base leading-tight">
                  {act.desc}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}