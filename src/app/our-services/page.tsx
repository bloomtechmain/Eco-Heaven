import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <div className="bg-wine-glow">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.title} id={String(i + 1)} className="grid scroll-mt-10 lg:grid-cols-2">
              <div
                className={`flex items-center px-4 py-16 sm:px-10 lg:py-[90px] ${
                  flip ? "lg:order-2 lg:pr-[120px] lg:pl-[30px]" : "lg:pr-[30px] lg:pl-[94px]"
                }`}
                data-reveal
              >
                <div>
                  <h2 className="mb-5 font-albert text-[34px] leading-none font-semibold sm:text-[45px]">{s.title}</h2>
                  <p className="font-roboto text-lg leading-7">{s.text}</p>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[450px]">
                <Image src={s.pageImage} alt={s.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
