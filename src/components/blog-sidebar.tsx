import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/lib/content";

const categories = [
  { name: "Brand Design Identity", count: 0, slug: null },
  { name: "Uncategorized", count: 0, slug: null },
  { name: "Clock Fly Strategy", count: posts.length, slug: "clock-fly-strategy" },
];

const tags = ["best", "digital", "innovation", "IT services", "marketing", "On sale", "product", "startup", "technology"];

const heading = "mb-6 font-albert text-2xl leading-none font-semibold";

/** Navy sidebar with search, categories, recent posts and tags (as on the WordPress blog). */
export function BlogSidebar() {
  return (
    <aside className="space-y-[90px] bg-navy px-6 py-12 sm:px-12">
      <div>
        <h4 className={heading}>Search</h4>
        <form action="/blog" className="flex">
          <input name="q" type="search" placeholder="Search..." className="h-[54px] min-w-0 flex-1 rounded-l bg-white px-5 font-sans text-base text-ink outline-none placeholder:text-[#999]" />
          <button type="submit" aria-label="Search" className="grid w-[54px] place-items-center rounded-r bg-wine">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </button>
        </form>
      </div>

      <div>
        <h4 className={heading}>Categories</h4>
        <ul>
          {categories.map((c) => {
            const inner = (
              <>
                <span className="flex items-center gap-2">
                  <span className="size-4 rounded-full border border-white/80" /> {c.name}
                </span>
                <span>({c.count})</span>
              </>
            );
            return (
              <li key={c.name} className="border-b border-white/80">
                {c.slug ? (
                  <Link href={`/category/${c.slug}`} className="flex justify-between py-[22px] font-sans text-lg hover:text-white/70">{inner}</Link>
                ) : (
                  <span className="flex justify-between py-[22px] font-sans text-lg">{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h4 className={heading}>Recent Posts</h4>
        <ul className="space-y-10">
          {posts.map((p) => (
            <li key={p.slug} className="flex gap-6">
              <Link href={`/${p.slug}`} className="relative h-[160px] w-[121px] shrink-0 overflow-hidden">
                <Image src="/media/ChatGPT-Image-Sep-17-2026-03_53_52-AM.webp" alt="" fill sizes="121px" className="object-cover" />
              </Link>
              <div>
                <p className="font-sans text-lg text-white/70">{p.category.name}</p>
                <p className="mb-2 font-sans text-lg text-white/70">{formatDate(p.date)}</p>
                <Link href={`/${p.slug}`} className="line-clamp-4 font-albert text-lg leading-[26px] font-semibold capitalize hover:text-white/70">
                  {p.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={heading}>Tags</h4>
        <div className="flex flex-wrap gap-3">
          {tags.map((t) => (
            <Link key={t} href={`/blog?q=${encodeURIComponent(t)}`} className="rounded bg-white px-5 py-2.5 font-sans text-base text-ink capitalize transition-colors hover:bg-wine hover:text-white">
              {t}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
