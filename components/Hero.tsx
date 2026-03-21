"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HeroProps {
  marginClassName: string;
}

export default function Hero({ marginClassName }: HeroProps) {
  return (
    <section className="relative bg-[#B11217] min-h-screen md:min-h-[1000px] flex flex-col pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden font-lilita text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/assets/BG-PATTERN 1.svg" 
          alt="" 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw"
        />
      </div>

      <div className={`w-full px-6 md:px-20 relative z-10`}>
        {/* Header Row */}
        <div className="flex justify-between items-center md:items-start w-full relative z-20 mb-10 md:mb-0">
          <div className="w-[180px] h-[90px] md:w-[380px] md:h-[190px] relative">
            <Image 
              src="/assets/LOGO LOCKUP 1.png" 
              alt="Logo" 
              fill
              className="object-contain object-left-top" 
              sizes="(max-width: 768px) 180px, 380px"
            />
          </div>
          <Link href="/gallery">
            <Button className="bg-[#FFEFAD] text-black hover:bg-white rounded-full px-6 md:px-12 py-2 md:py-3 text-lg md:text-2xl shadow-lg border-none h-auto uppercase shrink-0 mt-2">
              GALLERY
            </Button>
          </Link>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start relative z-10">
          
          {/* Texts Section */}
          <div className="space-y-6 md:pt-16 md:space-y-12 order-1">
            <h1 className="text-6xl sm:text-8xl md:text-[120px] leading-[0.9] md:leading-[0.85] text-[#FFF113] drop-shadow-2xl tracking-tighter font-normal md:whitespace-nowrap">
              Real Fun<br />
              Real Vibe<br />
              Real Essence
            </h1>
            <p className="text-xl sm:text-2xl md:text-[28px] max-w-2xl leading-tight drop-shadow-sm font-normal">
              Get ready to taste, feel, and experience the ultimate fusion of food, music, and culture at the first-ever <span className="text-[#FFF113]">Real Essence Festival by Sedaap Supreme Noodles</span>
            </p>
          </div>

          {/* Form Section: Replicated Layered Design with White Border */}
          <div className="mt-10 md:mt-[-95px] flex justify-center md:justify-end w-full md:w-auto order-2">
            {/* Base Green Container with White Border */}
            <div className="bg-[#004700] rounded-[3rem] w-full max-w-[400px] md:w-[420px] pt-8 md:pt-10 overflow-hidden shadow-[0_0_80px_#FFF113]/50 flex flex-col border-3 border-white">
              <h2 className="text-xl md:text-2xl text-white uppercase leading-tight text-center mb-6 px-6">
                REGISTER FOR THE BEST<br />DAY OF YOUR LIFE
              </h2>
              
              {/* White Container placed "on top" */}
              <div className="bg-white rounded-t-[2.5rem] p-6 md:p-8 space-y-4 w-full flex-grow">
                {["First Name", "Last Name", "Gender", "Phone", "Email"].map((label) => (
                  <div key={label} className="flex h-[48px] md:h-[52px] rounded-full overflow-hidden border-2 border-black">
                    <div className="bg-black text-white flex items-center justify-center w-[110px] md:w-[130px] shrink-0">
                      <Label className="text-base md:text-lg m-0 leading-none font-lilita">{label}</Label>
                    </div>
                    <div className="flex-1 bg-white">
                      <Input className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 px-4 text-black font-sans text-base md:text-lg bg-transparent" />
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-[#B11217] hover:bg-[#8B0E12] text-white rounded-full py-6 md:py-8 text-xl md:text-3xl shadow-lg mt-4 uppercase transition-transform active:scale-95 leading-none">
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
