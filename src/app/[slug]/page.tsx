import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, m, posts } from "@/lib/content";

// Blog posts keep WordPress's root-level permalinks (/{slug}/).
// Unknown slugs fall through to notFound().
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, openGraph: { images: [post.image] } } : {};
}

const metaIcon = "size-5 shrink-0 text-rose";
const field = "w-full border-b border-white/50 bg-transparent py-3 font-sans text-base outline-none placeholder:text-white/60 focus:border-white";
const fieldLabel = "block font-sans text-sm tracking-[4px] text-black/40 uppercase";

export default async function PostPage({ params }: PageProps<"/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative isolate flex min-h-[560px] flex-col justify-center overflow-hidden pt-16 pb-28 lg:h-[714px]">
        <Image src={m("6713611fb8a26c8e1a159c9ff6796e37.jpg")} alt="" fill preload sizes="100vw" className="-z-10 object-cover grayscale" />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="wrap">
          <Link href="/" className="inline-flex items-center gap-4 font-albert text-xl text-white hover:text-white/70">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="#801f3a" strokeWidth="2"><path d="M7 1 1 7l6 6" /></svg>
            Back to Home
          </Link>
          <h1 className="mx-auto mt-16 max-w-[1180px] text-center font-albert text-[40px] leading-[1.12] font-semibold tracking-[-0.02em] capitalize sm:text-[60px] lg:text-[80px]">
            {post.title}
          </h1>
        </div>
        <ul className="absolute bottom-0 left-1/2 flex w-[calc(100%-2rem)] max-w-[838px] -translate-x-1/2 flex-wrap justify-center gap-x-20 gap-y-2 bg-black px-6 py-5 font-sans text-lg capitalize sm:text-xl">
          <li className="flex items-center gap-2">
            <svg className={metaIcon} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0Z" /></svg>
            {post.author}
          </li>
          <li className="flex items-center gap-2">
            <svg className={metaIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v12H8l-4 4Z" /></svg>
            Comments(0)
          </li>
          <li className="flex items-center gap-2">
            <svg className={metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v14H4ZM8 3v4M16 3v4M4 10h16" /></svg>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </li>
        </ul>
      </section>

      <div className="bg-black px-4 pt-20 pb-20">
        <article className="mx-auto max-w-[730px] rounded-[20px] bg-rose px-6 py-10 sm:px-10" data-reveal>
          <div className="font-roboto text-lg leading-7">
            {post.body.map((b, i) =>
              "h2" in b ? (
                <h2 key={i} className="mt-14 mb-8 font-roboto text-[28px] leading-tight font-semibold sm:text-[32px]">{b.h2}</h2>
              ) : "strong" in b ? (
                <p key={i} className="mb-5"><strong>{b.strong}</strong></p>
              ) : (
                <p key={i} className="mb-5">{b.p}</p>
              ),
            )}
          </div>

          <form className="mt-16 space-y-6 border-t border-white/20 pt-12 sm:px-3">
            <h3 className="font-albert text-3xl font-semibold">Leave a Comment</h3>
            <label className="block">
              <span className={fieldLabel}>Full name</span>
              <input name="name" placeholder="Full Name" className={field} />
            </label>
            <label className="block">
              <span className={fieldLabel}>Email</span>
              <input name="email" type="email" placeholder="info@example.com" className={field} />
            </label>
            <label className="block">
              <span className={fieldLabel}>Phone number</span>
              <input name="phone" type="tel" placeholder="+1 234 567 890" className={field} />
            </label>
            <button type="button" className="!mt-10 inline-flex items-center gap-3 rounded-[32px] bg-wine px-8 py-5 font-grotesk text-lg font-bold uppercase transition-colors hover:bg-black">
              Send Message
              <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor"><path d="M11 0 18 7l-7 7-1.4-1.4L14.2 8H0V6h14.2L9.6 1.4Z" /></svg>
            </button>
          </form>
        </article>
      </div>
    </>
  );
}
