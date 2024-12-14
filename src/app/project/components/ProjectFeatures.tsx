import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

interface FeatureProps {
  feature: string;
  description: string;
}

interface ProjectFeaturesProps {
  features?: FeatureProps[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const [expandedStates, setExpandedStates] = useState<boolean[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex max-w-3xl flex-col space-y-1 pb-2 pt-10">
        <BlurFade inView>
          <h2 className="pb-2 text-2xl">Features</h2>
        </BlurFade>

        {features?.map(({ feature, description }, index) => {
          const isExpanded = expandedStates[index] ?? false;

          return (
            <BlurFade
              inView
              delay={(index / 4) * 0.1}
              key={index}
              className={cn("flex flex-col gap-2 rounded-lg border px-4 pt-2", {
                "bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D]": isExpanded,
              })}
            >
              <button
                onClick={() => toggleExpanded(index)}
                aria-expanded={isExpanded}
                aria-controls={`feature-panel-${index}`}
                role="button"
                className="cursor-pointer"
              >
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg text-white">{feature}</p>
                  <Plus
                    size={20}
                    className={cn("transition-all duration-200", {
                      "rotate-45": isExpanded,
                    })}
                  />
                </div>
                <motion.div
                  id={`feature-panel-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[95%] py-2 text-start text-secondary">
                    {description}
                  </p>
                </motion.div>
              </button>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
