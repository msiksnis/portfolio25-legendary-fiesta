import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectTwoCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-4xl">
      <div className="pt-4 text-center text-4xl font-semibold tracking-tight text-white">
        Auction House
      </div>
      <div className="flex h-10 items-center justify-center space-x-8">
        <Link
          onClick={(e) => e.stopPropagation()}
          href={"https://msiksnis-sp2-auction.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
          className="group/preview flex items-center text-muted-foreground transition-all duration-200 hover:text-white"
        >
          Live preview
          <ArrowRight className="ml-2 size-4 -rotate-45 transition-all duration-300 group-hover/preview:rotate-0" />
        </Link>
        <Link
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/msiksnis/msiksnis-sp2-auction"}
          className="group/github flex items-center text-muted-foreground transition-all duration-200 hover:text-white"
        >
          GitHub
          <ArrowRight className="ml-2 size-4 -rotate-45 transition-all duration-300 group-hover/github:rotate-0" />
        </Link>
      </div>
      <div className="mt-auto flex h-full max-h-[280px] divide-x-2 divide-card overflow-hidden rounded-4xl">
        <Image
          src="/auction_house_1.png"
          alt="Auction House"
          width={400}
          height={280}
        />
      </div>
    </div>
  );
}
