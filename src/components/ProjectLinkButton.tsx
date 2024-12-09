import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

interface ProjectLinkButtonProps {
  buttonText: string;
  href: string;
  className?: string;
  arrowSize?: number;
}

export default function ProjectLinkButton({
  href,
  buttonText,
  className,
  arrowSize = 16,
}: ProjectLinkButtonProps) {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={cn(
        "group/preview flex items-center whitespace-nowrap text-muted-foreground transition-all duration-200 hover:text-white",
        className,
      )}
    >
      {buttonText}
      <ArrowRightCircle
        strokeWidth={1.5}
        className={cn(
          "ml-2 -rotate-45 transition-all duration-300 group-hover/preview:translate-x-2 group-hover/preview:rotate-0",
        )}
        style={{ width: `${arrowSize}px`, height: `${arrowSize}px` }}
      />
    </Link>
  );
}
