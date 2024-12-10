"use client";

import ContactSection from "@/components/contact/ContactSection";
import FavoriteTools from "@/components/FavoriteTools";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import Marquee from "@/components/ui/marquee";
import { useState } from "react";

export default function HomePage() {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const handleContactOneClick = () => {
    setContactFormOpen(true);
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-4 pb-10">
      <HomeSection handleClick={handleContactOneClick} />
      <Marquee className="pointer-events-none [--duration:50s]">
        <FavoriteTools />
      </Marquee>
      <PortfolioSection />
      <ContactSection
        contactFormOpen={contactFormOpen}
        setContactFormOpen={setContactFormOpen}
      />
    </div>
  );
}
