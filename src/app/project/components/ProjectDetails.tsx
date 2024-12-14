import { GraduationCap } from "lucide-react";

import ProjectLinkButton from "@/components/ProjectLinkButton";
import BlurFade from "@/components/ui/blur-fade";

interface ProjectDetailsProps {
  title: string;
  note?: string;
  description: string;
  techTags?: string[];
  demoLink: string;
  repoLink: string;
}

export default function ProjectDetails({
  title,
  note,
  description,
  techTags,
  demoLink,
  repoLink,
}: ProjectDetailsProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <BlurFade className="max-w-2xl">
        <h1 className="max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="note flex items-start gap-2 text-balance pt-2 text-sm italic text-gray-400">
          <GraduationCap size={20} />
          {note}
        </p>
      </BlurFade>
      <BlurFade delay={0.1}>
        <p className="max-w-5xl text-xl font-light leading-snug text-secondary sm:text-3xl">
          {description}
        </p>
      </BlurFade>
      <div className="flex pb-2 pt-4">
        <BlurFade delay={0.2}>
          <div className="flex flex-wrap justify-start gap-4">
            {techTags?.map((tag, index) => (
              <BlurFade delay={index * 0.1} key={index}>
                <span
                  key={tag}
                  className="w-fit rounded-2xl border border-amber-200 px-3 py-0.5 text-amber-200 sm:rounded-4xl"
                >
                  {tag}
                </span>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </div>
      <div className="flex max-w-[350px] justify-between pt-2 sm:max-w-none sm:justify-start sm:space-x-10">
        <BlurFade delay={0.5}>
          <ProjectLinkButton
            buttonText="Live Demo"
            href={demoLink}
            className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
            arrowSize={28}
          />
        </BlurFade>
        <BlurFade delay={0.6}>
          <ProjectLinkButton
            buttonText="GitHub Repo"
            href={repoLink}
            className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
            arrowSize={28}
          />
        </BlurFade>
      </div>
    </div>
  );
}
