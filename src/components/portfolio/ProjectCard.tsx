"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import ProjectLinkButton from "../ProjectLinkButton";
import { MagicCard } from "../ui/magic-card";

interface ProjectCardProps {
  projectLink: string;
  demoLink: string;
  repoLink: string;
  title: string;
  description?: string;
  techTags?: string[];
  className?: string;
}

export default function ProjectCard({
  projectLink,
  demoLink,
  repoLink,
  title,
  description,
  techTags,
  className,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <button
      id="portfolio"
      type="button"
      onClick={() => router.push(projectLink)}
      className="group/card relative flex h-full min-h-56 w-full flex-col rounded-2xl border border-border bg-gradient-to-t from-[#1f1f22] to-[#0A0A0D] sm:rounded-4xl"
    >
      <MagicCard
        className={cn(
          "rounded-2xl px-4 py-10 sm:rounded-4xl sm:px-16",
          className,
        )}
      >
        <div className="flex h-full flex-col justify-between space-y-10">
          <div className="flex justify-center gap-6">
            <ProjectLinkButton
              buttonText="Live Demo"
              href={demoLink}
              className="text-xl"
              arrowSize={28}
            />
            <ProjectLinkButton
              buttonText="GitHub Repo"
              href={repoLink}
              className="text-xl"
              arrowSize={28}
            />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="text-3xl font-semibold text-muted-foreground md:text-4xl">
            {description}
          </p>
          <div className="flex justify-center">
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
        </div>
      </MagicCard>
      <img
        src="/corner.svg"
        alt=""
        className="absolute right-0 top-0 hidden opacity-0 transition-all delay-75 duration-500 group-hover/card:-translate-x-1 group-hover/card:translate-y-1 group-hover/card:scale-75 group-hover/card:opacity-50 sm:block"
      />
      <img
        src="/corner.svg"
        alt=""
        className="absolute bottom-0 right-0 hidden rotate-90 opacity-0 transition-all delay-75 duration-500 group-hover/card:-translate-x-1 group-hover/card:-translate-y-1 group-hover/card:scale-75 group-hover/card:opacity-50 sm:block"
      />
      <img
        src="/corner.svg"
        alt=""
        className="absolute bottom-0 left-0 hidden rotate-180 opacity-0 transition-all delay-75 duration-500 group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-hover/card:scale-75 group-hover/card:opacity-50 sm:block"
      />
      <img
        src="/corner.svg"
        alt=""
        className="absolute left-0 top-0 hidden rotate-[270deg] opacity-0 transition-all delay-75 duration-500 group-hover/card:translate-x-1 group-hover/card:translate-y-1 group-hover/card:scale-75 group-hover/card:opacity-50 sm:block"
      />
    </button>
  );
}
