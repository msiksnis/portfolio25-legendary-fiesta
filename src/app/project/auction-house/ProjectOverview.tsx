"use client";

import ProjectLinkButton from "@/components/ProjectLinkButton";
import Image from "next/image";

interface ProjectOverviewProps {
  title: string;
  description: string;
  techTags?: string[];
  demoLink: string;
  repoLink: string;
  images?: string[];
}

export default function ProjectOverview({
  title,
  description,
  techTags,
  demoLink,
  repoLink,
  images,
}: ProjectOverviewProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="max-w-5xl text-xl font-light leading-snug text-secondary sm:text-3xl">
          {description}
        </p>
        <div className="flex pb-2 pt-4">
          <div className="flex flex-wrap justify-start gap-4">
            {techTags?.map((tag) => (
              <span
                key={tag}
                className="w-fit rounded-2xl border border-amber-200 px-3 py-0.5 text-amber-200 sm:rounded-4xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex max-w-[350px] justify-between pt-2 sm:max-w-none sm:justify-start sm:space-x-10">
          <ProjectLinkButton
            buttonText="Live Demo"
            href={demoLink}
            className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
            arrowSize={28}
          />
          <ProjectLinkButton
            buttonText="GitHub Repo"
            href={repoLink}
            className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
            arrowSize={28}
          />
        </div>
      </div>
      <div className="relative grid w-full max-w-7xl gap-4 pt-4 sm:grid-cols-2 sm:gap-6">
        {images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={"Image" + index}
            width={700}
            height={455}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}
