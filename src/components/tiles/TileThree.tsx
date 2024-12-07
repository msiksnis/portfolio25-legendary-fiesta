import { cn } from "@/lib/utils";

interface TileThreeProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TileThree({ children, className }: TileThreeProps) {
  return (
    <div
      className={cn(
        "aspect-[816/344] w-full drop-shadow-[0_0_1px_rgba(0,0,0,0.75)]",
      )}
    >
      <svg viewBox="0 0 816 384" className="h-auto w-full">
        <defs>
          <clipPath id="tile-three" clipPathUnits="userSpaceOnUse">
            <path
              d="M328.395 0H50C22.3858 0 0 22.3858 0 50V334C0 361.614 22.3858 384 50 384H766C793.614 384 816 361.614 816 334V50C816 22.3858 793.614 0 766 0H487.605C483.591 40.4266 449.483 72 408 72C366.517 72 332.409 40.4266 328.395 0Z"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#tile-three)">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </foreignObject>
      </svg>
    </div>
  );
}
