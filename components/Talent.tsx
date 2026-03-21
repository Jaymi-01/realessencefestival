"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Talent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const celebrities = [
    { 
      name: "rybeena", 
      role: "Guest Performing Artist", 
      image: "/assets/Rybeena 1.png", 
      bg: "/assets/Rybeena-background.png",
      color: "#004700",
      desc: "Rising Nigerian artist known for his energetic Afropop and street-hop vibes."
    },
    { 
      name: "omoye cooks", 
      role: "Judge", 
      image: "/assets/Omoye Cooks.png", 
      bg: "/assets/Omoye-background.png",
      color: "#C10706",
      desc: "Bringing expert taste and sharp culinary judgment to the competition."
    },
    { 
      name: "ifyskitchen", 
      role: "Judge", 
      image: "/assets/ify 1.png", 
      bg: "/assets/ify-background.png",
      color: "#0906C1",
      desc: "Master of flavors, here to find the next supreme cooking champion."
    },
    { 
      name: "simi od", 
      role: "Appearance", 
      image: "/assets/Simi 1.png", 
      bg: "/assets/simi-background.png",
      color: "#004700",
      desc: "Special appearance to light up the festival with pure energy."
    },
    { 
      name: "chef pobs", 
      role: "Judge", 
      image: "/assets/Chef Pobs.png", 
      bg: "/assets/Chef Pobs-background.png",
      color: "#C10706",
      desc: "A culinary visionary ready to crown the most talented chef."
    },
    { 
      name: "chike the creator", 
      role: "Appearance", 
      image: "/assets/Chike 1.png", 
      bg: "/assets/chike-background.png",
      color: "#0906C1",
      desc: "Bringing the vibes and creativity to the first-ever Essence Festival."
    },
  ];

  return (
    <section 
      className="relative min-h-[800px] pt-8 md:pt-12 pb-24 overflow-hidden font-lilita text-white"
      style={{ 
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Intersect Borders */}
      <div className="absolute top-0 bottom-0 -left-[49px] md:-left-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left.svg" alt="" fill className="object-cover object-bottom" />
      </div>
      <div className="absolute top-0 bottom-0 -right-[49px] md:-right-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right.svg" alt="" fill className="object-cover object-bottom" />
      </div>

      {/* Main Container */}
      <div className="w-full px-6 md:px-20 relative z-20 flex flex-col">

        {/* Mobile: header + celebrities + mascot stacked */}
        {/* Desktop: mascot left | (header + celebrities) right */}
        <div className="flex flex-col md:flex-row md:items-stretch w-full gap-8">

          {/* Mascot — bottom on mobile, aligns to grid top/bottom on desktop */}
          <motion.div 
            initial={{ x: isMobile ? 0 : -100, y: isMobile ? 50 : 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 order-3 md:order-1 relative w-full md:w-[450px] min-h-[400px] md:min-h-0 md:mt-24"
          >
            <Image 
              src="/assets/MASCOT 1.png" 
              alt="Mascot" 
              fill
              className="object-contain object-bottom drop-shadow-2xl" 
            />
          </motion.div>

          {/* Right side: header + grid */}
          <div className="flex-1 min-w-0 flex flex-col order-1 md:order-2">
            {/* Header Text */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full mb-8"
            >
              <h2 className="text-[#FFF113] text-xl md:text-4xl leading-[0.9] text-center drop-shadow-lg lowercase">
                big names. bold talent.<br />non-stop vibes.
              </h2>
            </motion.div>

            {/* Celebrities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-12 md:gap-y-24">
              {celebrities.map((celeb, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative w-full pb-[110%] flex items-end justify-center mb-4">
                    {/* Celebrity Background */}
                    <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="relative w-[85%] md:w-full h-[85%] md:h-full">
                        <Image src={celeb.bg} alt="" fill className="object-contain" />
                      </div>
                    </div>
                    {/* Portrait */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] md:w-[80%] h-[80%] md:h-[95%] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden z-10 shadow-2xl transition-transform group-hover:-translate-y-2">
                      <Image src={celeb.image} alt={celeb.name} fill className="object-contain md:object-cover object-top" />
                    </div>

                    {/* Name Blob - positioned relative to the container bottom */}
                    <div className="absolute -bottom-[20%] md:-bottom-[45%] left-1/2 -translate-x-1/2 w-[75%] md:w-[98%] h-20 md:h-44 flex flex-col items-center justify-center z-20">
                      <div className="absolute inset-0 z-0">
                        <Image src="/assets/Mask group.png" alt="" fill className="object-stretch" />
                      </div>
                      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-2 md:px-6">
                        <h3 
                          className="text-[7px] md:text-[18px] uppercase leading-none mb-0.5 md:mb-1 font-lilita"
                          style={{ color: celeb.color }}
                        >
                          {celeb.name}
                        </h3>
                        <p className="text-[5.5px] md:text-[10px] text-black uppercase font-bold leading-none mb-0.5 md:mb-1">
                          {celeb.role}
                        </p>
                        <p className="text-[8px] md:text-[12px] text-black/70 leading-tight line-clamp-none font-sans lowercase max-w-[95%] mx-auto">
                          {celeb.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
