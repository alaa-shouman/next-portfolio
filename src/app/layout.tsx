import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald,Coda } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grainEffect";
import Cursor from "@/components/cursor/Cursor";

const MainFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});
const font = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const coda = Coda({
  variable: "--font-coda",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Dev Alaa Shouman",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body
        className={cn(MainFont.className, font.variable,coda.variable, "bg-black text-gray-900 antialiased")}
      >
        <GrainEffect />
        <Cursor color="#FFF" />
        {children}
      </body>
    </html>
  );
}
