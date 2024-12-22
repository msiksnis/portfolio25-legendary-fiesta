import ProjectOverview from "../components/ProjectOverview";
import { auctionHouseProjectData } from "@/app/(main)/project/auction-house/data";

export default function AuctionHousePage() {
  return <ProjectOverview {...auctionHouseProjectData} />;
}