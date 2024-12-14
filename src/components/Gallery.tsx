import { MutableRefObject } from "react";
import LightGallery from "lightgallery/react";
import { LightGallery as LightGalleryProps } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";

interface GalleryProps {
  galleryRef: MutableRefObject<LightGalleryProps | null>;
  images: string[];
}

export default function Gallery({ images, galleryRef }: GalleryProps) {
  return (
    <>
      <LightGallery
        onInit={(detail) => {
          galleryRef.current = detail.instance;
        }}
        dynamic
        dynamicEl={images?.map((image) => ({
          src: image,
          thumb: image,
        }))}
        index={0}
        closable
        hideBarsDelay={2000}
        counter
      />
    </>
  );
}
