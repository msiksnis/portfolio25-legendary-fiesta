import { cn } from "@/lib/utils";

interface TileOneProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TileOne({ children, className }: TileOneProps) {
  return (
    <div
      className={cn(
        "aspect-[400/348] w-full drop-shadow-[0_0_1px_rgba(0,0,0,0.75)]",
      )}
    >
      <svg viewBox="0 0 400 384" className="h-auto w-full">
        <defs>
          <clipPath id="tile-one" clipPathUnits="userSpaceOnUse">
            <path
              d="M50 0C22.3858 0 0 22.3858 0 50V334C0 361.614 22.3858 384 50 384H328.395C332.148 346.205 362.205 316.148 400 312.395V50C400 22.3858 377.614 0 350 0H200H50Z"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#tile-one)">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}
