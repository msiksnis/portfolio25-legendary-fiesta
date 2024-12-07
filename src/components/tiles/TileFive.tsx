import { cn } from "@/lib/utils";

interface TileFiveProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TileFive({ children, className }: TileFiveProps) {
  return (
    <div
      className={cn(
        "aspect-[600/348] w-full drop-shadow-[0_0_1px_rgba(0,0,0,0.75)]",
      )}
    >
      <svg viewBox="0 0 600 384" className="h-auto w-full">
        <defs>
          <clipPath id="tile-five" clipPathUnits="userSpaceOnUse">
            <path
              d="M0.5 50C0.5 22.6619 22.6619 0.5 50 0.5H300H550C577.338 0.5 599.5 22.6619 599.5 50V334C599.5 361.338 577.338 383.5 550 383.5H50C22.6619 383.5 0.5 361.338 0.5 334V50Z"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#tile-five)">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}
