import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/lib/content";
import { SocialIcon } from "./icons";

/** Faint architectural line drawing behind the footer (original artwork). */
function FooterLines() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[386px] w-full text-white/[0.06]" viewBox="0 0 1440 386" preserveAspectRatio="xMidYMax slice" fill="none" stroke="currentColor">
      <path d="M0 300 C300 120 700 60 1100 140 S1400 260 1440 240" />
      <path d="M0 330 C320 160 720 100 1120 180 S1400 290 1440 280" />
      {Array.from({ length: 24 }).map((_, i) => (
        <path key={i} d={`M${120 + i * 52} 386 L${160 + i * 46} ${150 + Math.abs(12 - i) * 9}`} />
      ))}
      <path d="M420 386V250h260v136M700 386V210h300v176M1020 386V260h220v126" />
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={`h${i}`} d={`M420 ${266 + i * 15}h260M700 ${226 + i * 20}h300`} />
      ))}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 lg:pt-[130px]">
      <FooterLines />
      <div className="wrap relative">
        <div className="grid gap-12 pb-16 lg:grid-cols-2 lg:pb-[118px]">
          <div>
            <Link href="/" aria-label="EcooHaven home" className="inline-block">
              <Image src="/media/logo.png" alt="Smart Eco Heaven" width={1536} height={1024} className="h-auto w-[200px]" sizes="200px" />
            </Link>
            <div className="mt-14 flex gap-[120px]">
              {footerNav.map((col, i) => (
                <ul key={i} className="space-y-[15px]">
                  {col.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="font-sans text-lg leading-[27px] text-white capitalize transition-colors hover:text-white/60">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-albert text-5xl leading-[1.2] font-medium sm:text-[80px]">Get In Touch</h4>
            <div className="mt-12 space-y-[15px] font-sans text-base leading-[31px] font-medium tracking-[2px] uppercase sm:mt-[90px] sm:text-xl">
              <a href={`mailto:${site.email}`} className="block hover:text-white/60">{site.email}</a>
              <a href={site.phoneHref} className="block hover:text-white/60">{site.phone}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/20">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="font-sans text-lg">© 2026 All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} className="flex items-center gap-2 font-sans text-base text-white/60 capitalize transition-colors hover:text-white">
                <SocialIcon name={s.label} width={16} height={16} className="text-white" /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
