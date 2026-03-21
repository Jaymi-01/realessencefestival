"use client";

import Image from "next/image";
import { 
  TiktokLogo, 
  InstagramLogo, 
  XLogo, 
  FacebookLogo, 
  YoutubeLogo, 
  MapPin, 
  Envelope, 
  Phone,
  CaretUp
} from "@phosphor-icons/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="relative pt-16 pb-8 text-white font-lilita"
      style={{ 
        backgroundColor: '#004700',
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-row justify-between items-start relative gap-x-2">
          
          {/* Contact Column - Left Aligned */}
          <div className="flex flex-col text-left max-w-[60%] md:max-w-md">
            <h4 className="font-lilita text-[12px] md:text-2xl mb-2 md:mb-6 uppercase text-[#FFF113]">CONTACT</h4>
            <div className="flex flex-col gap-1.5 md:gap-4 text-[8px] md:text-base font-sans">
              <div className="flex items-start gap-1.5 md:gap-3">
                <MapPin weight="regular" className="shrink-0 mt-0.5 w-3 h-3 md:w-6 md:h-6" />
                <p className="leading-tight">Seedap Supreme Noodles Plot 4 - 6, Block 1, Industrial Opic Estate, Agbara, Ogun State.</p>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3">
                <Envelope weight="regular" className="shrink-0 w-3 h-3 md:w-6 md:h-6" />
                <p>info@sedaapsupremenoodles.ng</p>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3">
                <Phone weight="regular" className="shrink-0 w-3 h-3 md:w-6 md:h-6" />
                <p>0902 470 7051</p>
              </div>
            </div>
          </div>

          {/* Follow Us Column - Right Aligned block */}
          <div className="flex flex-col items-end flex-1">
            {/* Desktop: Centered text over icons | Mobile: Right-aligned text over icons */}
            <div className="flex flex-col items-end md:items-center">
              <h4 className="font-lilita text-[12px] md:text-2xl mb-2 md:mb-6 uppercase text-[#FFF113]">FOLLOW US</h4>
              <div className="flex flex-wrap justify-end md:justify-center gap-1.5 md:gap-4 mb-12">
                <a href="#" className="hover:opacity-80 transition-opacity"><TiktokLogo weight="regular" className="w-4 h-4 md:w-8 md:h-8" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><InstagramLogo weight="regular" className="w-4 h-4 md:w-8 md:h-8" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><XLogo weight="regular" className="w-4 h-4 md:w-8 md:h-8" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><FacebookLogo weight="regular" className="w-4 h-4 md:w-8 md:h-8" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><YoutubeLogo weight="regular" className="w-4 h-4 md:w-8 md:h-8" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Up Button - Positioned specifically according to design */}
        <button 
          onClick={scrollToTop}
          className="absolute right-0 bottom-12 md:bottom-0 bg-[#C10706] p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors active:scale-95 group"
        >
          <CaretUp size={24} weight="regular" className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Copyright */}
        <div className="mt-16 pt-8 text-center text-[10px] md:text-sm font-medium font-sans">
          <p>© 2026 Sedaap Supreme Noodles. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
