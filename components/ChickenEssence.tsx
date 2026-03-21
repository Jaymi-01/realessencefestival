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
      {/* Intersect Borders */}
      <div className="absolute top-0 bottom-0 -left-[49px] md:-left-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left-2.svg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute top-0 bottom-0 -right-[49px] md:-right-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right-2.svg" alt="" fill className="object-cover object-top" />
      </div>

      <div className="w-full relative z-20 flex flex-col items-center">
        {/* Header */}
        <div className="w-full text-center flex justify-center mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[100px] leading-none drop-shadow-sm uppercase whitespace-nowrap">
            real chicken essence
          </h2>
        </div>

        {/* Products Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 w-full px-4 md:px-8">
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 300 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="rotate-0 md:-rotate-3">
              <Image 
                src="/assets/Tasty Chicken 1.svg" 
                alt="Tasty Chicken" 
                width={982}
                height={915}
                className="w-[340px] md:w-[580px] h-auto"
              />
            </div>
            <span className="text-lg md:text-3xl text-[#C10706] uppercase rotate-0 md:-rotate-6 -mt-16 md:-mt-36">Tasty Chicken</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              scale: { type: "spring", stiffness: 300 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="rotate-0 md:rotate-3">
              <Image 
                src="/assets/Rich Spices 1.svg" 
                alt="Rich Spices" 
                width={885}
                height={764}
                className="w-[340px] md:w-[580px] h-auto"
              />
            </div>
            <span className="text-lg md:text-3xl text-black uppercase rotate-0 md:rotate-6 -mt-12 md:-mt-28">Rich Spices</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
