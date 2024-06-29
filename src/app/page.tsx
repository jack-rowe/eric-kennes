"use client";
import { mainGalleryImages } from "@/content/images";
import LightboxViewer from "@/components/LightboxViewer";

export default function Home() {
  const firstImage = mainGalleryImages[0];

  return (
    <main className="flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="w-full max-w-[1080px]">
        <LightboxViewer
          options={{
            Carousel: {
              infinite: false,
            },
          }}
          galleryData={[firstImage]}
        />
        {firstImage.title && (
          <p className="mt-4 text-xl font-semibold">{firstImage.title}</p>
        )}
        {firstImage.description && (
          <p className="mt-2 text-lg">{firstImage.description}</p>
        )}
      </div>
    </main>
  );
}
