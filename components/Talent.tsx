"use client";

import Image from "next/image";

export default function Talent() {
  const celebrities = [
    { name: "rybeena", role: "Guest Performing Artist", image: "/assets/Rybeena 1.png", bg: "/assets/Rybeena-background.png" },
    { name: "omoye cooks", role: "Judge", image: "/assets/Omoye Cooks.png", bg: "/assets/Omoye-background.png" },
    { name: "ifyskitchen", role: "Judge", image: "/assets/ify 1.png", bg: "/assets/ify-background.png" },
    { name: "simi od", role: "Appearance", image: "/assets/Simi 1.png", bg: "/assets/simi-background.png" },
    { name: "chef pobs", role: "Judge", image: "/assets/Chef Pobs.png", bg: "/assets/Chef Pobs-background.png" },
    { name: "chike the creator", role: "Appearance", image: "/assets/Chike 1.png", bg: "/assets/chike-background.png" },
  ];

  return (
    <section 
      className="relative min-h-[1000px] pt-8 md:pt-12 pb-24 overflow-hidden font-lilita text-white"
      style={{ 
        backgroundImage: 'url("/assets/BG PATTERN 3-03-03 1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Intersect Borders */}
      <div className="absolute top-0 -left-[49px] md:left-0 h-full w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-left.svg" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute top-0 -right-[49px] md:right-0 h-full w-[80px] md:w-[69px] z-30 pointer-events-none overflow-hidden">
        <Image src="/assets/Intersect-right.svg" alt="" fill className="object-cover object-top" />
      </div>

      {/* Main Container */}
      <div className="w-full px-16 md:px-[69px] relative z-20 flex flex-col">

        {/* Mobile: header + celebrities + mascot stacked */}
        {/* Desktop: mascot left | (header + celebrities) right */}
        <div className="flex flex-col md:flex-row md:items-stretch w-full gap-8">

          {/* Mascot — bottom on mobile, aligns to grid top/bottom on desktop */}
          <div className="shrink-0 order-3 md:order-1 md:flex md:items-stretch">
            <Image 
              src="/assets/MASCOT 1.png" 
              alt="Mascot" 
              width={380} 
              height={520} 
              className="object-contain object-bottom drop-shadow-2xl" 
            />
          </div>

          {/* Right side: header + grid */}
          <div className="flex-1 min-w-0 flex flex-col order-1 md:order-2">
            {/* Header Text */}
            <div className="w-full mb-8">
              <h2 className="text-[#FFF113] text-xl md:text-7xl leading-[0.9] text-center drop-shadow-lg lowercase">
                big names. bold talent.<br />non-stop vibes.
              </h2>
            </div>

            {/* Celebrities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
              {celebrities.map((celeb, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-full pb-[110%] flex items-end justify-center mb-4">
                    {/* Celebrity Background */}
                    <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image src={celeb.bg} alt="" fill className="object-contain" />
                    </div>
                    {/* Portrait */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] md:w-[80%] h-[90%] md:h-[95%] rounded-[2rem] overflow-hidden z-10 shadow-2xl transition-transform group-hover:-translate-y-2">
                      <Image src={celeb.image} alt={celeb.name} fill className="object-contain md:object-cover object-top" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-xl text-[#FFF113] uppercase leading-none text-center">{celeb.name}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}