import type { Metadata } from "next";
import { Albert_Sans, DM_Sans, Manrope, Roboto, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const albert = Albert_Sans({ variable: "--font-albert-sans", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const grotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

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
