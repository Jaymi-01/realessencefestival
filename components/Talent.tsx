"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TalentProps {
  marginClassName?: string;
}

interface Celebrity {
  name: string;
  role: string;
  image: string;
  bg: string;
  color: string;
  desc: string;
}

const CelebCard = ({ celeb, i }: { celeb: Celebrity; i: number }) => (
  <motion.div
    key={i}
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * i }}
    className="flex flex-col items-center group relative mb-8 md:mb-0"
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] md:w-[80%] h-[95%] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden z-10 shadow-2xl transition-transform group-hover:-translate-y-2">
        <Image src={celeb.image} alt={celeb.name} fill className="object-cover object-top" />
      </div>
    </div>

    {/* Name Blob */}
    <div className="relative -mt-[48%] md:-mt-[40%] lg:-mt-[40%] w-full md:w-[105%] h-auto min-h-[clamp(120px,35vw,220px)] flex flex-col items-center justify-center z-20 py-4 md:py-[clamp(20px,2vw,40px)]">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/Mask group.png" alt="" fill className="w-full h-full" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <div className="px-[12%] md:px-[18%] w-full mb-0.5 md:mb-1">
          <h3
            className="text-[clamp(11px,3vw,19px)] uppercase leading-[1] font-lilita"
            style={{ color: celeb.color }}
          >
            {celeb.name}
          </h3>
        </div>
        <div className="px-[8%] md:px-[12%] w-full">
          <p className="text-[clamp(7px,1.5vw,11px)] text-black uppercase font-bold leading-none mb-0.5 md:mb-1">
            {celeb.role}
          </p>
          <p className="text-[clamp(8px,2vw,13px)] text-black/80 leading-tight font-sans max-w-[92%] mx-auto">
            {celeb.desc}
          </p>
        </div>
      </div>

      {/* Decorative Spices */}
      <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 z-30 pointer-events-none w-20 md:w-32 h-20 md:h-32">
        <div className="relative w-full h-full">
          <div className="absolute bottom-2 md:bottom-4 left-6 md:left-12 w-10 md:w-16 h-10 md:h-16">
            <Image src="/assets/Rich Spices 1.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-0 md:left-2 w-10 md:w-16 h-10 md:h-16 z-10">
            <Image src="/assets/Tasty Chicken 1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Talent({ marginClassName }: TalentProps) {
  const celebrities: Celebrity[] = [
    {
      name: "Ayomaff",
      role: "Guest Performing Artist",
      image: "/assets/Ayomaff 1.png",
      bg: "/assets/Rybeena-background.png",
      color: "#004700",
      desc: "Ayo Maff is a Nigerian Afrobeats artist who rose to fame with 'Dealer' featuring Fireboy DML.",
    },
    {
      name: "YOUR FOOD GIRL",
      role: "Judge",
      image: "/assets/Yourfoodgirl.png",
      bg: "/assets/Omoye-background.png",
      color: "#C10706",
      desc: "Cynthia Salami is a digital creator and Nigerian food advocate, showcasing West African cuisine and bringing Nigeria's bold flavors to a global audience.",
    },
    {
      name: "ify's kitchen",
      role: "Judge",
      image: "/assets/ify 1.png",
      bg: "/assets/ify-background.png",
      color: "#0906C1",
      desc: "Ify's Kitchen is a Nigerian food storyteller and creator known for sharing simple, flavorful African recipes that celebrate culture and inspire home cooks.",
    },
    {
      name: "simi od",
      role: "Appearance",
      image: "/assets/Simi 1.png",
      bg: "/assets/simi-background.png",
      color: "#004700",
      desc: "Simi_od is a Nigerian content creator known for relatable lifestyle and food mini-vlogs with an authentic, engaging style.",
    },
    {
      name: "chef pobs",
      role: "Judge",
      image: "/assets/Chef Pobs.png",
      bg: "/assets/Chef Pobs-background.png",
      color: "#C10706",
      desc: "Chef Pobs is a Nigerian chef known for blending local flavors with modern culinary creativity.",
    },
    {
      name: "emeneks",
      role: "Judge",
      image: "/assets/Emeneks.png",
      bg: "/assets/Chef Pobs-background.png",
      color: "#C10706",
      desc: "Emeka Nwagbaraocha is a Nigerian actor and scriptwriter best known for playing Frank in Netflix's Far From Home.",
    },
    {
      name: "chike the creator",
      role: "Appearance",
      image: "/assets/Chike 1.png",
      bg: "/assets/chike-background.png",
      color: "#0906C1",
      desc: "chike the creator is a Nigerian content creator known for engaging, creative storytelling.",
    },
  ];

  const topRow = celebrities.slice(0, 3);
  const bottomRow = celebrities.slice(3);

  return (
    <section
      className="relative min-h-[800px] pt-8 md:pt-12 pb-24 md:pb-32 overflow-hidden font-lilita text-white"
      style={{
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Intersect Borders */}
      <div className="absolute inset-y-0 -left-[60px] md:-left-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left.svg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute inset-y-0 -right-[60px] md:-right-8 w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right.svg" alt="" fill className="object-cover object-top" />
      </div>

      {/* Main Container */}
      <div className={`max-w-[1536px] mx-auto w-full relative z-20 flex flex-col px-6 md:px-8 lg:px-12 ${marginClassName ?? ""}`}>
        <div className="flex flex-col md:flex-row items-stretch w-full gap-4 md:gap-8">

          {/* Right side: Header + Grid */}
          <div className="flex-1 min-w-0 flex flex-col order-1 md:order-2 lg:flex-[5]">
            {/* Header */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full mb-8 md:mb-12 text-center"
            >
              <h2 className="text-[#FFF113] text-[clamp(18px,4vw,48px)] leading-[0.9] drop-shadow-lg uppercase">
                big names. bold talent.<br />non-stop vibes.
              </h2>
            </motion.div>

            {/* Celebrity Grid: 2-2-2-1 on mobile, 3 then 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-10 gap-y-12 mb-4 md:mb-12">
              {celebrities.map((celeb, i) => (
                <div 
                  key={celeb.name} 
                  className={`
                    ${i < 3 ? 'lg:col-span-4' : 'lg:col-span-3'}
                    ${i === 6 ? 'col-span-2 w-1/2 mx-auto lg:w-full lg:mx-0' : 'col-span-1'}
                  `}
                >
                  <CelebCard celeb={celeb} i={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 relative w-full md:w-[180px] lg:w-[220px] min-h-[300px] md:min-h-0 order-2 md:order-1 mt-12 md:mt-0"
          >
            <Image
              src="/assets/MASCOT 1.png"
              alt="Mascot"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
