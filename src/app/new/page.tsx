"use client";

import Avatar from "@/components/Avatar";
import { MagicCard } from "@/components/ui/magic-card";
import ShinyButton from "@/components/ui/shiny-button";
import { useRouter } from "next/navigation";

export default function NewPage() {
  //   const [contactFormOpen, setContactFormOpen] = useState(false);
  //   const router = useRouter();

  //   const handleContactOneClick = () => {
  //     setContactFormOpen(true);
  //     const contact = document.getElementById("contact");
  //     contact?.scrollIntoView({ behavior: "smooth" });
  //   };

  return (
    <div className="pb-10">
      <div className="relative mx-auto mt-2 grid aspect-square max-w-4xl grid-cols-12 gap-6">
        <div className="col-span-6 aspect-square rounded-4xl border bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D]">
          <MagicCard>
            <div className="flex h-full">
              <div className="m-auto pb-10">
                <div className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
                  Hi 👋
                  <br />
                  I&apos;m Marty
                </div>
                <h1 className="mx-auto flex whitespace-nowrap pt-6 text-3xl font-semibold tracking-tight text-muted-foreground md:text-4xl">
                  Frontend Developer
                </h1>
              </div>
            </div>
          </MagicCard>
        </div>
        <div className="col-span-6 aspect-square rounded-4xl border bg-gradient-to-bl from-[#1f1f22] to-[#0A0A0D]">
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
                    // onClick={handleContactOneClick}
                    className="rounded-full bg-gradient-to-br from-amber-300 to-amber-500 px-12 py-3 text-2xl font-semibold text-primary md:px-20"
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
            <div className="flex aspect-[2/1] h-full items-center justify-center pt-10">
              <div className="w-fit font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                <p className="">
                  A proud graduate of Bethel School of <br />
                  Technology (2019) and Noroff School <br />
                  of Technology and Digital Media (2024).
                </p>
                <p className="mt-6 text-muted-foreground">
                  I enjoy crafting beautiful, pixel-perfect <br />
                  websites and seamless user interfaces.
                </p>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}
