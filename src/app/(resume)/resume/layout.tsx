import { JetBrains_Mono } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

import "./styles.css";
import { Metadata } from "next";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frontend Developer Marty",
  description: "Resume of Developer Marty",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${jetBrainsMono.className} resume-layout`}>
      <Toaster />
      {children}
    </section>
  );
}
