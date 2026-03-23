"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Activity {
  title: string;
  desc: string;
  bg: string;
}

export default function Details() {
  const [hoveredActivity, setHoveredActivity] = useState<Activity | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activities: Activity[] = [
    { title: "SUPREME COOKING\nCOMPETITION", desc: "Bring your A-game, showcase your cooking skills, and win big with our culinary challenge.", bg: "bg-[#B11217]" },
    { title: "MASTERCLASS", desc: "Tap into knowledge from the best minds in the game and elevate your skills.", bg: "bg-[#0000B1]" },
    { title: "DANCE COMPETITION", desc: "Dance your way to the spotlight, and win amazing prizes in our high-energy face-off.", bg: "bg-[#FF6B6B]" },
    { title: "GAMES", desc: "Exciting games and fun activities to keep the energy going all day long.", bg: "bg-[#C06014]" },
  ];

  const rybeenaActivity: Activity = { 
    title: "MUSIC PERFORMANCE BY: RYBEENA", 
    desc: "Get ready for back-to-back energy with Rybeena, DJs, and other entertainers as we vibe through the festival.", 
    bg: "bg-[#004A1F]" 
  };

  const handleMouseEnter = (activity: Activity) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredActivity(activity);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredActivity(null);
    }, 100);
  };

  const CAPSULE_HEIGHT = "h-[clamp(60px,9vh,85px)]";

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-visible pb-[10vh] pt-0 font-lilita text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/assets/BG PATTERN 2.svg" 
          alt="" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Side Plates - Massive background scale */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[clamp(450px,35vw,750px)] aspect-[0.7/1] z-10 pointer-events-none opacity-40 lg:opacity-100"
      >
        <Image src="/assets/plate-left.png" alt="" fill className="object-contain object-left" priority />
      </motion.div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[clamp(450px,35vw,750px)] aspect-[0.7/1] z-10 pointer-events-none opacity-40 lg:opacity-100"
      >
        <Image src="/assets/plate-right.png" alt="" fill className="object-contain object-right" priority />
      </motion.div>

      {/* Main Container - Adjusted to clear the massive background plates */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-[22vw] flex flex-col items-center">
        
        {/* Vector Date Container - Lowered overlap and original spacious typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[clamp(380px,85vw,680px)] lg:max-w-[720px] -mt-[10px] lg:-mt-[30px] mb-0 z-20"
        >
          <div className="relative w-full aspect-[1046/484]">
            <Image src="/assets/Vector-date.svg" alt="Date" fill className="object-contain drop-shadow-2xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[8vw] pt-[2vh] pb-[3vh]">
              <motion.h2 
                className="text-[#C10706] text-[clamp(18px,3.2vw,48px)] landscape:text-[clamp(18px,2.5vw,36px)] lg:text-[54px] font-lilita leading-[1.2] tracking-wide mt-[1.5vh]"
              >
                APRIL 5TH-6TH, 2026
              </motion.h2>
              <motion.p 
                className="text-[#004700] text-[clamp(14px,2.4vw,32px)] landscape:text-[clamp(14px,2vw,24px)] lg:text-[36px] mt-[0.3vh] font-lilita capitalize leading-tight"
              >
                A Day Packed with Real Enjoyment
              </motion.p>
              <motion.p 
                className="text-black text-[clamp(11px,1.6vw,18px)] landscape:text-[clamp(11px,1.3vw,16px)] lg:text-[20px] mt-[1.5vh] font-sans capitalize leading-relaxed max-w-[95%]"
              >
                <span className="font-semibold text-black/80">The Real Essence Festival</span> is designed to deliver unforgettable moments. From tasting delicious meals to dancing to great music and participating in exciting games, every corner of the festival is filled with energy, flavor, and fun.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Vector Venue Container - Reduced margin to raise capsules */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[420px] lg:max-w-[540px] -mt-[clamp(60px,10vw,140px)] lg:-mt-[130px] mb-[2vh] lg:mb-[3vh] z-30"
        >
          <div className="relative w-full aspect-[800/450]">
            <Image src="/assets/Vector-venue.svg" alt="Venue" fill className="object-contain drop-shadow-xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 pt-4 gap-1 lg:gap-2">
              <p className="text-[#FFF113] text-[clamp(16px,2.2vw,28px)] lg:text-[32px] flex items-center gap-3 leading-none uppercase tracking-wider">
                <span className="text-white">VENUE:</span> IKEJA CITY MALL
              </p>
              <p className="text-[#FFF113] text-[clamp(16px,2.2vw,28px)] lg:text-[32px] leading-none uppercase tracking-wider">
                <span className="text-white">TIME:</span> 10AM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Activities Section - Tightened spacing and slight negative margin */}
        <div className="w-full max-w-[720px] space-y-[2vh] lg:space-y-[2vh] pb-0 lg:-mt-[2vh]">
          {/* Rybeena Wide Capsule */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              onMouseEnter={() => handleMouseEnter(rybeenaActivity)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
              className={`group relative bg-[#004A1F] rounded-full px-8 cursor-pointer shadow-xl border-2 border-white/10 overflow-hidden ${CAPSULE_HEIGHT} flex items-center justify-center w-full transition-colors hover:bg-[#005A2F]`}
            >
              <div className="text-center text-[clamp(16px,2vw,28px)] lg:text-[30px] uppercase leading-none tracking-wide px-2">
                MUSIC PERFORMANCE BY: RYBEENA
              </div>
            </motion.div>
          </motion.div>

          {/* Activity Grid */}
          <div className="grid grid-cols-2 gap-[2vh] lg:gap-[3vh]">
            {activities.map((act, i) => (
              <motion.div 
                key={i} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
              >
                <motion.div
                  onMouseEnter={() => handleMouseEnter(act)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative ${act.bg} rounded-full px-4 cursor-pointer shadow-xl border-2 border-white/5 overflow-hidden ${CAPSULE_HEIGHT} flex items-center justify-center w-full transition-transform`}
                >
                  <div className="text-center text-[clamp(12px,1.4vw,20px)] lg:text-[22px] uppercase leading-[1.1] tracking-normal whitespace-pre-line px-1">
                    {act.title}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Card (Hover Modal) */}
      <AnimatePresence>
        {hoveredActivity && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="relative w-full max-w-[450px] bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-[#FFF113] overflow-hidden pointer-events-auto"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF113]/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16 blur-2xl" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <h3 className="text-[clamp(22px,2.5vw,36px)] leading-tight mb-4 uppercase tracking-tight text-black">
                  {hoveredActivity.title}
                </h3>
                <div className="w-12 h-1 bg-[#C10706] rounded-full mb-6" />
                <p className="text-[clamp(14px,1.2vw,18px)] font-sans leading-relaxed text-black/80">
                  {hoveredActivity.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
