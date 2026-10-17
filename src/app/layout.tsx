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
const grotesk = localFont({ src: "./fonts/space-grotesk.woff2", variable: "--font-space-grotesk", weight: "300 700", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "EcooHaven", template: "%s – EcooHaven" },
  description:
    "Smart, sustainable luxury homes combining AI-powered technology, solar energy, and modern architecture.",
  icons: { icon: "/media/cropped-favicon.webp" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${albert.variable} ${dmSans.variable} ${manrope.variable} ${roboto.variable} ${grotesk.variable} antialiased`}
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
