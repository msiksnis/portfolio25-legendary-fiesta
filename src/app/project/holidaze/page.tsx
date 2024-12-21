import ProjectOverview from "../components/ProjectOverview";
import { holidazeProjectData } from "@/app/project/holidaze/data";

export default function HolidazePage() {
  return <ProjectOverview {...holidazeProjectData} />;
}