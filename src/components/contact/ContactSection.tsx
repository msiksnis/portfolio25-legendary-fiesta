"use client";

import { useState } from "react";
import { MagicCard } from "../ui/magic-card";
import ShinyButton from "../ui/shiny-button";
import ContactForm from "./ContactForm";
import { useContactFormStore } from "@/hooks/useContactFormStore";

export default function ContactSection() {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const contactFormOpen = useContactFormStore((state) => state.contactFormOpen);
  const setContactFormOpen = useContactFormStore(
    (state) => state.setContactFormOpen,
  );

  return (
    <div
      id="contact"
      className="w-full rounded-4xl border bg-gradient-to-t from-[#1f1f22] to-[#0A0A0D]"
    >
      <MagicCard className="h-full w-full items-center justify-center rounded-4xl px-4 md:px-16">
        <div className="mx-auto flex flex-col justify-center space-y-10 py-6 sm:py-12">
          <div className="w-fit text-pretty text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Looking to hire a Developer? <br />
            Have a project in mind? Or <br />
            just want to say Hi?
          </div>
          {contactFormOpen ? (
            <ContactForm
              setContactFormOpen={setContactFormOpen}
              setIsMessageSent={setIsMessageSent}
            />
          ) : (
            <ShinyButton
              onClick={() => setContactFormOpen(true)}
              className="w-full"
            >
              {isMessageSent ? "Message Sent!" : "Contact Me"}
            </ShinyButton>
          )}
        </div>
      </MagicCard>
    </div>
  );
}
