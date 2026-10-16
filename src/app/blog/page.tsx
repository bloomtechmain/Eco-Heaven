import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogList } from "@/components/blog-list";
import { BlogSidebar } from "@/components/blog-sidebar";
import { PostCard } from "@/components/post-card";
import { postsNewestFirst as ordered } from "@/lib/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="pt-[140px] pb-[130px]" style={{ background: "linear-gradient(180deg, #5a1025 0%, #2a0711 30%, #12030a 55%, #5a1025 100%)" }}>
      <div className="wrap grid gap-8 lg:grid-cols-[856px_1fr]">
        <Suspense fallback={<div className="space-y-8">{ordered.map((p) => <PostCard key={p.slug} post={p} />)}</div>}>
          <BlogList />
        </Suspense>
        <div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
