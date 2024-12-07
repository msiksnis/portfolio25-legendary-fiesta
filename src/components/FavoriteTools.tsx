const techStack = [
  "JS",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Prisma",
  "Figma",
];

interface FavoriteToolsProps {
  className?: string;
}

export default function FavoriteTools({ className }: FavoriteToolsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tool) => (
        <div
          key={tool}
          className="w-fit rounded-full bg-amber-100 px-3 py-0.5 text-primary"
        >
          {tool}
        </div>
      ))}
    </div>
  );
}
