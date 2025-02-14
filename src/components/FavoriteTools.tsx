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
    <BlurFade className="relative">
      <Marquee pauseOnHover className="[--duration:50s]">
        <div className="flex flex-wrap gap-x-2">
          {techStack.map((tool, index) => (
            <BlurFade
              delay={index * 0.1}
              key={tool}
              className="w-fit rounded-full border border-amber-200 px-3 py-0.5 text-amber-200"
            >
              {tool}
            </BlurFade>
          ))}
        </div>
      </Marquee>
      <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-primary to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-r from-transparent to-primary"></div>
    </BlurFade>
  );
}
