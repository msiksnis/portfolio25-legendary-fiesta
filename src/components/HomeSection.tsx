"use client";

import { useContactFormStore } from "@/hooks/useContactFormStore";
import Avatar from "./Avatar";
import { MagicCard } from "./ui/magic-card";
import ShinyButton from "./ui/shiny-button";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";

export default function HomeSection() {
  const setContactFormOpen = useContactFormStore(
    (state) => state.setContactFormOpen,
  );

  const handleContactOneClick = () => {
    setContactFormOpen(true);

    setTimeout(() => {
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div
      id="home"
      className="relative flex flex-col gap-6 pt-1.5 sm:aspect-square"
    >
      <div className="flex gap-6">
        <BlurFade className="w-full flex-1 rounded-2xl border border-border bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D] py-6 sm:aspect-square sm:rounded-4xl sm:py-0">
          <MagicCard>
            <div className="flex h-full">
              <div className="m-auto sm:pb-10">
                <div className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
                  Hi 👋
                  <br />
                  I&apos;m Marty
                </div>
                <h1 className="mx-auto flex whitespace-nowrap pt-4 text-3xl font-semibold tracking-tight text-muted-foreground sm:pt-6 md:text-4xl">
                  Frontend Developer
                </h1>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade
          delay={0.2}
          className="hidden aspect-square flex-1 rounded-2xl border border-border bg-gradient-to-bl from-[#1f1f22] to-[#0A0A0D] sm:block sm:rounded-4xl"
        >
          <MagicCard>
            <div className="flex h-full">
              <div className="m-auto space-y-10">
                <h2 className="text-balance text-2xl font-semibold text-muted-foreground sm:-mt-4 md:-mt-10 md:text-3xl lg:text-4xl">
                  Have a project in <br />
                  mind, or looking <br />
                  to hire a Frontend <br />
                  Developer?
                </h2>
                <div className="flex justify-center">
                  <ShinyButton
                    onClick={handleContactOneClick}
                    className="px-12 py-3 md:px-20"
                  >
                    Contact
                  </ShinyButton>
                </div>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
      </div>
      <BlurFade
        delay={0.4}
        className="w-full rounded-2xl border border-border bg-gradient-to-b from-[#0A0A0D] to-[#1b1b1d] sm:max-h-[435px] sm:rounded-4xl"
      >
        <MagicCard>
          <div className="flex h-full items-center justify-center px-4 py-6 sm:aspect-[2/1] sm:p-0 sm:py-0 sm:pt-14 md:pt-10">
            <div className="w-fit text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              <p className="">
                I am graduate of Bethel School of{" "}
                <br className="hidden sm:block" />
                Technology (2019) and Noroff School{" "}
                <br className="hidden sm:block" />
                of Technology and Digital Media (2024).
              </p>
              <p className="mt-6 text-muted-foreground">
                I enjoy crafting beautiful, pixel-perfect{" "}
                <br className="hidden sm:block" />
                websites and seamless user interfaces.
              </p>
            </div>
          </div>
        </MagicCard>
      </BlurFade>
      <Avatar />
    </div>
  );
}
