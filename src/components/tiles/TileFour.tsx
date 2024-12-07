import { cn } from "@/lib/utils";

interface TileFourProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TileFour({ children, className }: TileFourProps) {
  return (
    <div
      className={cn(
        "aspect-[200/348] w-full drop-shadow-[0_0_1px_rgba(0,0,0,0.75)]",
      )}
    >
      <svg viewBox="0 0 200 384" className="h-auto w-full">
        <defs>
          <clipPath id="tile-four" clipPathUnits="userSpaceOnUse">
            <path
              d="M0.5 50C0.5 22.6619 22.6619 0.5 50 0.5H100H150C177.338 0.5 199.5 22.6619 199.5 50V334C199.5 361.338 177.338 383.5 150 383.5H50C22.6619 383.5 0.5 361.338 0.5 334V50Z"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#tile-four)">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}
