"use client";

import { ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResumePage() {
  return (
    <div className="min-h-screen w-full p-10 print:py-0">
      <nav className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0 print:hidden">
        <Link href={"/"} className="flex items-center">
          <ArrowLeft className="mr-1.5 w-5" />
          To Portfolio
        </Link>
        <div className="flex space-x-4">
          <Button
            variant={"outline"}
            size={"sm"}
            className="rounded bg-white transition-all hover:bg-gray-100"
          >
            Download Resume
          </Button>
          <Button
            variant={"outline"}
            size={"sm"}
            className="rounded bg-white transition-all hover:bg-gray-100"
            onClick={() => print()}
          >
            Print Resume
          </Button>
        </div>
      </nav>
      <main className="mx-auto my-10 flex h-full max-w-3xl flex-col space-y-8 print:space-y-4 print:py-0">
        <h1 className="text-3xl font-semibold uppercase print:text-base">
          Martins Siksnis
        </h1>
        <div>
          <div className="flex flex-col text-lg sm:flex-row print:text-[13px] print:leading-5">
            <div className="flex">
              <div className="font-semibold">Location:</div>
              <div className="">&nbsp;Oslo, Norway</div>
            </div>
            <div className="flex">
              <div className="hidden sm:block">&nbsp;|&nbsp;</div>
              <div className="font-semibold">Phone:</div>
              <div className="">&nbsp;+47 941 28 174</div>
            </div>
          </div>
          <div className="flex flex-col text-lg md:flex-row print:text-[13px] print:leading-5">
            <div className="flex">
              <div className="font-semibold">GitHub:</div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/msiksnis"
                className="text-blue-600"
              >
                &nbsp;github.com/msiksnis
              </a>
            </div>
            <div className="hidden md:block">&nbsp;|&nbsp;</div>
            <div className="flex">
              <div className="font-semibold">LinkedIn:</div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/msiksnis"
                className="text-blue-600"
              >
                &nbsp;linkedin.com/in/msiksnis
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4 print:space-y-0">
          <Heading>Summary</Heading>
          <p className="print:text-[12px]">
            I&apos;m a newly graduated Frontend Developer with a solid
            foundation in JavaScript, TypeScript, React, and Next.js. After
            working as a plumber, I decided to pursue my passion for technology
            and building things but this time in the digital world. I enjoy
            solving problems, working with others, and creating designs that
            look great and work well.
          </p>
        </div>

        <div className="space-y-4 print:space-y-0">
          <Heading>Education</Heading>
          <div className="space-y-2">
            <SubHeading>
              <h2 className="font-bold">Frontend Developer (JavaScript)</h2>
              <p className="font-light italic">
                Noroff School of Technology and Digital Media, 2024
              </p>
            </SubHeading>
            <SubHeading>
              <h2 className="font-bold">Software Developer (JavaScript)</h2>
              <p className="font-light italic">
                Bethel School of Technology, 2019
              </p>
            </SubHeading>
          </div>
        </div>

        <div className="space-y-4 print:space-y-0">
          <Heading>Favorite Technologies</Heading>
          <div className="space-y-2 print:space-y-0">
            <SubHeading className="flex">
              <h2 className="font-bold">Languages & Frameworks:</h2>
              <p className="font-light">
                &nbsp;JavaScript, TypeScript, React, Next.js
              </p>
            </SubHeading>
            <SubHeading className="flex">
              <h2 className="font-bold">Styling & UI:</h2>
              <p className="font-light">&nbsp; Tailwind CSS, Framer, Figma</p>
            </SubHeading>
            <SubHeading className="flex">
              <h2 className="font-bold">Queries & State Management:</h2>
              <p className="font-light">&nbsp;TanStack Query, Zustand</p>
            </SubHeading>
            <SubHeading className="flex">
              <h2 className="font-bold">Database & Backend:</h2>
              <p className="font-light">
                &nbsp;Prisma, REST APIs, Supabase, MongoDb
              </p>
            </SubHeading>
            <SubHeading className="flex">
              <h2 className="font-bold">Version Control:</h2>
              <p className="font-light">&nbsp;Git, GitHub</p>
            </SubHeading>
          </div>

          <div className="space-y-4 print:space-y-0">
            <Heading>Soft Skills</Heading>
            <div className="space-y-2 print:space-y-0">
              <SubHeading>Strong communication and teamwork</SubHeading>
              <SubHeading>Keen problem-solving ability</SubHeading>
              <SubHeading>
                Detail-oriented and focused on pixel-perfect designs
              </SubHeading>
              <SubHeading>
                Adaptable and eager to learn new technologies quickly
              </SubHeading>
            </div>
          </div>

          <div className="space-y-4 print:space-y-0">
            <Heading>Projects</Heading>
            <div className="space-y-2 print:space-y-0">
              <h3>Dog Daycare Dashboard:</h3>
              <SubHeading>
                Developing a dashboard to manage bookings and clients using
                Next.js, TypeScript, TanStack Query, Zustand, Supabase, and
                Tailwind CSS.
              </SubHeading>
              <SubHeading>
                Includes real-time data updates and authentication features.
              </SubHeading>
            </div>
            <div className="space-y-2 print:space-y-0">
              <h3>Venue Booking App:</h3>
              <SubHeading>
                Built a responsive web app for booking venues using React,
                TypeScript, and REST API.
              </SubHeading>
              <SubHeading>
                Designed an intuitive UI with Tailwind CSS, focusing on user
                experience.
              </SubHeading>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold uppercase print:text-[14px]">
      {children}
    </h2>
  );
}

function SubHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 mx-auto">
        <Dot className="-mt-1 size-9 print:-mt-2" />
      </div>
      <div
        className={cn(
          "col-span-11 text-lg print:text-[12px] print:leading-5",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
