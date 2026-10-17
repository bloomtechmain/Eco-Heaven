import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner, PillButton } from "@/components/ui";
import { about, aboutTeaser, m } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

const h2 = "mb-5 font-albert text-[34px] leading-none font-semibold sm:text-[45px]";
const p = "font-roboto text-lg leading-7";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={
          <span className="font-logo text-[clamp(18px,6.2vw,34px)] font-black tracking-[-0.02em] sm:text-[64px]">
            Smart <span className="text-[#f5b400]">Eco</span> Heaven
          </span>
        }
      />

      <div className="bg-wine-glow">
        {/* Intro + photo */}
        <section className="grid lg:grid-cols-[711px_1fr]">
          <div className="flex items-center px-4 py-16 sm:px-10 lg:py-[100px] lg:pr-[30px] lg:pl-[94px]" data-reveal>
            <div>
              <h2 className={h2}>{aboutTeaser.title}</h2>
              <p className={p}>{about.intro}</p>
            </div>
          </div>
          <div className="flex p-4 sm:p-8 lg:py-12 lg:pr-[70px] lg:pl-[20px]" data-reveal>
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[20px] shadow-[0_0_10px_rgba(255,255,255,0.5)] lg:min-h-[420px]">
              <Image src={m("about-intro.jpg")} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="grid lg:grid-cols-[711px_1fr]">
          <div className="flex p-4 sm:p-8 lg:py-12 lg:pr-[20px] lg:pl-[70px]" data-reveal>
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[20px] shadow-[0_0_10px_rgba(255,255,255,0.5)] lg:min-h-[440px]">
              <Image src={m("about-story.jpg")} alt="" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-4 py-16 sm:px-10 lg:py-[72px] lg:pr-[120px] lg:pl-[34px]" data-reveal>
            <div>
              <h2 className={h2}>Our Story</h2>
              {about.story.map((t) => <p key={t} className={p}>{t}</p>)}
            </div>
          </div>
        </section>

        {/* Vision + mission */}
        <section className="mx-auto max-w-[1140px] space-y-[100px] px-4 py-[100px] lg:px-0">
          <div className="grid items-center gap-10 lg:grid-cols-[566px_574px]">
            <div className="px-[10px]" data-reveal>
              <h2 className={h2}>Our Vision</h2>
              <p className={p}>{about.vision}</p>
            </div>
            <div className="relative aspect-[574/492] overflow-hidden rounded-[20px] shadow-[0_0_10px_rgba(255,255,255,0.5)]" data-reveal>
              <Image src={m("about-vision.jpg")} alt="" fill sizes="574px" className="object-cover" />
            </div>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[555px_1fr] lg:gap-5">
            <div className="relative aspect-[555/479] overflow-hidden rounded-[15px] shadow-[0_0_27px_-8px_#919191]" data-reveal>
              <Image src={m("about-mission.jpg")} alt="" fill sizes="555px" className="object-cover" />
            </div>
            <div className="px-[10px]" data-reveal>
              <h2 className={h2}>Our Mission</h2>
              <p className={p}>{about.mission}</p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="relative isolate px-4 py-[70px]">
        <Image src={m("about-cta.jpg")} alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div
          className="mx-auto max-w-[923px] rounded-[15px] bg-black/[0.63] px-6 py-10 text-center shadow-[0_0_12px_-4px_#22060e] sm:px-10"
          data-reveal
        >
          <h2 className="mx-auto mb-6 max-w-[560px] font-albert text-[34px] leading-none font-semibold sm:text-[45px]">{about.cta.title}</h2>
          <p className="mb-6 font-roboto text-lg leading-7">{about.cta.text}</p>
          <PillButton href="/our-homes">Explore Our Homes</PillButton>
        </div>
      </section>
    </>
  );
}
