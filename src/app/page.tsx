import FavoriteTools from "@/components/FavoriteTools";
import TileFour from "@/components/tiles/TileFour";
import TileOne from "@/components/tiles/TileOne";
import TileThree from "@/components/tiles/TileThree";
import TileTwo from "@/components/tiles/TileTwo";
import { MagicCard } from "@/components/ui/magic-card";
import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";

export default function page() {
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
                <ShinyButton className="h-14 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl font-semibold leading-6 text-primary">
                  Contact
                </ShinyButton>
              </div>
            </MagicCard>
          </TileTwo>
          <div className="absolute -bottom-2 left-1/2 flex size-[140px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-7xl font-bold">
            <img
              src="https://studentcommunity.noroff.no/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Findyriot%2Fimage%2Fupload%2Fv1725286992%2Friot2%2Fhenma6hw17d7nprgm12a.png&w=128&q=100"
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
          <Link
            id="portfolio"
            href={"/project/holidaze"}
            className="rounded-4xl w-3/4 scroll-m-4 bg-card"
          >
            <MagicCard className="rounded-4xl justify-center">
              <div className="p-10">
                <div className="mb-6 text-center text-3xl font-semibold tracking-tight text-muted-foreground">
                  Featured Project
                </div>
              </div>
            </MagicCard>
          </Link>
        </div>
        {/* </div> */}
        <div className="flex gap-6">
          {/* Tile 6 */}
          <Link
            href={"/project/e-commerce"}
            className="rounded-4xl h-96 w-full bg-card"
          >
            <MagicCard className="rounded-4xl justify-center">
              <div className="p-10">
                <div className="mb-6 text-center text-3xl font-semibold tracking-tight text-muted-foreground">
                  Project 2
                </div>
              </div>
            </MagicCard>
          </Link>
          {/* Tile 7 */}
          <Link
            href={"/project/auction-house"}
            className="rounded-4xl h-96 w-full bg-card"
          >
            <MagicCard className="rounded-4xl justify-center">
              <div className="p-10">
                <div className="mb-6 text-center text-3xl font-semibold tracking-tight text-muted-foreground">
                  Project 3
                </div>
              </div>
            </MagicCard>
          </Link>
        </div>
        {/* Tile 8 */}
        <div id="contact" className="rounded-4xl w-full scroll-m-4 bg-card">
          <MagicCard className="rounded-4xl items-center justify-center px-16">
            <div className="mx-auto flex flex-col justify-center space-y-10 py-12">
              <div className="w-[600px] text-pretty text-center text-4xl font-semibold text-white">
                Have a project in mind? Looking to hire a Frontend Developer? Or
                just to say hi?
              </div>
              <ShinyButton className="mx-auto h-14 w-full max-w-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl font-semibold leading-6 text-primary">
                Contact
              </ShinyButton>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}
