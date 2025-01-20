"use client";

import ProjectOverview from "../components/ProjectOverview";
import { crecheProjectData } from "./data";

export default function MrCapsStorePage() {
  return <ProjectOverview {...crecheProjectData} />;
}
