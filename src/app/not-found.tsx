import { OutlineButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-wine-glow grid min-h-[60vh] place-items-center px-4 py-24 text-center">
      <div>
        <p className="font-albert text-[8rem] leading-none font-bold text-white/10 sm:text-[12rem]">404</p>
        <h1 className="sec-title -mt-6">Page not found</h1>
        <p className="mt-4 mb-10 font-sans text-lg text-white/80">The page you are looking for doesn&apos;t exist or has moved.</p>
        <OutlineButton href="/">Back to Home</OutlineButton>
      </div>
    </section>
  );
}
