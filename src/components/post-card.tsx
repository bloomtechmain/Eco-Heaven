import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/content";

const excerpt = (post: Post, n = 150) => {
  const first = post.body.find((b): b is { p: string } => "p" in b)?.p ?? "";
  return first.length > n ? `${first.slice(0, n).trimEnd()}...` : first;
};

const metaIcon = "size-[18px] shrink-0 text-rose";

/** Bordered list card used on /blog and category archives. */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="border border-white/70 p-5 sm:p-8" data-reveal>
      <Link href={`/${post.slug}`} className="group relative block aspect-[790/380] overflow-hidden">
        <Image
          src="/media/ChatGPT-Image-Sep-17-2026-03_53_52-AM.webp"
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 790px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <ul className="mt-8 flex flex-wrap gap-x-[60px] gap-y-2 font-sans text-lg capitalize">
        <li className="flex items-center gap-2">
          <svg className={metaIcon} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0Z" /></svg>
          {post.author}
        </li>
        <li className="flex items-center gap-2">
          <svg className={metaIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v12H8l-4 4Z" /></svg>
          Comments(0)
        </li>
        <li className="flex items-center gap-2">
          <svg className={metaIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v14H4ZM8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" /></svg>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </li>
      </ul>
      <h3 className="mt-6 font-albert text-2xl leading-[1.25] font-semibold tracking-[-0.02em] capitalize sm:text-[32px]">
        <Link href={`/${post.slug}`} className="hover:text-white/70">{post.title}</Link>
      </h3>
      <p className="mt-6 font-sans text-lg leading-7">{excerpt(post)}</p>
      <Link href={`/${post.slug}`} className="group mt-6 inline-flex items-center gap-3 font-albert text-base font-semibold uppercase">
        Read More
        <span className="grid size-8 place-items-center rounded-full bg-wine transition-colors group-hover:bg-rose">
          <svg width="12" height="10" viewBox="0 0 18 14" fill="currentColor"><path d="M11 0 18 7l-7 7-1.4-1.4L14.2 8H0V6h14.2L9.6 1.4Z" /></svg>
        </span>
      </Link>
    </article>
  );
}
