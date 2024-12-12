import BlurFade from "./ui/blur-fade";
import Marquee from "./ui/marquee";

const techStack = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "TanStack Query",
  "TanStack Router",
  "Figma",
];

export default function FavoriteTools() {
  return (
    <BlurFade delay={0.4} className="relative">
      <Marquee pauseOnHover className="[--duration:50s]">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tool) => (
            <div
              key={tool}
              className="w-fit rounded-4xl border border-amber-200 px-3 py-0.5 text-amber-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </Marquee>
      <div className="absolute left-0 top-0 h-12 w-6 bg-gradient-to-r from-primary to-transparent"></div>
      <div className="absolute right-0 top-0 h-12 w-6 bg-gradient-to-r from-transparent to-primary"></div>
    </BlurFade>
  );
}
