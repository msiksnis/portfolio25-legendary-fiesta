import { cn } from "@/lib/utils";

interface TileTwoProps {
  children: React.ReactNode;
  className?: string;
}

export default function TileTwo({ children, className }: TileTwoProps) {
  return (
    <div
      className={cn(
        "aspect-[400/348] w-full drop-shadow-[0_0_1px_rgba(0,0,0,0.75)]",
      )}
    >
      <svg viewBox="0 0 400 384" className="h-auto w-full">
        <defs>
          <clipPath id="tile-two" clipPathUnits="userSpaceOnUse">
            <path
              d="M50 0C22.3858 0 0 22.3858 0 50V312.395C37.7953 316.148 67.8525 346.205 71.605 384H350C377.614 384 400 361.614 400 334V50C400 22.3858 377.614 0 350 0H200H50Z"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#tile-two)">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}
