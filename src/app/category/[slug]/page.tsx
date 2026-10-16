import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSidebar } from "@/components/blog-sidebar";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/content";

const categories = [...new Map(posts.map((p) => [p.category.slug, p.category])).values()];

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  return cat ? { title: cat.name } : {};
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const list = posts.filter((p) => p.category.slug === slug).reverse();

  return (
    <div className="bg-wine-glow pt-[140px] pb-[130px]">
      <div className="wrap">
        <h1 className="sec-title mb-12">Category: {cat.name}</h1>
        <div className="grid gap-8 lg:grid-cols-[856px_1fr]">
          <div className="space-y-8">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          <div><BlogSidebar /></div>
        </div>
      </div>
    </div>
  );
}
