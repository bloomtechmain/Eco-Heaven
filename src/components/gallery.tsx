"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Close } from "./icons";

export function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const n = images.length;
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, step]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            data-reveal
            className="group relative block h-[300px] w-full overflow-hidden rounded-[20px]"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`EcooHaven home ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 364px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {index !== null &&
        createPortal(
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4" onClick={() => setIndex(null)}>
            <button type="button" aria-label="Close" className="absolute top-5 right-5 text-white">
              <Close width={32} height={32} />
            </button>
            <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 grid size-12 place-items-center bg-white/10 text-white hover:bg-wine">
              <ArrowLeft />
            </button>
            <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <Image src={images[index]} alt="" fill sizes="100vw" className="object-contain" />
            </div>
            <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 grid size-12 place-items-center bg-white/10 text-white hover:bg-wine">
              <ArrowRight />
            </button>
            <p className="absolute bottom-5 text-sm text-white/70">{index + 1} / {n}</p>
          </div>,
          document.body,
        )}
    </>
  );
}
