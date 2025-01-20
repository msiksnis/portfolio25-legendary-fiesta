import { useCallback, useMemo, useState } from "react";
import { ProjectData } from "./projectTypes";

export function useProjectFeatures(features?: ProjectData["features"]) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  const items = useMemo(
    () =>
      features?.map((feat, index) => ({
        ...feat,
        index,
        isExpanded: expandedIndex === index,
      })) || [],
    [features, expandedIndex],
  );

  return {
    items,
    toggleExpanded,
  };
}
