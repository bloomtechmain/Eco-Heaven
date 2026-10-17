"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { instagram, nav, searchTags, site } from "@/lib/content";
import { Close, Mail, Phone, Search, SocialIcon } from "./icons";

const topSocials = ["facebook", "linkedin", "twitter", "instagram"];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);

  // Close overlays on navigation and lock body scroll while open.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setDrawer(false);
    setSearch(false);
  }
  useEffect(() => {
    document.body.style.overflow = drawer || search ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawer(false);
        setSearch(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer, search]);

  const goSearch = (q?: string) => {
    if (q) router.push(`/blog?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <header className="relative z-50 flex h-[76px] bg-black lg:h-[116px]">
        <Link
          href="/"
          aria-label="Smart Eco Heaven home"
          className="flex w-[130px] shrink-0 items-center justify-center bg-wine p-3 lg:w-[220px] lg:p-5"
        >
          <Image src="/media/logo.png" alt="Smart Eco Heaven" width={1536} height={1024} preload sizes="120px" className="h-auto w-[100px]" />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top bar */}
          <div className="hidden h-11 items-center justify-between pl-6 font-sans text-[15px] text-white lg:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white/70">
                  <Mail width={15} height={15} /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white/70">
                  <Phone width={15} height={15} /> {site.phone}
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              {topSocials.map((s) => (
                <a key={s} href="#" aria-label={s} className="grid w-[50px] place-items-center hover:text-white/70">
                  <SocialIcon name={s} width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Main bar */}
          <div className="flex flex-1 items-center bg-navy pl-4 lg:h-[72px] lg:flex-none lg:pl-[30px]">
            <nav className="hidden shrink-0 xl:block" aria-label="Main">
              <ul className="flex items-center">
                {nav.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative mr-[50px] inline-block py-7 whitespace-nowrap font-sans text-base leading-4 font-medium text-white capitalize after:absolute after:bottom-5 after:left-0 after:h-px after:w-full after:origin-left after:bg-white after:transition-transform ${
                          active ? "after:scale-x-0" : "after:scale-x-0 hover:after:scale-x-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="ml-auto flex h-full items-center gap-7 xl:pr-8">
              <Link
                href="/smart-living"
                className="hidden border border-royal bg-white px-[26px] py-2.5 font-albert text-[17px] leading-[25.5px] font-medium whitespace-nowrap text-ink transition-colors hover:bg-wine hover:text-white sm:block"
              >
                Explore The Future
              </Link>
              <button
                type="button"
                onClick={() => setSearch(true)}
                className="flex items-center gap-3 font-sans text-base text-white/40 transition-colors hover:text-white"
              >
                <Search width={20} height={20} className="text-white" strokeWidth={2.4} />
                <span className="hidden whitespace-nowrap xl:inline">Search Here ...</span>
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setDrawer(true)}
                className="grid h-full w-[72px] shrink-0 place-items-center bg-wine xl:hidden"
              >
                <span className="grid grid-cols-3 gap-[5px]">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="size-[5px] rounded-full bg-white" />
                  ))}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-300 ${drawer ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setDrawer(false)}
      />
      <aside
        aria-hidden={!drawer}
        inert={!drawer}
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-ink px-10 py-12 text-white transition-transform duration-500 ${
          drawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/"><Image src="/media/logo.png" alt="Smart Eco Heaven" width={1536} height={1024} className="h-auto w-[120px]" sizes="120px" /></Link>
          <button type="button" aria-label="Close menu" onClick={() => setDrawer(false)} className="grid size-11 place-items-center bg-wine">
            <Close />
          </button>
        </div>

        <nav className="mt-10 xl:hidden" aria-label="Mobile">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3.5 font-sans text-lg font-medium">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12">
          <h6 className="font-albert text-xl font-semibold">Stay Inspired with Instagram</h6>
          <div className="mt-5 grid grid-cols-2 gap-5">
            {instagram.map((src) => (
              <div key={src} className="relative h-[200px] overflow-hidden">
                <Image src={src} alt="" fill sizes="165px" className="object-cover transition-transform duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h6 className="font-albert text-xl font-semibold">we&apos;re on social media:</h6>
          <div className="mt-5 flex gap-3">
            {topSocials.map((s) => (
              <a key={s} href="#" aria-label={s} className="grid size-11 place-items-center border border-white/20 hover:border-wine hover:bg-wine">
                <SocialIcon name={s} width={17} height={17} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Search overlay */}
      <div
        aria-hidden={!search}
        inert={!search}
        className={`fixed inset-0 z-[80] flex items-start justify-center bg-ink/95 px-4 pt-[18vh] transition-opacity duration-300 ${
          search ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button type="button" aria-label="Close search" onClick={() => setSearch(false)} className="absolute top-6 right-6 grid size-12 place-items-center bg-wine">
          <Close />
        </button>
        <div className="w-full max-w-3xl">
          <h5 className="font-albert text-3xl font-semibold capitalize">search here ...</h5>
          <form
            className="mt-6 flex border-b border-white/40 focus-within:border-white"
            onSubmit={(e) => {
              e.preventDefault();
              goSearch(new FormData(e.currentTarget).get("q")?.toString().trim());
            }}
          >
            <input name="q" type="search" placeholder="What are you looking for?..." className="w-full bg-transparent py-4 text-xl outline-none placeholder:text-white/40" />
            <button type="submit" aria-label="Search"><Search width={24} height={24} /></button>
          </form>
          <h6 className="mt-8 font-albert text-base text-white/60">People also search for:</h6>
          <div className="mt-3 flex flex-wrap gap-2">
            {searchTags.map((t) => (
              <button key={t} type="button" onClick={() => goSearch(t)} className="border border-white/20 px-4 py-2 text-sm hover:border-wine hover:bg-wine">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
