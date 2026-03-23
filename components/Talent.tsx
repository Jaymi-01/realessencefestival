"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TalentProps {
  marginClassName?: string;
}

export default function Talent({ marginClassName }: TalentProps) {
  const celebrities = [
    { 
      name: "Ayomaff", 
      role: "Guest Performing Artist", 
      image: "/assets/Ayomaff 1.png", 
      bg: "/assets/Rybeena-background.png",
      color: "#004700",
      desc: "Ayo Maff is a Nigerian Afrobeats artist who rose to fame with “Dealer” featuring Fireboy DML."
    },
    { 
      name: "omoye cooks", 
      role: "Judge", 
      image: "/assets/Omoye Cooks.png", 
      bg: "/assets/Omoye-background.png",
      color: "#C10706",
      desc: "Omoye Isabota (OmoyeCooks) is a Nigerian chef and food creator who will host the masterclass and serve as a competition judge."
    },
    { 
      name: "ifyskitchen", 
      role: "Judge", 
      image: "/assets/ify 1.png", 
      bg: "/assets/ify-background.png",
      color: "#0906C1",
      desc: "IfysKitchen is a Nigerian food storyteller and creator known for sharing simple, flavorful African recipes that celebrate culture and inspire home cooks."
    },
    { 
      name: "simi od", 
      role: "Appearance", 
      image: "/assets/Simi 1.png", 
      bg: "/assets/simi-background.png",
      color: "#004700",
      desc: "simi_od is a Nigerian content creator known for relatable lifestyle and food mini-vlogs with an authentic, engaging style."
    },
    { 
      name: "chef pobs", 
      role: "Judge", 
      image: "/assets/Chef Pobs.png", 
      bg: "/assets/Chef Pobs-background.png",
      color: "#C10706",
      desc: "Chef Pobs is a Nigerian chef known for blending local flavors with modern culinary creativity."
    },
    { 
      name: "chike the creator", 
      role: "Appearance", 
      image: "/assets/Chike 1.png", 
      bg: "/assets/chike-background.png",
      color: "#0906C1",
      desc: "chikethecreator is a Nigerian content creator known for engaging, creative storytelling."
    },
  ];

  return (
    <section 
      className="relative min-h-[800px] pt-12 pb-32 overflow-hidden font-lilita text-white"
      style={{ 
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Intersect Borders */}
      <div className="absolute top-0 bottom-0 -left-8 w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left.svg" alt="" fill className="object-cover object-bottom" />
      </div>
      <div className="absolute top-0 bottom-0 -right-8 w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right.svg" alt="" fill className="object-cover object-bottom" />
      </div>

      {/* Main Container */}
      <div className={`max-w-[1440px] mx-auto w-full relative z-20 flex flex-col ${marginClassName || "px-5 md:px-[6vw] lg:px-[10vw]"}`}>

        {/* Content Row: Mascot Left | Talent Grid Right */}
        <div className="flex flex-col md:flex-row items-stretch w-full gap-8">

          {/* Mascot — Responsive sizing for mobile vs tablet/desktop */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 relative w-full md:w-[clamp(250px,30vw,450px)] min-h-[300px] md:min-h-0 order-2 md:order-1 mt-12 md:mt-0"
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
            {/* Header Text - Centered above the grid */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full mb-12 text-center"
            >
              <h2 className="text-[#FFF113] text-[clamp(28px,4vw,60px)] leading-[0.9] drop-shadow-lg lowercase">
                big names. bold talent.<br />non-stop vibes.
              </h2>
            </motion.div>

            {/* Celebrities Grid - 2 columns on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
              {celebrities.map((celeb, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col items-center group relative"
                >
                  {/* Portrait Section */}
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    {/* Celebrity Background */}
                    <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image src={celeb.bg} alt="" fill className="object-contain" />
                      </div>
                    </div>
                    {/* Portrait */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[95%] rounded-[2rem] overflow-hidden z-10 shadow-2xl transition-transform group-hover:-translate-y-2">
                      <Image src={celeb.image} alt={celeb.name} fill className="object-cover object-top" />
                    </div>
                  </div>

                  {/* Name Blob - Responsive overlap */}
                  <div className="relative -mt-[45%] md:-mt-[40%] lg:-mt-[40%] w-[115%] h-auto min-h-[clamp(140px,14vw,200px)] flex flex-col items-center justify-center z-20 py-[clamp(20px,2vw,40px)]">
                    <div className="absolute inset-0 z-0">
                      <Image src="/assets/Mask group.png" alt="" fill className="w-full h-full" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                      <div className="px-[15%] w-full mb-1">
                        <h3 
                          className="text-[clamp(14px,1.6vw,20px)] uppercase leading-[1.1] font-lilita"
                          style={{ color: celeb.color }}
                        >
                          {celeb.name}
                        </h3>
                      </div>
                      <div className="px-[10%] w-full">
                        <p className="text-[clamp(8px,0.7vw,10px)] text-black uppercase font-bold leading-none mb-1">
                          {celeb.role}
                        </p>
                        <p className="text-[clamp(9px,0.9vw,11px)] text-black/80 leading-tight font-sans lowercase max-w-[95%] mx-auto">
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
