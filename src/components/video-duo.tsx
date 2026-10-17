"use client";

import { useRef } from "react";

/** Two portrait videos side by side that play one after the other (right one first), looping back and forth. */
export function VideoDuo({ first, second, poster }: { first: string; second: string; poster?: string }) {
  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);

  const play = (v: HTMLVideoElement | null) => {
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const cls = "aspect-[353/628] w-full max-w-[353px] rounded-[20px] bg-black object-cover";
  return (
    <>
      <video ref={a} src={first} muted playsInline preload="metadata" controlsList="nodownload" className={cls} onEnded={() => play(b.current)} />
      <video ref={b} src={second} poster={poster} autoPlay muted playsInline preload="metadata" controlsList="nodownload" className={cls} onEnded={() => play(a.current)} />
    </>
  );
}
