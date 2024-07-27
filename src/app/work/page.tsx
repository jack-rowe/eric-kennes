import LightboxViewer from "@/components/LightboxViewer";
import { mainGalleryImages } from "@/content/images";

export default function Work() {
  return (
    <main className="flex   flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-4">
        <LightboxViewer
          options={{
            Carousel: {
              infinite: false,
            },
          }}
          galleryData={mainGalleryImages}
        />
      </div>
    </main>
  );
}
