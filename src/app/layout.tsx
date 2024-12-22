import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Developer Marty",
  description: "Personal portfolio site of developer Marty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} root-layout`}>
        <Toaster />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
