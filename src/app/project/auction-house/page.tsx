import ProjectOverview from "../ProjectOverview";

interface Feature {
  feature: string;
  description: string;
}

interface ProjectData {
  title: string;
  note: string;
  description: string;
  techTags: string[];
  demoLink: string;
  repoLink: string;
  images: string[];
  features: Feature[];
}

const auctionHouseProjectData: ProjectData = {
  title: "Auction House",
  note: "Built as part of my school exam to demonstrate modern web development skills.",
  description:
    "Auction House is a web application that allows users to create, browse, bid on, and manage auction listings. The project leverages Next.js for server-side rendering and static site generation.",
  techTags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "React Hook Form",
  ],
  demoLink: "https://msiksnis-sp2-auction.vercel.app/",
  repoLink: "https://github.com/msiksnis/msiksnis-sp2-auction",
  images: [
    "/mockups/auction_house_landing.webp",
    "/mockups/auction_house_landing_mobile.webp",
  ],
  features: [
    {
      feature: "User Authentication",
      description:
        "Register using any email ending in @stud.noroff.no (no actual email validation required), then log in and manage your user profile.",
    },
    {
      feature: "Auction Listings",
      description: "Create, edit, browse, and search for auction listings.",
    },
    {
      feature: "Bidding",
      description: "Place bids on listings, view active bids and wins.",
    },
    {
      feature: "Filtering",
      description: "Filter listings by the most popular tags.",
    },
    {
      feature: "Favorites",
      description: "Mark listings as favorites for quick access.",
    },
    {
      feature: "Responsive Design",
      description: "Optimized for various screen sizes.",
    },
  ],
};

export default function AuctionHousePage() {
  return <ProjectOverview {...auctionHouseProjectData} />;
}
