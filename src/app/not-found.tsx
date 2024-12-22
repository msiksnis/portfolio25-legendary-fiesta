"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative mx-auto my-20 max-w-4xl overflow-hidden rounded-4xl sm:aspect-video">
      <div className="relative grid h-full place-content-center space-y-14 bg-neutral-950 p-8">
        <h1 className="text-center text-6xl font-black text-neutral-50">
          404 - Page Not Found
        </h1>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant={"linkHover2"}
            className="p-0 text-xl after:w-full after:bg-white"
          >
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        style={{
          backgroundImage: 'url("/black-noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
      ></motion.div>
    </div>
  );
}