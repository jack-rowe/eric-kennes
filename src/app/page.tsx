"use client";
import { featuredImages } from "@/content/images";
import LightboxViewer from "@/components/LightboxViewer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="w-full max-w-[1080px]">
        <LightboxViewer
          options={{
            Carousel: {
              infinite: false,
            },
          }}
          galleryData={featuredImages}
          featuredView={true}
        />
      </div>
    </main>
  );
}
