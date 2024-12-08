import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectOneCard() {
  return (
    <div className="rounded-4xl flex h-full w-full flex-col justify-between">
      <div className="pt-4 text-center text-4xl font-semibold tracking-tight text-white">
        Venue Booking App
      </div>
      <div className="flex h-10 items-center justify-center space-x-8">
        <Link
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://venue-booking-msiksnis.netlify.app/"}
          className="group/preview flex items-center text-muted-foreground transition-all duration-200 hover:text-white"
        >
          Live preview
          <ArrowRight className="ml-2 size-4 -rotate-45 transition-all duration-300 group-hover/preview:rotate-0" />
        </Link>
        <Link
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/msiksnis/pe2-solid-parakeet"}
          className="group/github flex items-center text-muted-foreground transition-all duration-200 hover:text-white"
        >
          GitHub
          <ArrowRight className="ml-2 size-4 -rotate-45 transition-all duration-300 group-hover/github:rotate-0" />
        </Link>
      </div>
      <div className="rounded-4xl mt-auto flex h-full max-h-[280px] divide-x-2 divide-card overflow-hidden">
        <Image src="/venue_app_1.png" alt="Holidaze" width={300} height={280} />
        <Image src="/venue_app_2.png" alt="Holidaze" width={300} height={280} />
      </div>
    </div>
  );
}
