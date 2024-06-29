"use client";
import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

type LightboxViewerProps = {
  delegate?: string;
  options?: Record<string, any>;
  galleryData: ImageJSON[];
  children?: React.ReactNode;
};

function LightboxViewer({
  delegate,
  options,
  galleryData,
  children,
}: LightboxViewerProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const delegateValue = delegate || "[data-fancybox]";
    const optionsValue = options || {};

    NativeFancybox.bind(container, delegateValue, optionsValue);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  if (children) {
    return (
      <div ref={containerRef}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, {
            "data-fancybox": "gallery",
            "data-src": galleryData[0].fullSizeURL,
          })
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={
        galleryData.length === 1
          ? "w-full"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      }
    >
      {galleryData.map((image: ImageJSON) => (
        <a
          data-fancybox="gallery"
          href={image.fullSizeURL}
          key={image.id}
          className="w-full"
        >
          <div
            className={`relative ${
              galleryData.length === 1 ? "w-full h-[50vh]" : "w-full h-64"
            }`}
          >
            <Image
              src={image.thumbnailURL}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default LightboxViewer;
