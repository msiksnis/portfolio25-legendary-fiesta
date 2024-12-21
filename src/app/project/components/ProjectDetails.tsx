import { GraduationCap } from "lucide-react";

import ProjectLinkButton from "@/components/ProjectLinkButton";
import BlurFade from "@/components/ui/blur-fade";
import { ProjectData, TechTag } from "@/app/project/utils/projectTypes";

export default function ProjectDetails({
  title,
  note,
  description,
  techTags,
  demoLink,
  repoLink,
}: ProjectData) {
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
            {techTags?.map((tag: TechTag) => (
              <BlurFade delay={tag.id * 0.1} key={tag.id}>
                <span
                  key={tag.id}
                  className="w-fit rounded-2xl border border-amber-200 px-3 py-1 text-amber-200 sm:rounded-4xl"
                >
                  {tag.name}
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