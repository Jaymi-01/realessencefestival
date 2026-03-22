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
  marginClassName?: string;
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
    <section className="relative bg-[#B11217] min-h-screen flex flex-col pt-[4vh] pb-[4vh] overflow-hidden font-lilita text-white">
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

      <div className="max-w-[1440px] mx-auto w-full px-5 md:px-[6vw] lg:px-[10vw] relative z-10 flex flex-col flex-grow justify-between">
        {/* Header Row */}
        <div className="flex justify-between items-center sm:items-start w-full relative z-20 pt-2 sm:pt-0">
          <div className="w-[clamp(120px,35vw,220px)] sm:w-[clamp(180px,20vw,400px)] aspect-[2.1/1] relative">
            <Image 
              src="/assets/LOGO LOCKUP 1.png" 
              alt="Logo" 
              fill
              className="object-contain object-left-top" 
            />
          </div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-[-10px] sm:mt-[2vh]"
          >
            <Link href="/gallery">
              <Button className="bg-[#FFEFAD] text-black hover:bg-white rounded-[2rem] px-[clamp(0.8rem,2.5vw,2.5rem)] py-[clamp(0.3rem,0.8vw,0.6rem)] text-[clamp(0.8rem,2.2vw,1.4rem)] shadow-lg border-none h-auto uppercase font-lilita tracking-wider">
                GALLERY
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[5vh] lg:gap-[4vw] items-center relative z-10 flex-grow py-[4vh] sm:py-[6vh] lg:py-[4vh]">
          
          {/* Texts Section */}
          <div className="flex flex-col justify-center space-y-[0.5vh] text-center lg:text-left items-center lg:items-start mt-4 sm:mt-0">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[clamp(42px,12vw,90px)] leading-[0.9] text-[#FFF113] drop-shadow-2xl tracking-tighter font-normal uppercase whitespace-nowrap"
            >
              Real Fun
            </motion.div>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(42px,12vw,90px)] leading-[0.9] text-[#FFF113] drop-shadow-2xl tracking-tighter font-normal uppercase whitespace-nowrap"
            >
              Real Vibe
            </motion.div>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(42px,12vw,90px)] leading-[0.9] text-[#FFF113] drop-shadow-2xl tracking-tighter font-normal uppercase whitespace-nowrap"
            >
              Real Essence
            </motion.div>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[clamp(14px,3.5vw,22px)] max-w-[500px] leading-tight drop-shadow-sm font-normal pt-[2vh] sm:pt-[3vh] px-4 sm:px-0"
            >
              Get ready to taste, feel, and experience the ultimate fusion of food, music, and culture at the first-ever <span className="text-[#FFF113]">Real Essence Festival by Sedaap Supreme Noodles</span>
            </motion.p>
          </div>

          {/* Form Section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end w-full items-center pb-8 lg:pb-0"
          >
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#004700] rounded-[2.5rem] w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[400px] pt-8 sm:pt-[4vh] overflow-hidden shadow-[0_0_60px_#FFF113]/40 flex flex-col border-[3px] border-white"
            >
              <h2 className="text-[clamp(18px,5vw,24px)] text-white uppercase leading-tight text-center mb-6 sm:mb-[3vh] px-6 tracking-tight">
                REGISTER FOR THE BEST<br className="hidden sm:block" /> DAY OF YOUR LIFE
              </h2>
              
              <div className="bg-white rounded-t-[2.5rem] p-6 sm:p-7 space-y-[1.5vh] w-full flex-grow">
                {[
                  { label: "First Name", id: "firstName", type: "text", auto: "given-name" },
                  { label: "Last Name", id: "lastName", type: "text", auto: "family-name" },
                  { label: "Gender", id: "gender", type: "text", auto: "sex" },
                  { label: "Phone", id: "phone", type: "tel", auto: "tel" },
                  { label: "Email", id: "email", type: "email", auto: "email" },
                ].map((field) => (
                  <div key={field.id} className="space-y-0.5">
                    <div className={`flex h-[42px] sm:h-[clamp(40px,5vh,48px)] rounded-full overflow-hidden border-2 ${errors[field.id as keyof FormData] ? 'border-red-500' : 'border-black'}`}>
                      <div className="bg-black text-white flex items-center justify-center w-[100px] sm:w-[clamp(90px,10vw,120px)] shrink-0">
                        <Label className="text-[14px] sm:text-[clamp(12px,1.1vw,16px)] m-0 leading-none font-lilita">{field.label}</Label>
                      </div>
                      <div className="flex-1 bg-white">
                        <Input 
                          {...register(field.id as keyof FormData)}
                          type={field.type}
                          autoComplete={field.auto}
                          className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 px-4 text-black font-sans text-[14px] sm:text-[clamp(14px,1.1vw,16px)] bg-transparent" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C10706] text-white rounded-full py-7 sm:py-[clamp(1.5rem,3.5vh,2.5rem)] text-[20px] sm:text-[clamp(18px,1.8vw,24px)] shadow-lg mt-2 sm:mt-[1vh] uppercase leading-none disabled:opacity-70 font-lilita h-auto"
                >
                  {isSubmitting ? (
                    <CircleNotch size={24} className="animate-spin" />
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
