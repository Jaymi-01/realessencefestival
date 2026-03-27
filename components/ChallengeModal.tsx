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
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center text-center p-2 font-lilita leading-tight text-[9px] md:text-[11px] transition-colors duration-500 overflow-hidden"
        style={{
          background: "radial-gradient(circle, #027402 0%, #002C00 100%)",
          color: isYellow ? "#FFF113" : "#FFFFFF",
          border: "2px solid #FFF113"
        }}
      >
        <span className="relative z-10">HOW TO<br/>ENTER</span>
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
              className="relative w-full max-w-[450px] aspect-square flex flex-col items-center text-center"
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
              <div className="relative z-10 w-[80%] h-full flex flex-col items-center justify-center gap-2 md:gap-3 py-12">
                <h2 className="text-[#C10706] font-lilita text-lg md:text-2xl uppercase leading-none mb-2">
                  HOW TO ENTER THE<br />CHALLENGE
                </h2>
                
                <div className="space-y-1.5 md:space-y-2 text-[#000000] text-[10px] md:text-[13px] font-normal leading-tight">
                  <p>
                    1. Create a video of your most creative<br />
                    Sedaap Supreme Noodles dish
                  </p>
                  
                  <p>
                    2. Post & Tag our official social page<br />
                    using the hashtag<br />
                    #SedaapSupremeNoodlesReceipeChallenge
                  </p>
                  
                  <p>
                    3. Selection will be based on creativity,<br />
                    engagement and presentation.
                  </p>
                  
                  <p>
                    4. Final 4 selected participants will<br />
                    compete at the festival event.
                  </p>
                  
                  <p className="text-[9px] md:text-[11px] opacity-80 mt-1">
                    5. Vip, backstage access and regular passes<br />
                    will be given to standout participants.
                  </p>
                </div>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#027402] text-white font-lilita py-1.5 px-6 rounded-full hover:bg-[#004700] transition-colors uppercase text-[10px] md:text-xs shadow-md mt-2"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
