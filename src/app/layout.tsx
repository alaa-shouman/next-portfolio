import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald, Coda } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grainEffect";
import Cursor from "@/components/cursor/Cursor";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"
import { SanityLive } from "@/sanity/live";
import { getSiteMetadata, SITE_URL } from "@/sanity/metadata";

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

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteMetadata();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: site.title,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: site.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      title: site.title,
      description: site.ogDescription,
      siteName: `${site.name} Portfolio`,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} - ${site.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.jsonLdDescription,
      images: [site.ogImage],
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      google:
        "google-site-verification=7QfvXZVuFN4MyTK7O-YulAr7vPsJi66NrjpUU7c--Jo",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const site = await getSiteMetadata();

  return (
    <html >
      <body
        className={cn(MainFont.className, font.variable, coda.variable, "bg-black text-gray-900 antialiased")}
      >
        <GrainEffect />
        <Cursor color="#FFF" />
        {children}
        <SanityLive />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: SITE_URL,
              image: site.ogImage,
              jobTitle: site.role,
              description: site.jsonLdDescription,
            }),
          }}
        />
      </body>
    </html>
  );
}
