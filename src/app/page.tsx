"use client";

import FavoriteTools from "@/components/FavoriteTools";
import ProjectOneCard from "@/components/projects/ProjectOneCard";
import ProjectThreeCard from "@/components/projects/ProjectThreeCard";
import ProjectTwoCard from "@/components/projects/ProjectTwoCard";
import TileFour from "@/components/tiles/TileFour";
import TileOne from "@/components/tiles/TileOne";
import TileThree from "@/components/tiles/TileThree";
import TileTwo from "@/components/tiles/TileTwo";
import { MagicCard } from "@/components/ui/magic-card";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const router = useRouter();

  const handleContactOneClick = () => {
    setContactFormOpen(true);
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl justify-center">
      <div className="flex w-full flex-col gap-4 px-10 pb-14">
        <div id="home" className="relative flex gap-4">
          <TileOne className="bg-card">
            <MagicCard>
              <div className="flex flex-col justify-center px-12 py-20">
                <div className="text-6xl font-semibold tracking-tight text-white">
                  Hi 👋
                  <br />
                  I&apos;m Marty
                </div>
                <h1 className="whitespace-nowrap pt-6 text-[2rem] font-semibold tracking-tight text-muted-foreground">
                  Frontend Developer
                </h1>
              </div>
            </MagicCard>
          </TileOne>
          <TileTwo className="bg-card">
            <MagicCard>
              <div className="flex flex-col justify-center space-y-10 px-10 py-12">
                <div className="text-balance text-center text-4xl font-semibold text-muted-foreground">
                  Have a project in mind, or looking to hire a Frontend
                  Developer?
                </div>
                <ShinyButton
                  onClick={handleContactOneClick}
                  className="h-14 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl font-semibold leading-6 text-primary"
                >
                  Contact
                </ShinyButton>
              </div>
            </MagicCard>
          </TileTwo>
          <div className="absolute -bottom-2 left-1/2 flex size-[140px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-7xl font-bold">
            <Image
              src="/me.png"
              alt=""
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <TileThree className="bg-card">
            <MagicCard>
              <div className="px-16 py-24 text-4xl font-semibold tracking-tight text-white">
                A proud graduate of Bethel School of Technology (2019) and
                Noroff School of Technology and Digital Media (2024).
                <div className="mt-6 text-muted-foreground">
                  I enjoy crafting beautiful, pixel-perfect websites and
                  seamless user interfaces.
                </div>
              </div>
            </MagicCard>
          </TileThree>
        </div>
        <div className="flex gap-4">
          <div className="w-1/4">
            <TileFour className="bg-card">
              <MagicCard className="px-4 py-8">
                <div className="mb-6 text-center text-3xl font-semibold tracking-tight text-muted-foreground">
                  Favorite Tools
                </div>
                <FavoriteTools />
              </MagicCard>
            </TileFour>
          </div>
          {/* Tile 5 */}
          <button
            id="portfolio"
            type="button"
            onClick={() => router.push("/project/holidaze")}
            className="w-3/4 scroll-m-4 rounded-4xl bg-card"
          >
            <MagicCard className="justify-center rounded-4xl">
              <ProjectOneCard />
            </MagicCard>
          </button>
        </div>
        {/* </div> */}
        <div className="flex gap-6">
          {/* Tile 6 */}
          <button
            type="button"
            onClick={() => router.push("/project/auction-house")}
            className="h-96 w-full rounded-4xl bg-card"
          >
            <MagicCard className="justify-center rounded-4xl">
              <ProjectTwoCard />
            </MagicCard>
          </button>
          {/* Tile 7 */}
          <button
            type="button"
            onClick={() => router.push("/project/e-commerce")}
            className="h-96 w-full rounded-4xl bg-card"
          >
            <MagicCard className="justify-center rounded-4xl">
              <ProjectThreeCard />
            </MagicCard>
          </button>
        </div>
        {/* Tile 8 */}
        <div id="contact" className="w-full scroll-m-4 rounded-4xl bg-card">
          <MagicCard className="items-center justify-center rounded-4xl px-16">
            <div className="mx-auto flex flex-col justify-center space-y-10 py-12">
              <div className="w-[600px] text-pretty text-center text-4xl font-semibold text-white">
                Looking to hire a Frontend Developer? Have a project in mind? Or
                just want to say Hi?
              </div>
              {contactFormOpen ? (
                "Contact form"
              ) : (
                <ShinyButton
                  onClick={() => setContactFormOpen(true)}
                  className="mx-auto h-14 w-full max-w-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl font-semibold leading-6 text-primary"
                >
                  Contact
                </ShinyButton>
              )}
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}
