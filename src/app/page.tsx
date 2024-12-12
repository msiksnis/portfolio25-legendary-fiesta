import ContactSection from "@/components/contact/ContactSection";
import FavoriteTools from "@/components/FavoriteTools";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 pb-10">
      <HomeSection />
      <FavoriteTools />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
