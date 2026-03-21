"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { CircleNotch } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/app/actions/register";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  gender: z.string().min(1, "Gender is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

interface HeroProps {
  marginClassName: string;
}

export default function Hero({ marginClassName }: HeroProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await registerUser(data);
      
      if (result.success) {
        toast.success("You have successfully registered, check your mail for a confirmation email");
        reset();
      } else {
        toast.error("Registration failed", {
          description: result.error || "Please try again later.",
        });
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="w-full px-6 md:px-20 relative z-10">
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
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/gallery">
              <Button className="bg-[#FFEFAD] text-black hover:bg-white rounded-full px-6 md:px-12 py-2 md:py-3 text-lg md:text-2xl shadow-lg border-none h-auto uppercase shrink-0 mt-2 font-lilita">
                GALLERY
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start relative z-10">
          
          {/* Texts Section */}
          <div className="space-y-6 md:pt-16 md:space-y-12 order-1 overflow-hidden">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-[120px] leading-[0.9] md:leading-[0.85] text-[#FFF113] drop-shadow-2xl tracking-tighter font-normal md:whitespace-nowrap"
            >
              Real Fun<br />
              Real Vibe<br />
              Real Essence
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-[28px] max-w-2xl leading-tight drop-shadow-sm font-normal"
            >
              Get ready to taste, feel, and experience the ultimate fusion of food, music, and culture at the first-ever <span className="text-[#FFF113]">Real Essence Festival by Sedaap Supreme Noodles</span>
            </motion.p>
          </div>

          {/* Form Section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 md:mt-[-95px] flex justify-center md:justify-end w-full md:w-auto order-2"
          >
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#004700] rounded-[3rem] w-full max-w-[400px] md:w-[420px] pt-8 md:pt-10 overflow-hidden shadow-[0_0_80px_#FFF113]/50 flex flex-col border-3 border-white"
            >
              <h2 className="text-xl md:text-2xl text-white uppercase leading-tight text-center mb-6 px-6">
                REGISTER FOR THE BEST<br />DAY OF YOUR LIFE
              </h2>
              
              <div className="bg-white rounded-t-[2.5rem] p-6 md:p-8 space-y-4 w-full flex-grow">
                {[
                  { label: "First Name", id: "firstName", type: "text", auto: "given-name" },
                  { label: "Last Name", id: "lastName", type: "text", auto: "family-name" },
                  { label: "Gender", id: "gender", type: "text", auto: "sex" },
                  { label: "Phone", id: "phone", type: "tel", auto: "tel" },
                  { label: "Email", id: "email", type: "email", auto: "email" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1">
                    <div className={`flex h-[48px] md:h-[52px] rounded-full overflow-hidden border-2 ${errors[field.id as keyof FormData] ? 'border-red-500' : 'border-black'}`}>
                      <div className="bg-black text-white flex items-center justify-center w-[110px] md:w-[130px] shrink-0">
                        <Label className="text-base md:text-lg m-0 leading-none font-lilita">{field.label}</Label>
                      </div>
                      <div className="flex-1 bg-white">
                        <Input 
                          {...register(field.id as keyof FormData)}
                          type={field.type}
                          autoComplete={field.auto}
                          className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 px-4 text-black font-sans text-base md:text-lg bg-transparent" 
                        />
                      </div>
                    </div>
                    {errors[field.id as keyof FormData] && (
                      <p className="text-red-500 text-[10px] md:text-xs font-sans px-4">
                        {errors[field.id as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                ))}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B11217] hover:bg-[#8B0E12] text-white rounded-full py-6 md:py-8 text-xl md:text-3xl shadow-lg mt-4 uppercase transition-transform active:scale-95 leading-none disabled:opacity-70 disabled:active:scale-100 font-lilita"
                >
                  {isSubmitting ? (
                    <CircleNotch size={32} className="animate-spin" />
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
