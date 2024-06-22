import LightboxViewer from "@/components/LightboxViewer";
import { mainGalleryImages } from "@/images";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-4">
        <p className="text-4xl font-bold">Featured Work</p>
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
