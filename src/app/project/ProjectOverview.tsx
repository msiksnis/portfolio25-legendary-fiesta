"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Plus } from "lucide-react";
import { motion } from "framer-motion";

import ProjectLinkButton from "@/components/ProjectLinkButton";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

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
  const [expandedStates, setExpandedStates] = useState<boolean[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-20 pt-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <BlurFade className="max-w-2xl">
          <h1 className="max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="note flex items-start gap-2 text-balance pt-2 text-sm italic text-gray-400">
            <GraduationCap size={20} />
            {note}
          </p>
        </BlurFade>
        <BlurFade delay={0.1}>
          <p className="max-w-5xl text-xl font-light leading-snug text-secondary sm:text-3xl">
            {description}
          </p>
        </BlurFade>
        <div className="flex pb-2 pt-4">
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap justify-start gap-4">
              {techTags?.map((tag, index) => (
                <BlurFade delay={index * 0.1} key={index}>
                  <span
                    key={tag}
                    className="w-fit rounded-2xl border border-amber-200 px-3 py-0.5 text-amber-200 sm:rounded-4xl"
                  >
                    {tag}
                  </span>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
        <div className="flex max-w-[350px] justify-between pt-2 sm:max-w-none sm:justify-start sm:space-x-10">
          <BlurFade delay={0.5}>
            <ProjectLinkButton
              buttonText="Live Demo"
              href={demoLink}
              className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
              arrowSize={28}
            />
          </BlurFade>
          <BlurFade delay={0.6}>
            <ProjectLinkButton
              buttonText="GitHub Repo"
              href={repoLink}
              className="rounded-full border border-secondary px-4 py-2 sm:text-xl"
              arrowSize={28}
            />
          </BlurFade>
        </div>
      </div>
      <div className="relative grid w-full max-w-7xl gap-4 pt-4 sm:grid-cols-2 sm:gap-6">
        {images?.map((image, index) => (
          <BlurFade delay={index * 0.2} key={index}>
            <Image
              src={image}
              alt={"Image" + index}
              width={700}
              height={455}
              className="rounded-lg object-cover"
            />
          </BlurFade>
        ))}
      </div>
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
                className={cn(
                  "flex flex-col gap-2 rounded-lg border px-4 pt-2",
                  {
                    "bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D]": isExpanded,
                  },
                )}
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`feature-panel-${index}`}
                  role="button"
                  className="flex w-full cursor-pointer items-center justify-between"
                >
                  <p className="text-lg text-white">{feature}</p>
                  <Plus
                    size={20}
                    className={cn("transition-all duration-200", {
                      "rotate-45": isExpanded,
                    })}
                  />
                </button>
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
                  <p className="max-w-[95%] py-2 text-secondary">
                    {description}
                  </p>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
