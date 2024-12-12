"use client";

import { useContactFormStore } from "@/hooks/useContactFormStore";
import Avatar from "./Avatar";
import { MagicCard } from "./ui/magic-card";
import ShinyButton from "./ui/shiny-button";

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
      className="relative grid aspect-square grid-cols-12 gap-4 sm:gap-6"
    >
      <div className="col-span-12 rounded-4xl border bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D] py-6 sm:col-span-6 sm:aspect-square">
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
      </div>
      <div className="hidden aspect-square rounded-4xl border bg-gradient-to-bl from-[#1f1f22] to-[#0A0A0D] sm:col-span-6 sm:block">
        <MagicCard>
          <div className="flex h-full">
            <div className="m-auto space-y-10">
              <div className="text-balance font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
                Have a project in <br />
                mind, or looking <br />
                to hire a Frontend <br />
                Developer?
              </div>
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
      </div>
      <Avatar />
      <div className="col-span-12 w-full rounded-4xl border bg-gradient-to-b from-[#0A0A0D] to-[#1b1b1d]">
        <MagicCard>
          <div className="flex h-full items-center justify-center p-6 sm:aspect-[2/1] sm:p-0 sm:pt-10">
            <div className="w-fit text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              <p className="">
                A proud graduate of Bethel School of{" "}
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
      </div>
    </div>
  );
}
