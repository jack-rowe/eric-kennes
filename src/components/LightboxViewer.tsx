"use client";
import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

type LightboxViewerProps = {
  delegate?: string;
  options?: Record<string, any>;
  galleryData: ImageJSON[];
};

function LightboxViewer(props: LightboxViewerProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden"
    >
      {props.galleryData.map((image: ImageJSON) => (
        <a
          data-fancybox="gallery"
          href={image.fullSizeURL}
          key={image.id}
          className="w-full overflow-hidden"
        >
          <Image
            src={image.thumbnailURL}
            width={image.width}
            height={image.height}
            alt={image.alt}
            layout="responsive"
            className="object-cover w-full h-full"
          />
        </a>
      ))}
    </div>
  );
}

export default LightboxViewer;
