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
    <div className="flex flex-wrap gap-2">
      {techStack.map((tool) => (
        <div
          key={tool}
          className="w-fit rounded-4xl border border-amber-300/85 px-3 py-0.5 text-amber-300/85"
        >
          {tool}
        </div>
      ))}
    </div>
  );
}
