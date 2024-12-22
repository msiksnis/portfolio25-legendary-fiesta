import ContactSection from "@/components/contact/ContactSection";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import FavoriteTools from "@/components/FavoriteTools";

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