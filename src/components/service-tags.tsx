"use client";

import { useEffect, useRef, useState } from "react";
import { serviceTags } from "@/lib/content";

// Deterministic tilts (degrees) so server and client markup match.
const tilts = [0, -2, 0, 0, 2, 0, -1.5, 0, 3, 0, 0, -3, 0, 2];
// Deterministic sideways nudges (px) so the rows look scattered rather than lined up on the left.
const nudges = [0, 30, 10, 60, 0, 40, 20, 0, 70, 15, 50, 5];
// One distinct hue per pill, evenly spread around the colour wheel.
const hue = (i: number) => Math.round((i * 360) / serviceTags.length);
const STAGGER_MS = 110;

/** Pile of feature pills that drop into place when the section scrolls into view. */
export function ServiceTags() {
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          // Aim each pill's start point at the section's top-left corner, so it falls from there onto the pile.
          const box = el.getBoundingClientRect();
          list.current?.querySelectorAll<HTMLElement>(".tag-pill").forEach((pill) => {
            const r = pill.getBoundingClientRect();
            pill.style.setProperty("--dx", `${box.left - r.left - r.width}px`);
            pill.style.setProperty("--dy", `${box.top - r.top - 120}px`);
          });
          setLanded(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const total = serviceTags.length * STAGGER_MS + 900;

  return (
    <section
      ref={root}
      data-landed={landed || undefined}
      className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-black pt-16 pb-6 sm:min-h-[460px] sm:pb-8"
    >
      <h2 className="sr-only">Smart home features</h2>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-8 -z-10 text-center font-albert text-[15vw] leading-[0.95] font-semibold tracking-[-0.03em] text-white/[0.09] uppercase select-none sm:top-10 sm:text-[11vw]"
      >
        Smart Eco Heaven
        <br />
        Luxury Smart Homes
      </div>

      <ul ref={list} className="wrap flex flex-wrap-reverse content-start justify-around gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-3">
        {serviceTags.map((label, i) => (
          <li
            key={label}
            className="tag-pill flex items-center"
            style={{ "--i": i, zIndex: i, marginLeft: nudges[i % nudges.length], "--rot": `${tilts[i % tilts.length]}deg` } as React.CSSProperties}
          >
            <span
              aria-hidden
              style={{ backgroundColor: `hsl(${hue(i)} 65% 24%)` }}
              className="mr-1.5 grid size-9 shrink-0 place-items-center rounded-full text-lg text-white sm:size-11 sm:text-lg"
            >
              ✓
            </span>
            <span
              style={{ backgroundColor: `hsl(${hue(i)} 65% 40%)` }}
              className="rounded-full py-2 px-4 font-sans text-xs leading-5 font-medium text-white sm:py-2.5 sm:px-6 sm:text-base">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/20">
        <div className="tag-progress h-full bg-navy" style={{ transitionDuration: `${total}ms` }} />
      </div>
    </section>
  );
}
