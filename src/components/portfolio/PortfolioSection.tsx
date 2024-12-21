import BlurFade from "../ui/blur-fade";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="space-y-6 pb-2">
      <BlurFade inView>
        <ProjectCard
          projectLink="/project/holidaze"
          demoLink="https://venue-booking-msiksnis.netlify.app/"
          repoLink="https://github.com/msiksnis/pe2-solid-parakeet"
          title="Venue Booking App"
          techTags={[
            "React",
            "TailwindCSS",
            "TypeScript",
            "TanStack Router",
            "TanStack Query",
          ]}
        />
      </BlurFade>
      <BlurFade inView delay={0.2} className="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          projectLink="/project/auction-house"
          demoLink="https://msiksnis-sp2-auction.vercel.app/"
          repoLink="https://github.com/msiksnis/msiksnis-sp2-auction"
          title="Auction House"
          techTags={["Next.js", "TailwindCSS", "TypeScript"]}
          className="sm:px-6"
        />
        <ProjectCard
          projectLink="/project/e-commerce"
          demoLink="https://caps-store.netlify.app/"
          repoLink="https://github.com/msiksnis/caps-store-musical-winner"
          title="E-commerce App"
          techTags={["React", "TailwindCSS", "TypeScript", "Framer Motion"]}
          className="sm:px-6"
        />
      </BlurFade>
    </div>
  );
}