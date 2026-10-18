"use client";

import { useEffect, useRef, useState } from "react";

/** Portrait video carousel: one video visible at a time, the second plays first, then they alternate forever. */
export function VideoDuo({ first, second, poster }: { first: string; second: string; poster?: string }) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(muted);
  const blocked = useRef(false);
  const sources = [first, second];

  // Play with the current mute state; if the browser refuses sound, fall back to muted playback.
  const start = (v: HTMLVideoElement) => {
    v.muted = mutedRef.current;
    v.play().catch(() => {
      blocked.current = true;
      v.muted = true;
      mutedRef.current = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  };

  useEffect(() => {
    mutedRef.current = muted;
    videos.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted;
      // Unmuting without a real user gesture makes some browsers pause the video; resume it.
      if (i === active && inView && v.paused) start(v);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muted]);

  // Play (with sound) only while the carousel is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && inView) start(v);
      else v.pause();
    });
  }, [active, inView]);

  // Only a tap/click or key press counts as a real gesture; touchstart/pointerdown also fire while scrolling.
  useEffect(() => {
    const events = ["click", "keydown"] as const;
    const unlock = () => {
      if (!blocked.current) return;
      blocked.current = false;
      setMuted(false);
    };
    events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, unlock));
  }, []);

  const next = () => setActive((i) => (i + 1) % sources.length);

  return (
    <div ref={root} className="w-full max-w-[353px]">
      <div className="relative overflow-hidden rounded-[20px] bg-black">
        <button
          type="button"
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          onClick={() => {
            blocked.current = false;
            setMuted((m) => !m);
          }}
          className={`absolute top-3 right-3 z-10 flex h-10 items-center justify-center gap-2 rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 ${muted ? "animate-pulse px-4 text-sm font-semibold" : "w-10"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            {muted ? <path d="m22 9-6 6m0-6 6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
          </svg>
          {muted && <span>Tap for sound</span>}
        </button>
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
          {sources.map((src, i) => (
            <video
              key={src}
              ref={(el) => {
                videos.current[i] = el;
              }}
              src={src}
              poster={i === 1 ? poster : undefined}
              playsInline
              preload="metadata"
              controlsList="nodownload"
              aria-hidden={i !== active}
              className="aspect-[353/628] w-full shrink-0 object-cover"
              onEnded={next}
            />
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-3">
        {sources.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show video ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-2.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
