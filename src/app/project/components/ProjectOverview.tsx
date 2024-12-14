"use client";

import Images from "./Images";
import ProjectDetails from "./ProjectDetails";
import ProjectFeatures from "./ProjectFeatures";

interface FeatureProps {
  feature: string;
  description: string;
}

interface ProjectOverviewProps {
  title: string;
  note?: string;
  description: string;
  techTags?: string[];
  demoLink: string;
  repoLink: string;
  images?: string[];
  features?: FeatureProps[];
}

export default function ProjectOverview({
  title,
  note,
  description,
  features,
  techTags,
  demoLink,
  repoLink,
  images,
}: ProjectOverviewProps) {
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
