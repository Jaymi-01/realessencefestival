"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ChallengeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isYellow, setIsYellow] = useState(true);

  // Color alternating effect for the button text
  useEffect(() => {
    const interval = setInterval(() => {
      setIsYellow((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[100] w-16 h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 rounded-full shadow-2xl flex items-center justify-center text-center p-3 font-lilita leading-none transition-colors duration-500 overflow-hidden"
        style={{
          background: "radial-gradient(circle, #027402 0%, #002C00 100%)",
          color: isYellow ? "#FFF113" : "#FFFFFF",
          border: "2px solid #FFF113"
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <span className="text-[5px] md:text-[9px] lg:text-[9px] block mb-0.5">SIZZLE YOUR WAY TO</span>
          <span className="text-[8px] md:text-[11px] lg:text-[13px] block leading-tight">1 MILLION NAIRA</span>
        </div>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-[340px] md:max-w-[450px] lg:max-w-[550px] aspect-square flex flex-col items-center text-center"
            >
              {/* Modal Background Image - The actual wavy asset */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/assets/sizzle-modal.png" 
                  alt="Modal Background" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text Content - Centered within the wavy image area */}
              <div className="relative z-10 w-[85%] h-full flex flex-col items-center justify-center gap-1.5 md:gap-3 lg:gap-4 py-8 md:py-12">
                <h2 className="text-[#C10706] font-lilita text-base md:text-2xl lg:text-3xl uppercase leading-none mb-1 md:mb-2">
                  HOW TO ENTER THE<br />CHALLENGE
                </h2>
                
                <div className="space-y-1 md:space-y-2 lg:space-y-3 text-[#000000] text-[9px] md:text-[13px] lg:text-[16px] font-normal leading-tight">
                  <p>
                    1. Create a video of your most creative<br className="hidden md:block" />
                    Sedaap Supreme Noodles dish
                  </p>
                  
                  <p>
                    2. Post & Tag our official social page<br className="hidden md:block" />
                    using the hashtag<br />
                    #SedaapSupremeNoodlesReceipeChallenge
                  </p>
                  
                  <p>
                    3. Selection will be based on creativity,<br className="hidden md:block" />
                    engagement and presentation.
                  </p>
                  
                  <p>
                    4. Final 4 selected participants will<br className="hidden md:block" />
                    compete at the festival event.
                  </p>
                  
                  <p className="text-[8px] md:text-[11px] lg:text-[13px] opacity-80 mt-1">
                    5. Vip, backstage access and regular passes<br className="hidden md:block" />
                    will be given to standout participants.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
