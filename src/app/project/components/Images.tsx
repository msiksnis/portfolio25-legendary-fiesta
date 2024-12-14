"use client";

import { useCallback, useRef } from "react";
import { LightGallery as LightGalleryProps } from "lightgallery/lightgallery";
import Image from "next/image";

import Gallery from "@/components/Gallery";
import BlurFade from "@/components/ui/blur-fade";

interface ImagesProps {
  images?: string[];
}

export default function Images({ images }: ImagesProps) {
  const galleryRef = useRef<LightGalleryProps | null>(null);

  const handleOpenGallery = useCallback(
    (index: number) => {
      if (galleryRef.current) {
        galleryRef.current.openGallery(index);
      }
    },
    [galleryRef],
  );

  return (
    <BlurFade
      delay={0.3}
      className="relative grid w-full max-w-7xl gap-4 pt-4 sm:grid-cols-2 sm:gap-6"
    >
      {images?.map((image, index) => (
        <BlurFade delay={index * 0.2} key={index}>
          <Image
            src={image}
            alt={"Image" + index}
            width={1440}
            height={1000}
            className="cursor-pointer rounded-lg object-cover"
            onClick={() => handleOpenGallery(index)}
          />
        </BlurFade>
      ))}
      <Gallery images={images ?? []} galleryRef={galleryRef} />
    </BlurFade>
  );
}
