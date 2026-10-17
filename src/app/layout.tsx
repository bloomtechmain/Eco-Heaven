import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

// Self-hosted variable fonts (latin subset), so the build doesn't depend on Google Fonts.
const albert = localFont({ src: "./fonts/albert-sans.woff2", variable: "--font-albert-sans", weight: "100 900", display: "swap" });
const dmSans = localFont({ src: "./fonts/dm-sans.woff2", variable: "--font-dm-sans", weight: "100 1000", display: "swap" });
const manrope = localFont({ src: "./fonts/manrope.woff2", variable: "--font-manrope", weight: "200 800", display: "swap" });
const roboto = localFont({ src: "./fonts/roboto.woff2", variable: "--font-roboto", weight: "100 900", display: "swap" });
const montserrat = localFont({ src: "./fonts/montserrat.woff2", variable: "--font-montserrat", weight: "100 900", display: "swap" });
const grotesk = localFont({ src: "./fonts/space-grotesk.woff2", variable: "--font-space-grotesk", weight: "300 700", display: "swap" });

export const metadata: Metadata = {
  // Absolute URLs for link previews: set NEXT_PUBLIC_SITE_URL to the live domain; Cloudflare Pages' build URL is the fallback.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.CF_PAGES_URL ?? "http://localhost:3000"),
  title: { default: "Smart Eco Heaven", template: "%s – Smart Eco Heaven" },
  description:
    "Smart, sustainable luxury homes combining AI-powered technology, solar energy, and modern architecture.",
  icons: { icon: "/media/favicon.png", apple: "/media/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Smart Eco Heaven",
    title: "Smart Eco Heaven",
    description:
      "Smart, sustainable luxury homes combining AI-powered technology, solar energy, and modern architecture.",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "Smart Eco Heaven – Integrated Smart Luxury Homes" }],
  },
  twitter: { card: "summary_large_image", images: ["/media/og-image.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${albert.variable} ${dmSans.variable} ${manrope.variable} ${roboto.variable} ${grotesk.variable} ${montserrat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Reveal />
      </body>
    </html>
  );
}
