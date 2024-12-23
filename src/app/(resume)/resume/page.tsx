"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const downloadPDF = async () => {
    const element = document.querySelector<HTMLElement>("#resume");
    if (!element) return;

    try {
      setIsLoading(true);
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "em", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const originalCanvasWidth = canvas.width;
      const originalCanvasHeight = canvas.height;

      const scaleFactor = 1.1;
      const scaledPdfWidth = pdfWidth * scaleFactor;
      const scaledPdfHeight =
        (originalCanvasHeight * scaledPdfWidth) / originalCanvasWidth;

      const xOffset = (pdfWidth - pdfWidth / scaleFactor) / 2;
      pdf.addImage(
        imgData,
        "PNG",
        -xOffset,
        0,
        scaledPdfWidth,
        scaledPdfHeight,
      );
      pdf.save("marty_siksnis_resume.pdf");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full px-4 py-8 sm:p-10 print:py-0">
      <nav className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0 print:hidden">
        <Link href={"/"} className="flex items-center">
          <ArrowLeft className="mr-1.5 w-5" />
          To Portfolio
        </Link>
        <div className="flex space-x-4">
          <Button
            onClick={downloadPDF}
            variant={"outline"}
            size={"sm"}
            disabled={isLoading}
            className="hidden rounded bg-white transition-all hover:bg-gray-100 disabled:hover:bg-white sm:block"
          >
            {isLoading ? (
              <span className="flex items-center">
                Generating
                <LoaderCircle className="ml-1.5 size-4 animate-spin" />
              </span>
            ) : (
              "Download PDF"
            )}
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

      <section id="resume" className="sm:py-10 print:py-0 print:pl-4">
        <div className="mx-auto my-10 flex h-full max-w-3xl flex-col space-y-8 print:space-y-4">
          <h1 className="text-2xl font-semibold uppercase sm:flex sm:text-3xl print:text-base">
            <div className="">Marty Siksnis</div>
            <div className="hidden sm:block">&nbsp;|&nbsp;</div>
            <div className="">Frontend Developer</div>
          </h1>
          <div>
            <div className="flex flex-col sm:flex-row sm:text-lg print:text-[13px] print:leading-5">
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
            <div className="flex flex-col sm:flex-row sm:text-lg print:text-[13px] print:leading-5">
              <div className="flex">
                <div className="font-semibold">Portfolio:</div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://devmarty.com"
                  className="text-blue-600"
                >
                  &nbsp;devmarty.com
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:text-lg md:flex-row print:text-[13px] print:leading-5 print:sm:flex-row">
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
              <div className="hidden md:block print:sm:block">
                &nbsp;|&nbsp;
              </div>
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
              working as a plumber, I decided to pursue my passion for
              technology and building things but this time in the digital world.
              I enjoy solving problems, working with others, and creating
              designs that look great and work well.
            </p>
          </div>

          <div className="space-y-4 print:space-y-0">
            <Heading>Education</Heading>
            <div className="space-y-1">
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
            <div className="space-y-1 print:space-y-0">
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
              <div className="space-y-1 print:space-y-0">
                <SubHeading>
                  <h2>Strong communication and teamwork</h2>
                  <p className=""></p>
                </SubHeading>
                <SubHeading>
                  <h2>Keen problem-solving ability</h2>
                  <p className=""></p>
                </SubHeading>
                <SubHeading>
                  <h2>Detail-oriented and focused on pixel-perfect designs</h2>
                  <p className=""></p>
                </SubHeading>
                <SubHeading>
                  <h2>Adaptable and eager to learn new technologies quickly</h2>
                  <p className=""></p>
                </SubHeading>
              </div>
            </div>

            <div className="space-y-4 print:space-y-0">
              <Heading>Projects</Heading>
              <div className="space-y-1 print:space-y-0">
                <h3>Dog Daycare Dashboard:</h3>
                <SubHeading>
                  <h2>
                    Developing a dashboard to manage bookings and clients using
                    Next.js, TypeScript, TanStack Query, Zustand, Supabase, and
                    Tailwind CSS.
                  </h2>
                  <p className=""></p>
                </SubHeading>
                <SubHeading>
                  <h2>
                    Includes real-time data updates and authentication features.
                  </h2>
                  <p className=""></p>
                </SubHeading>
              </div>
              <div className="space-y-1 print:space-y-0">
                <h3>Venue Booking App:</h3>
                <SubHeading>
                  <h2>
                    Built a responsive web app for booking venues using React,
                    TypeScript, and REST API.
                  </h2>
                  <p className=""></p>
                </SubHeading>
                <SubHeading>
                  <h2>
                    Designed an intuitive UI with Tailwind CSS, focusing on user
                    experience.
                  </h2>
                  <p className=""></p>
                </SubHeading>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold uppercase sm:text-2xl print:text-[14px]">
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
      <div className="col-span-1 mx-auto flex items-center justify-center print:items-start print:pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          width="12"
          height="12"
        >
          <circle cx="8" cy="8" r="4" />
        </svg>
      </div>
      <div
        className={cn(
          "col-span-11 sm:text-lg print:text-[12px] print:leading-5",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
