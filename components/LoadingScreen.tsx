"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#B11217]"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <Image 
              src="/assets/BG-PATTERN 1.svg" 
              alt="" 
              fill 
              className="object-cover" 
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 1],
              opacity: 1 
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="relative z-10 w-[280px] h-[140px] md:w-[500px] md:h-[250px]"
          >
            <Image 
              src="/assets/LOGO LOCKUP 1.png" 
              alt="Real Essence Festival" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Loading Bar */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-[#FFF113]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
