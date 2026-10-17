import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { m } from "@/lib/content";

/** White outlined button with small corner ticks, as used throughout the theme. */
export function OutlineButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group relative inline-block ${className}`}>
      {/* corner ticks */}
      <span aria-hidden className="pointer-events-none absolute -inset-4">
        <span className="absolute top-4 left-0 h-px w-3 bg-rose/70 transition-all group-hover:w-5" />
        <span className="absolute top-0 left-4 h-3 w-px bg-rose/70 transition-all group-hover:h-5" />
        <span className="absolute right-0 bottom-4 h-px w-3 bg-rose/70 transition-all group-hover:w-5" />
        <span className="absolute right-4 bottom-0 h-3 w-px bg-rose/70 transition-all group-hover:h-5" />
      </span>
      <span className="relative block border border-royal bg-white px-[23px] py-2 font-albert text-[17px] leading-[25.5px] font-medium text-ink capitalize transition-colors group-hover:bg-wine group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}

/** Pill button (burgundy) used on inner pages. */
export function PillButton({ children, href, type }: { children: ReactNode; href?: string; type?: "submit" }) {
  const cls =
    "inline-flex items-center gap-3 rounded-[30px] bg-wine px-8 py-[18px] font-grotesk text-base leading-6 font-medium text-white transition-colors hover:bg-rose";
  const arrow = (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" aria-hidden>
      <path d="M11 0 18 7l-7 7-1.4-1.4L14.2 8H0V6h14.2L9.6 1.4Z" />
    </svg>
  );
  return href ? (
    <Link href={href} className={cls}>{children}{arrow}</Link>
  ) : (
    <button type={type} className={cls}>{children}{arrow}</button>
  );
}

/** Small house mark that sits at the end of section labels. */
function HouseMark() {
  return (
    <svg width="42" height="30" viewBox="0 0 42 30" aria-hidden>
      <path d="M0 30V12L11 3l11 9v18h-7v-9H7v9Z" fill="#9b3d16" />
      <path d="M24 30V8l6-5v27Z" fill="#7d7d7d" />
      <path d="M33 30V8l6-5v27Z" fill="#5a5a5a" />
    </svg>
  );
}

/** Uppercase label with a full-width underline and house mark on the right. */
export function SectionLabel({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-end justify-between border-b border-white/70 pb-[13px] ${className}`}>
      <h5 className="font-albert text-base leading-5 font-semibold text-white uppercase">{children}</h5>
      <span className="-mb-[13px]"><HouseMark /></span>
    </div>
  );
}

/** 400px banner with centred uppercase Roboto title used on every inner page. */
export function PageBanner({ title, image = m("6713611fb8a26c8e1a159c9ff6796e37.jpg") }: { title: React.ReactNode; image?: string }) {
  return (
    <section className="relative isolate grid h-[260px] place-items-center overflow-hidden px-4 sm:h-[400px]">
      <Image src={image} alt="" fill preload sizes="100vw" className="-z-10 object-cover" />
      <h1 className="text-center font-roboto text-[34px] leading-none font-semibold text-white uppercase sm:text-[55px]">
        {title}
      </h1>
    </section>
  );
}
