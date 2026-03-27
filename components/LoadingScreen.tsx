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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="relative w-full h-full"
          >
            <Image 
              src="/assets/SPLASH 1.png" 
              alt="Real Essence Festival" 
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}