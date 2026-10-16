import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { smartLiving } from "@/lib/content";

export const metadata: Metadata = { title: "Smart Living" };

export default function SmartLivingPage() {
  return (
    <>
      <PageBanner title="A Smarter Way to Live" />
      <div className="bg-wine-glow px-4 py-[100px] lg:px-0">
        <div className="mx-auto max-w-[1140px] space-y-[70px]">
          {smartLiving.map((s, i) => {
            const video = s.videos[0];
            return (
              <section key={s.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-5">
                <div className={`px-[10px] ${i % 2 ? "lg:order-2" : ""}`} data-reveal>
                  <h2 className="mb-5 font-albert text-[34px] leading-none font-semibold sm:text-[45px]">{s.title}</h2>
                  <p className="font-roboto text-lg leading-7 text-white/90">
                    {s.parts.map((part, j) =>
                      typeof part === "string" ? part : <strong key={j} className="font-bold text-white">{part.highlight}</strong>,
                    )}
                  </p>
                </div>
                {video && (
                  <video
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    controlsList="nodownload"
                    className="aspect-[555/312] w-full rounded-[20px] bg-black object-cover"
                    data-reveal
                  />
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
