import React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";

import "./styles.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My Resume • Developer Marty",
  description: "Resume for Developer Marty",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Toaster />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}