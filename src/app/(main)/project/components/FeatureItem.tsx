import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

interface FeatureItemProps {
  index: number;
  feature: string;
  description: string;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

export function FeatureItem({
  index,
  feature,
  description,
  isExpanded,
  onToggle,
}: FeatureItemProps) {
  return (
    <BlurFade
      delay={(index / 4) * 0.1}
      className={cn("flex flex-col gap-2 rounded-lg border p-4", {
        "bg-gradient-to-br from-[#1f1f22] to-[#0A0A0D]": isExpanded,
      })}
    >
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isExpanded}
        aria-controls={`feature-panel-${index}`}
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

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`feature-panel-${index}`}
            key={`feature-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-[95%] py-2 text-start text-secondary">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </BlurFade>
  );
}
