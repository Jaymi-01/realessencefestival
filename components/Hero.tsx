"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface HeroProps {
  marginClassName: string;
}

export default function Hero({ marginClassName }: HeroProps) {
  return (
    <section className="relative bg-[#B11217] min-h-[1000px] flex flex-col pt-12 pb-24 overflow-hidden font-lilita">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/assets/BG-PATTERN 1.svg" 
          alt="" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      <div className={`max-w-[1500px] mx-auto w-full ${marginClassName} relative z-10`}>
        {/* Header Area */}
        <div className="flex justify-between items-start w-full relative z-20">
          {/* Logo */}
          <div className="w-[380px] h-[190px] relative">
            <Image 
              src="/assets/LOGO LOCKUP 1.png" 
              alt="Logo" 
              fill
              className="object-contain object-left-top" 
            />
          </div>
          {/* Gallery Button at the very top */}
          <Button className="bg-[#FFEFAD] text-black hover:bg-white rounded-full px-12 py-3 text-2xl shadow-lg border-none h-auto uppercase font-lilita">
            GALLERY
          </Button>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr] gap-12 items-start relative z-10">
          {/* Texts Section */}
          <div className="pt-16 space-y-12">
            <h1 className="text-[120px] leading-[0.85] text-[#FFF113] drop-shadow-2xl tracking-tighter font-lilita font-normal whitespace-nowrap">
              Real Fun<br />
              Real Vibe<br />
              Real Essence
            </h1>
            {/* Paragraph - Reduced from 34px to 28px */}
            <p className="text-[28px] font-lilita max-w-2xl leading-[1.2] text-white drop-shadow-sm font-normal">
              Get ready to taste, feel, and experience the ultimate fusion of food, music, and culture at the first-ever <span className="text-[#FFF113] font-normal">Real Essence Festival by Sedaap Supreme Noodles</span>
            </p>
          </div>

          <div className="flex justify-end mt-[-95px]">
            <Card className="bg-white border-none rounded-[3rem] w-[380px] overflow-hidden shadow-[0_0_80px_#FFF113]/50">
              <div className="bg-[#004A1F] py-8 text-center px-6">
                <h2 className="text-2xl text-white uppercase leading-tight font-lilita">
                  REGISTER FOR THE BEST<br />DAY OF YOUR LIFE
                </h2>
              </div>
              <CardContent className="p-8 space-y-4 bg-white">
                {["First Name", "Last Name", "Gender", "Phone", "Email"].map((label) => (
                  <div key={label} className="flex h-[48px] rounded-full overflow-hidden border-2 border-black">
                    <div className="bg-black text-white flex items-center justify-center w-[120px] shrink-0">
                      <Label className="text-lg m-0 leading-none font-lilita">{label}</Label>
                    </div>
                    <div className="flex-1 bg-white">
                      <Input className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 px-4 text-black font-lilita text-lg bg-transparent" />
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-[#B11217] hover:bg-[#8B0E12] text-white rounded-full py-5 text-2xl shadow-lg mt-4 uppercase font-lilita transition-transform active:scale-95">
                  SUBMIT
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
