"use client";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type LightboxViewerProps = {
  delegate?: string;
  options?: Record<string, any>;
  galleryData: ImageJSON[];
  children?: React.ReactNode;
  featuredView?: boolean;
};

function LightboxViewer({
  delegate,
  options,
  galleryData,
  children,
  featuredView = false,
}: LightboxViewerProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const delegateValue = delegate || "[data-fancybox]";
    const optionsValue = options || {
      caption: function (fancybox: any, carousel: any, slide: any) {
        return (
          `${slide.index + 1} / ${carousel.slides.length} <br />` +
          (slide.caption || "")
        );
      },
    };

    NativeFancybox.bind(container, delegateValue, optionsValue);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  if (children) {
    return (
      <div ref={containerRef}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            "data-fancybox": "gallery",
            "data-src": galleryData[index].fullSizeURL,
            "data-caption": `${galleryData[index].title || ""}<br />${
              galleryData[index].description || ""
            }`,
          })
        )}
      </div>
    );
  }

  if (featuredView) {
    return (
      <div ref={containerRef} className="w-full space-y-8">
        {galleryData.map((image: ImageJSON) => (
          <div key={image.id} className="w-full">
            <a
              data-fancybox="gallery"
              href={image.fullSizeURL}
              data-caption={`${image.title || ""}<br />${
                image.description || ""
              }`}
              className="w-full block"
            >
              <div className="relative w-full h-[60vh]">
                <Image
                  src={image.thumbnailURL}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
            {image.title && (
              <p className="mt-4 text-xl font-semibold">{image.title}</p>
            )}
            {image.description && (
              <p className="mt-2 text-lg">{image.description}</p>
            )}
          </div>
        ))}
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
          data-caption={`${image.title || ""}<br />${image.description || ""}`}
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
