"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "./icons";

const toEmbed = (url: string) => {
  const id = new URL(url).searchParams.get("v") ?? url.split("/").pop();
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
};

export function VideoPopup({ url, className = "" }: { url: string; className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Play video"
        onClick={() => setOpen(true)}
        className={`group grid size-[120px] place-items-center rounded-full border border-white text-white transition-colors hover:bg-white/10 lg:size-[168px] ${className}`}
      >
        <svg width="34" height="40" viewBox="0 0 34 40" fill="none" stroke="currentColor" strokeWidth="2.2" className="ml-2 transition-transform group-hover:scale-110" aria-hidden>
          <path d="M2 2.5v35L32 20Z" strokeLinejoin="round" />
        </svg>
      </button>
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4"
            onClick={() => setOpen(false)}
          >
            <button type="button" aria-label="Close video" className="absolute top-5 right-5 text-white">
              <Close width={32} height={32} />
            </button>
            <div className="aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={toEmbed(url)}
                title="EcooHaven video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
