import ProjectOverview from "../components/ProjectOverview";
import { holidazeProjectData } from "@/app/(main)/project/holidaze/data";

export default function HolidazePage() {
  return <ProjectOverview {...holidazeProjectData} />;
}