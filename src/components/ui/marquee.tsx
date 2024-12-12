"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      // For horizontal drag, use e.pageX. For vertical drag, use e.pageY.
      const pos = vertical ? e.pageY : e.pageX;
      setStartPosition(
        pos - (vertical ? container.offsetTop : container.offsetLeft),
      );
      setScrollStart(vertical ? container.scrollTop : container.scrollLeft);
      // Change cursor to grabbing
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !container) return;
      e.preventDefault(); // Prevent text selection
      const pos = vertical ? e.pageY : e.pageX;
      const delta =
        pos -
        (vertical ? container.offsetTop : container.offsetLeft) -
        startPosition;

      if (vertical) {
        container.scrollTop = scrollStart - delta;
      } else {
        container.scrollLeft = scrollStart - delta;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (container) {
        container.style.cursor = "";
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startPosition, scrollStart, vertical]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "no-scrollbar overflow-x-auto": !vertical,
          "overflow-y-auto": vertical,
          "cursor-grab": !isDragging,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical && !isDragging,
              "animate-marquee-vertical flex-col": vertical && !isDragging,
              "group-hover:[animation-play-state:paused]":
                pauseOnHover && !isDragging,
              "[animation-direction:reverse]": reverse,
              "[animation-play-state:paused]": isDragging,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
