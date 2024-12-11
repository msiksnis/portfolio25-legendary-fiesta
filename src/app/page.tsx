import ContactSection from "@/components/contact/ContactSection";
import FavoriteTools from "@/components/FavoriteTools";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import Marquee from "@/components/ui/marquee";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 pb-10">
      <HomeSection />
      <Marquee className="pointer-events-none [--duration:50s]">
        <FavoriteTools />
      </Marquee>
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
