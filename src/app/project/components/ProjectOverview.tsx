"use client";

import Images from "./Images";
import ProjectDetails from "./ProjectDetails";
import ProjectFeatures from "./ProjectFeatures";
import { ProjectData } from "@/app/project/utils/projectTypes";

export default function ProjectOverview({
  title,
  note,
  description,
  features,
  techTags,
  demoLink,
  repoLink,
  images,
}: ProjectData) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-20 pt-10">
      <ProjectDetails
        title={title}
        note={note}
        description={description}
        techTags={techTags}
        demoLink={demoLink}
        repoLink={repoLink}
      />
      <Images images={images} />
      <ProjectFeatures features={features} />
    </div>
  );
}