"use client";

import { useEffect, useRef, useState } from "react";

/** Portrait video carousel: one video visible at a time, the second plays first, then they alternate forever. */
export function VideoDuo({ first, second, poster }: { first: string; second: string; poster?: string }) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(1);
  const sources = [first, second];

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const next = () => setActive((i) => (i + 1) % sources.length);

  return (
    <div className="w-full max-w-[353px]">
      <div className="overflow-hidden rounded-[20px] bg-black">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
          {sources.map((src, i) => (
            <video
              key={src}
              ref={(el) => {
                videos.current[i] = el;
              }}
              src={src}
              poster={i === 1 ? poster : undefined}
              muted
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
