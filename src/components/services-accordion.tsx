"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content";

// Faint diagonal "blueprint" strokes on the cards (original CSS pattern).
const cardLines =
  "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 34px), repeating-linear-gradient(25deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 48px)";

export function ServicesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Desktop: horizontal accordion */}
      <div className="hidden h-[662px] lg:flex">
        {services.map((s, i) => {
          const on = i === active;
          return (
            <div
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`relative shrink-0 overflow-hidden px-[30px] py-[68px] transition-[width,background-color] duration-500 ${
                on ? "w-[400px] bg-navy" : "w-[108px] cursor-pointer border-x-[0.5px] border-t border-white bg-wine-deep"
              }`}
              style={{ backgroundImage: cardLines }}
            >
              {on ? (
                <div className="w-[340px] animate-fade-up">
                  <h4 className="mb-6 font-albert text-[30px] leading-[1.07] font-extrabold tracking-[-0.03em] uppercase">
                    <Link href="/our-services" className="line-clamp-2">{s.homeTitle ?? s.title}</Link>
                  </h4>
                  <div className="relative mb-[34px] h-[320px] w-[272px] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill sizes="272px" className="object-cover" />
                  </div>
                  <p className="line-clamp-3 font-sans text-lg leading-7">{s.short}</p>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-between">
                  <div className="relative -mx-[13px] h-[90px] w-[74px] overflow-hidden">
                    <Image src={s.image} alt="" fill sizes="74px" className="object-cover grayscale" />
                  </div>
                  <h4 className="-mx-6 w-[118px] truncate text-center font-albert text-2xl leading-[1.2] font-semibold tracking-[-0.02em] uppercase">
                    {s.homeTitle ?? s.title}
                  </h4>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {services.map((s) => (
          <Link key={s.title} href="/our-services" className="block bg-navy p-6" style={{ backgroundImage: cardLines }}>
            <h4 className="mb-4 font-albert text-2xl font-extrabold uppercase">{s.homeTitle ?? s.title}</h4>
            <div className="relative mb-5 aspect-[17/20] overflow-hidden">
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <p className="font-sans">{s.short}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
