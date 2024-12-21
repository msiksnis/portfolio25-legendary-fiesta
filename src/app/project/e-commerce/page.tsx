"use client";

import ProjectOverview from "../components/ProjectOverview";
import { mrCapsStoreProjectData } from "@/app/project/e-commerce/data";

export default function MrCapsStorePage() {
  return <ProjectOverview {...mrCapsStoreProjectData} />;
}