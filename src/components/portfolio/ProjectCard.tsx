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
      className={cn(
        "flex h-full min-h-56 w-full flex-col rounded-4xl border bg-gradient-to-t from-[#1f1f22] to-[#0A0A0D] px-16",
        className,
      )}
    >
      <MagicCard className="rounded-4xl py-10">
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
          <h2 className="font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            {description}
          </p>
          <div className="grid place-content-center">
            <div className="flex flex-wrap items-center justify-start gap-4">
              {techTags?.map((tag) => (
                <span
                  key={tag}
                  className="w-fit rounded-4xl border border-amber-300/85 px-3 py-0.5 text-amber-300/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </MagicCard>
    </button>
  );
}
