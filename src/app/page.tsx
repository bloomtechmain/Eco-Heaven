import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight } from "@/components/icons";
import { ServiceTags } from "@/components/service-tags";
import { ServicesAccordion } from "@/components/services-accordion";
import { OutlineButton, SectionLabel } from "@/components/ui";
import { VideoDuo } from "@/components/video-duo";
import { aboutTeaser, keyFeatures, m, posts, site, whyChoose } from "@/lib/content";

const contactInfo = [
  { title: "Address", value: site.region },
  { title: "Email", value: site.email, href: `mailto:${site.email}` },
  { title: "Call Us", value: site.phone, href: site.phoneHref },
];

/** Simple line icons for the two about-section features (original artwork). */
const featureIcons = [
  <svg key="d" width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M3 34h32M6 34V18l10-7 10 7v16M26 22l6-4v16M12 34v-8h8v8M16 4v4M10 6l2 3M22 6l-2 3" />
  </svg>,
  <svg key="q" width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="19" cy="12" r="8" />
    <path d="m19 7 1.5 3 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.5ZM6 30l7-7 5 3 4-3 10 7-6 4H12Z" />
  </svg>,
];

export default function Home() {
  return (
    <>
      {/* Hero: background video with headline */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-black lg:h-[900px]">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={m("hero-bg.mp4")}
          poster={m("hero-poster.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 -z-10 bg-black/30" />
        <div className="w-full px-4 sm:px-10 lg:px-[150px]">
          <div className="max-w-[1140px] animate-fade-up">
            <h6 className="font-manrope text-xs leading-4 font-semibold tracking-[2px] text-white uppercase sm:text-base">
              SMART LIVING • AI TECHNOLOGY • SUSTAINABLE DESIGN
            </h6>
            <h2 className="mt-5 font-manrope text-[40px] leading-none font-bold tracking-[-2px] text-electric sm:text-[60px]">
              <span className="font-light text-white">The Future of</span>
              <br />
              Luxury Living
            </h2>
            <p className="mt-5 max-w-[570px] font-manrope text-[17px] leading-7 text-white">
              Experience a new generation of homes where AI-powered technology, smart lighting, and sustainable design
              come together for a smarter way to live. All homes are CBC (California Building Code) and Title 24 compliant.
            </p>
            <Link
              href="/our-homes"
              className="mt-5 inline-block rounded-[10px] border border-navy bg-navy px-6 py-3 font-manrope text-[13px] leading-[13px] font-bold text-white uppercase transition-colors hover:border-white hover:bg-white hover:text-navy"
            >
              EXPLORE OUR HOMES
            </Link>
          </div>
        </div>
      </section>

      {/* Portrait video */}
      <section
        className="flex flex-col items-center justify-center gap-8 px-4 py-[70px]"
        style={{ background: "radial-gradient(at left center, #801f3a 0%, #000 100%)" }}
      >
        <VideoDuo first={m("Abdul-jabbar-new-video.mp4")} second={whyChoose.video} poster={whyChoose.videoPoster} />
      </section>

      {/* About */}
      <section className="pt-[45px] pb-[125px]" style={{ background: "linear-gradient(#000 29%, #5a1025 100%)" }}>
        <div className="wrap">
          <SectionLabel className="mb-[60px]">about us</SectionLabel>
          <div className="grid gap-14 lg:grid-cols-[631px_1fr] lg:gap-20">
            <div>
              <h2 className="sec-title mb-6" data-reveal>{aboutTeaser.title}</h2>
              <div className="lg:pl-[125px]" data-reveal>
                <p className="mb-[46px] max-w-[506px] font-sans text-lg leading-7">{aboutTeaser.text}</p>
                <OutlineButton href="/about-us" className="ml-4">About Us</OutlineButton>
              </div>
              <div className="mt-[86px] border-t border-white/15 pt-16">
                <div className="grid gap-10 sm:grid-cols-2">
                  {aboutTeaser.features.map((f, i) => (
                    <div key={f.title} data-reveal>
                      <div className="mb-[30px] grid size-[60px] place-items-center border-r border-b border-white/15 text-white">
                        {featureIcons[i]}
                      </div>
                      <h4 className="mb-3 font-albert text-xl leading-[21.5px] font-semibold tracking-[-0.6px] capitalize">{f.title}</h4>
                      <p className="max-w-[296px] font-sans text-lg leading-6">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pb-24 lg:pb-0">
              <div className="relative aspect-[540/710] w-full max-w-[540px] overflow-hidden lg:ml-[45px]" data-reveal>
                <Image src={aboutTeaser.image} alt="Smart Eco Heaven residence" fill sizes="540px" className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-[60px] bg-white pt-6 pr-[23px] lg:top-[432px] lg:bottom-auto lg:left-[105px]" data-reveal>
                <Link href="/our-homes" className="group relative isolate block h-[334px] w-[262px] overflow-hidden px-[25px] py-[45px]">
                  <Image src={aboutTeaser.projectBg} alt="" fill sizes="262px" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <svg width="48" height="40" viewBox="0 0 48 40" fill="#fff" aria-hidden>
                    <path d="M0 0h14l14 20-14 20H0l14-20ZM20 0h14l14 20-14 20H20l14-20Z" />
                  </svg>
                  <h4 className="mt-[60px] font-albert text-2xl font-semibold capitalize">see projects</h4>
                  <p className="mt-3 font-sans text-lg leading-7 text-white">Discover smart, modern homes built for the future.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-grid overflow-hidden pt-[100px]">
        <div className="wrap">
          <SectionLabel className="mb-[60px]">services</SectionLabel>
        </div>
        <div className="relative flex items-end gap-0 lg:pl-[476px]">
          <div className="w-full px-4 lg:px-0">
            <ServicesAccordion />
          </div>
        </div>
      </section>

      {/* Service tags */}
      <ServiceTags />

      {/* Key features */}
      <section className="pt-[130px] pb-[100px]" style={{ background: "linear-gradient(#000 21%, #5a1025 100%)" }}>
        <div className="wrap">
          <SectionLabel className="mb-[60px]" />
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-[120px]">
            <div data-reveal>
              <h2 className="sec-title mb-[60px] max-w-[543px]">{keyFeatures.title}</h2>
              <div className="max-w-[543px] font-sans text-lg leading-7">
                <p className="mb-4">{keyFeatures.intro}</p>
                {keyFeatures.items.map((k) => (
                  <p key={k.title} className="mb-4">
                    <strong className="font-albert font-bold">{k.title}</strong>
                    <br />
                    {k.text}
                  </p>
                ))}
              </div>
              <OutlineButton href="/smart-living" className="mt-4 ml-4">Explore Smart Living</OutlineButton>
            </div>
            <div className="relative aspect-[1121/2000] w-full max-w-[480px] overflow-hidden lg:h-full lg:w-auto lg:justify-self-center" data-reveal>
              <Image src={keyFeatures.image} alt="Smart Eco Heaven luxury villa" fill sizes="(min-width: 1024px) 300px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-[100px] bg-black" />

      {/* Blog */}
      <section className="bg-black pt-[95px] pb-[125px]">
        <div className="wrap">
          <SectionLabel className="mb-[60px]">blog &amp; news</SectionLabel>
          <div className="mb-[55px] flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <h2 className="sec-title max-w-[640px] capitalize" data-reveal>Take a look at our latest blogs &amp; articles.</h2>
            <OutlineButton href="/blog" className="mt-4 self-start">View All Blog</OutlineButton>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="group" data-reveal>
                <Link href={`/${p.slug}`} className="relative block h-[500px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 411px, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="relative z-10 -mt-[30px] mr-8 ml-auto grid size-[60px] place-items-center bg-chip text-ink">
                  <ArrowUpRight width={22} height={22} />
                </div>
                <p className="relative -mt-[14px] mb-5 pl-[52px] font-sans text-base leading-[25px] font-semibold uppercase before:absolute before:top-1/2 before:left-0 before:h-px before:w-10 before:bg-white/50">
                  {p.author}
                </p>
                <h4 className="mb-[22px] font-albert text-[28px] leading-[32px] font-semibold tracking-[-0.56px] capitalize">
                  <Link href={`/${p.slug}`} className="hover:text-white/70">{p.title}</Link>
                </h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pt-[95px] pb-[125px]" style={{ background: "linear-gradient(#000 21%, #5a1025 100%)" }}>
        <div className="wrap">
          <SectionLabel className="mb-[60px]">contact us</SectionLabel>
          <div className="grid gap-14 lg:grid-cols-[1fr_707px] lg:gap-20">
            <div data-reveal>
              <h2 className="sec-title mb-6 max-w-[543px]">Let’s talk about your dream home.</h2>
              <p className="mb-12 max-w-[506px] font-sans text-lg leading-7">
                Tell us about your project and our team will get back to you with smart, sustainable and luxurious ideas.
              </p>
              <div className="border-t border-white/15">
                {contactInfo.map((it) => (
                  <div key={it.title} className="border-b border-white/15 py-6">
                    <h4 className="mb-2 font-albert text-xl leading-[21.5px] font-semibold tracking-[-0.6px] capitalize">{it.title}</h4>
                    {it.href ? (
                      <a href={it.href} className="font-sans text-lg leading-7 hover:text-white/70">{it.value}</a>
                    ) : (
                      <p className="font-sans text-lg leading-7">{it.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-wine-deep px-6 py-12 sm:px-[60px] sm:py-[68px]" data-reveal>
              <h5 className="mb-[29px] font-albert text-3xl leading-[43px] font-bold capitalize sm:text-4xl">Get In Touch With Us Today!</h5>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
