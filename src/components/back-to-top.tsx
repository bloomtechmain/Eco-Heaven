"use client";

import { useEffect, useState } from "react";

/** White diamond "Top" button pinned bottom-right. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-[22px] bottom-[22px] z-40 grid size-[57px] place-items-center transition-opacity duration-300 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <span className="absolute size-10 rotate-45 border border-black bg-white" />
      <span className="relative font-albert text-sm text-ink">Top</span>
    </button>
  );
}
