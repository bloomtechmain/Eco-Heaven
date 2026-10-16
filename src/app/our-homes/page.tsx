import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { PageBanner } from "@/components/ui";
import { homesGallery } from "@/lib/content";

export const metadata: Metadata = { title: "Our Homes" };

export default function OurHomesPage() {
  return (
    <>
      <PageBanner title="Our Homes" />
      <div className="bg-wine-glow px-4 py-[108px]">
        <div className="mx-auto max-w-[1124px]">
          <Gallery images={homesGallery} />
        </div>
      </div>
    </>
  );
}
