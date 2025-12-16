import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald, Coda } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grainEffect";
import Cursor from "@/components/cursor/Cursor";
import { ReactNode } from "react";

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
  metadataBase: new URL("https://alaashouman.me"),
  title: {
    default: "Alaa Shouman | Software Engineer & Full Stack Developer",
    template: "%s | Alaa Shouman",
  },
  description:
    "Experienced Software Engineer specializing in React, React Native, Laravel, and Node.js. Full Stack Developer creating dynamic web and mobile applications.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "React Native Developer",
    "Full Stack Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Alaa Shouman",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Alaa Shouman" }],
  creator: "Alaa Shouman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alaashouman.me",
    title: "Alaa Shouman | Software Engineer & Full Stack Developer",
    description:
      "Experienced Software Engineer specializing in React, React Native, Laravel, and Node.js. Building high-quality web and mobile applications.",
    siteName: "Alaa Shouman Portfolio",
    images: [
      {
        url: "/assets/images/profile.JPG",
        width: 1200,
        height: 630,
        alt: "Alaa Shouman - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alaa Shouman | Software Engineer & Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, React Native, Laravel, and Node.js.",
    images: ["/assets/images/profile.JPG"],
    creator: "@alaashouman", // Assuming this handle, or we can remove if unknown. I'll remove it to be safe or leave generic.
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html >
      <body
        className={cn(MainFont.className, font.variable, coda.variable, "bg-black text-gray-900 antialiased")}
      >
        <GrainEffect />
        <Cursor color="#FFF" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alaa Shouman",
              url: "https://alaashouman.me",
              image: "https://alaashouman.me/assets/images/profile.JPG",
              jobTitle: "Software Engineer",
              description:
                "Full Stack Developer specializing in React, React Native, Laravel, and Node.js.",
            }),
          }}
        />
      </body>
    </html>
  );
}
