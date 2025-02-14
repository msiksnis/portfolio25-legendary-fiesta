"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants, UseInViewOptions } from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  blurAmount?: number;
  yOffset?: number;
  once?: boolean;
  inViewMargin?: MarginType;
}

export default function BlurFade({
  children,
  className = "",
  duration = 0.5,
  delay = 0,
  blurAmount = 8,
  yOffset = 10,
  once = true,
  inViewMargin = "-50px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: inViewMargin });

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset, filter: `blur(${blurAmount}px)` },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
