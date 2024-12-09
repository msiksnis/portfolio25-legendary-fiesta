import ProjectCard from "./ProjectCard";

interface PortfolioSectionProps {}

export default function PortfolioSection({}: PortfolioSectionProps) {
  return (
    <div id="portfolio" className="space-y-6 pb-2">
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
      <div className="grid grid-cols-2 gap-6">
        <ProjectCard
          projectLink="/project/auction-house"
          demoLink="https://msiksnis-sp2-auction.vercel.app/"
          repoLink="https://github.com/msiksnis/msiksnis-sp2-auction"
          title="Auction House"
          techTags={["Next.js", "TailwindCSS", "TypeScript"]}
          className="px-6"
        />
        <ProjectCard
          projectLink="/project/e-commerce"
          demoLink="https://caps-store.netlify.app/"
          repoLink="https://github.com/msiksnis/caps-store-musical-winner"
          title="E-commerce App"
          techTags={["React", "TailwindCSS", "TypeScript", "Framer Motion"]}
          className="px-6"
        />
      </div>
    </div>
  );
}
