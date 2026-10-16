"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { posts, postsNewestFirst as ordered } from "@/lib/content";
import { PostCard } from "./post-card";

const text = (p: (typeof posts)[number]) =>
  [p.title, p.category.name, ...p.body.map((b) => Object.values(b)[0])].join(" ").toLowerCase();

export function BlogList() {
  const q = useSearchParams().get("q")?.trim() ?? "";
  const list = q ? ordered.filter((p) => text(p).includes(q.toLowerCase())) : ordered;

  return (
    <div className="space-y-8">
      {q && (
        <p className="font-sans text-lg">
          {list.length} result{list.length === 1 ? "" : "s"} for <strong>&ldquo;{q}&rdquo;</strong> ·{" "}
          <Link href="/blog" className="underline hover:text-white/70">Clear search</Link>
        </p>
      )}
      {list.length ? list.map((p) => <PostCard key={p.slug} post={p} />) : (
        <p className="font-sans text-lg">Nothing matched your search. Try another keyword.</p>
      )}
    </div>
  );
}
