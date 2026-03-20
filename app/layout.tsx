import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Lilita_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});
const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'], variable: '--font-lilita' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Essence Festival",
  description: "Experience the ultimate fusion of food, music, and culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, lilitaOne.variable, "font-lilita")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
