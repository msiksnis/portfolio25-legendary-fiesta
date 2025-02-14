import React from "react";
import { FeatureItem } from "./FeatureItem";
import BlurFade from "@/components/ui/blur-fade";
import { ProjectData } from "@/app/(main)/project/utils/projectTypes";
import { useProjectFeatures } from "@/app/(main)/project/utils/useProjectFeatures";

export default function ProjectFeatures({ features }: Partial<ProjectData>) {
  const { items, toggleExpanded } = useProjectFeatures(features);

  if (!items.length) {
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex max-w-3xl flex-col space-y-1 pb-2 pt-10">
        <BlurFade>
          <h2 className="pb-2 text-2xl">Features</h2>
        </BlurFade>

        {items.map(({ feature, description, index, isExpanded }) => (
          <FeatureItem
            key={index}
            index={index}
            feature={feature}
            description={description}
            isExpanded={isExpanded}
            onToggle={toggleExpanded}
          />
        ))}
      </div>
    </div>
  );
}
