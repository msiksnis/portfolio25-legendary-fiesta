import { useCallback, useMemo, useState } from "react";
import { ProjectData } from "./projectTypes";

export function useProjectFeatures(features?: ProjectData["features"]) {
  const [expandedIndices, setExpandedIndices] = useState<boolean[]>([]);

  const toggleExpanded = useCallback((index: number) => {
    setExpandedIndices((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  }, []);

  const items = useMemo(
    () =>
      features?.map((feat, index) => ({
        ...feat,
        index,
        isExpanded: expandedIndices[index] ?? false,
      })) || [],
    [features, expandedIndices],
  );

  return {
    items,
    toggleExpanded,
  };
}