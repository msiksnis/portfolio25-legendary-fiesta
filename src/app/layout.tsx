import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devmarty.com"),
  keywords: [
    "web developer Oslo",
    "frontend developer Oslo",
    "React developer Norway",
    "Next.js developer",
    "freelance web developer",
    "web developer portfolio",
    "hire web developer",
    "tailwindcss developer",
    "javascript developer",
    "typescript developer",
    "build websites Oslo",
    "Norwegian web developer",
    "frontend portfolio",
    "webutvikler Oslo",
    "frontend utvikler Oslo",
    "frontend utvikler Norge",
    "React utvikler Norge",
    "Next.js utvikler",
    "frilans webutvikler",
    "webutvikler portefølje",
    "ansett webutvikler",
    "tailwindcss utvikler",
    "javascript utvikler",
    "typescript utvikler",
    "bygge nettsider Oslo",
    "bygge nettsider Norge",
    "norsk webutvikler",
    "frontend portefølje",
  ],

  title: "Developer Marty",
  description:
    "Explore the portfolio of Developer Marty, a creative web developer in Oslo specializing in React, Next.js, and TailwindCSS. Discover projects, services, and contact for collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:description"
          content="Utforsk porteføljen til Developer Marty, en kreativ webutvikler i Oslo som spesialiserer seg på React, Next.js og TailwindCSS. Oppdag prosjekter, tjenester, og kontakt for samarbeid."
        />
        <meta property="og:title" content="Developer Marty - Portefølje" />
        <meta
          property="og:image"
          content="https://devmarty.com/og-image-no.jpg"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Developer Marty - Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Marty, a creative web developer in Oslo specializing in React, Next.js, and TailwindCSS."
        />
        <meta property="og:url" content="https://devmarty.com" />
        <meta property="og:image" content="https://devmarty.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Developer Marty - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Marty, a creative web developer in Oslo specializing in React, Next.js, and TailwindCSS."
        />
        <meta
          name="twitter:image"
          content="https://devmarty.com/twitter-image.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: [
                { "@value": "Marty", "@language": "en" },
                { "@value": "Marty", "@language": "no" },
              ],
              jobTitle: [
                { "@value": "Web Developer", "@language": "en" },
                { "@value": "Webutvikler", "@language": "no" },
              ],
              url: "https://devmarty.com",
              sameAs: [
                "https://linkedin.com/in/msiksnis",
                "https://github.com/msiksnis",
              ],
              worksFor: {
                "@type": "Organization",
                name: [
                  { "@value": "Freelance", "@language": "en" },
                  { "@value": "Frilans", "@language": "no" },
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: [
                  { "@value": "Oslo", "@language": "en" },
                  { "@value": "Oslo", "@language": "no" },
                ],
                addressCountry: [
                  { "@value": "Norway", "@language": "en" },
                  { "@value": "Norge", "@language": "no" },
                ],
              },
            }),
          }}
        />
      </Head>
      <body className={`${inter.className} root-layout`}>
        <Toaster />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
