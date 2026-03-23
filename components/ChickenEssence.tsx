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
      <div className="absolute top-0 bottom-0 -left-[60px] md:-left-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left-2.svg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute top-0 bottom-0 -right-[60px] md:-right-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right-2.svg" alt="" fill className="object-cover object-top" />
      </div>

      <div className="w-full relative z-20 flex flex-col items-center">
        {/* Header */}
        <div className="w-full text-center flex justify-center mb-8 md:mb-12">
          <h2 className="text-[clamp(24px,8vw,100px)] leading-none drop-shadow-sm uppercase whitespace-nowrap">
            real chicken essence
          </h2>
        </div>

        {/* Products Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 w-full px-8 md:px-[6vw] lg:px-[10vw]">
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="rotate-0 md:-rotate-3">
              <Image 
                src="/assets/Tasty Chicken 1.svg" 
                alt="Tasty Chicken" 
                width={982}
                height={915}
                className="w-[clamp(260px,85vw,340px)] md:w-[clamp(350px,40vw,580px)] h-auto"
              />
            </div>
            <span className="text-[clamp(18px,4vw,32px)] text-[#C10706] capitalize rotate-0 md:-rotate-6 -mt-[clamp(40px,12vw,80px)] md:-mt-[clamp(80px,8vw,130px)]">Tasty Chicken</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          >
            <div className="rotate-0 md:rotate-3">
              <Image 
                src="/assets/Rich Spices 1.svg" 
                alt="Rich Spices" 
                width={885}
                height={764}
                className="w-[clamp(260px,85vw,340px)] md:w-[clamp(350px,40vw,580px)] h-auto"
              />
            </div>
            <span className="text-[clamp(18px,4vw,32px)] text-black capitalize rotate-0 md:rotate-6 -mt-[clamp(30px,10vw,60px)] md:-mt-[clamp(60px,6vw,100px)]">Rich Spices</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
