import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/ui";
import { m, site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

/* Line-art icons for the info row (original artwork). */
const icons = [
  <svg key="a" width="90" height="80" viewBox="0 0 90 80" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M2 14c4-3 7-3 10 0M12 10c3-2 6-2 8 0M36 79V22l23-14 23 14v57ZM6 79V48l15-10 15 10M14 79V62h10v17M44 30h30v12H44ZM59 30v12M50 52h26M50 58h26M50 64h26M50 70h26M50 76h26" />
  </svg>,
  <svg key="b" width="90" height="109" viewBox="0 0 90 109" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M40 6c-4 4 4 6 0 10s4 6 0 10M36 34h10v26H36ZM2 108V64l34-20v64ZM46 108V60l20-14 20 14v48ZM58 108V90a8 8 0 0 1 16 0v18M8 74h22M8 82h22M8 90h22M8 100h22" />
  </svg>,
  <svg key="c" width="90" height="103" viewBox="0 0 90 103" fill="none" stroke="#fff" strokeWidth="2">
    <circle cx="14" cy="14" r="7" />
    <path d="M14 0v3M14 25v3M0 14h3M25 14h3M4 4l2 2M22 22l2 2M4 24l2-2M22 6l2-2M70 6c-6 10-6 18 0 22 6-4 6-12 0-22ZM70 28v14M22 102V58l18-12 18 12v20M30 102V80h12v22M88 40C60 50 44 76 40 102M88 54C66 64 54 82 52 102M88 68C72 76 64 88 64 102M88 82c-10 6-14 12-14 20" />
  </svg>,
];

const info = [
  { title: "Address", value: site.region },
  { title: "Emails Address", value: site.email, href: `mailto:${site.email}` },
  { title: "Call Us", value: site.phone, href: site.phoneHref },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Get In Touch" />

      <div className="bg-wine-glow pt-[110px] pb-[100px]">
        <section className="grid gap-12 px-[10px] lg:grid-cols-[628px_1fr] lg:gap-20">
          <div className="relative aspect-[628/700] overflow-hidden rounded-[15px] shadow-[0_0_16px_-4px_#000]" data-reveal>
            <Image src={m("Modern-Glass-Mansion-at-Sunset.png")} alt="Smart Eco Heaven residence" fill sizes="(min-width: 1024px) 628px, 100vw" className="object-cover" />
          </div>
          <div className="px-4 pt-4 lg:max-w-[707px] lg:px-0" data-reveal>
            <h6 className="mb-2 pl-[10px] font-albert text-lg leading-[27px] font-medium">Contact Us</h6>
            <h2 className="mb-14 font-albert text-[40px] leading-none font-semibold tracking-[-0.03em] sm:text-[65px]">
              Let’s Talk About Your Dream Project.
            </h2>
            <ContactForm variant="page" />
          </div>
        </section>

        <section className="wrap mt-[185px]">
          <div className="border-y border-white/80 py-10">
            <div className="grid md:grid-cols-3">
              {info.map((it, i) => (
                <div key={it.title} className={`px-4 py-6 md:px-[68px] ${i ? "md:border-l md:border-white/80" : ""}`} data-reveal>
                  <h4 className="font-albert text-xl leading-[21.5px] font-semibold tracking-[-0.6px] capitalize">{it.title}</h4>
                  <div className="mt-11 mb-11 flex h-[109px] items-end">{icons[i]}</div>
                  {it.href ? (
                    <a href={it.href} className="font-albert text-lg leading-7 hover:text-white/70">{it.value}</a>
                  ) : (
                    <p className="max-w-[295px] font-albert text-lg leading-7">{it.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
