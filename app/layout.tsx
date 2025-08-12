import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CreatorHub - Professional Creative & Brand Partnerships",
  description:
    "Transform your content with professional creative services and unlock brand partnership opportunities. We help content creators elevate their work and grow their reach.",
  keywords:
    "content creator, video editing, brand partnerships, influencer marketing, content creation, social media editing",
  authors: [{ name: "CreatorHub" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#140c04",
  robots: "index, follow",
  openGraph: {
    title: "CreatorHub - Professional Creative & Brand Partnerships",
    description:
      "Transform your content with professional creative services and unlock brand partnership opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorHub - Professional Creative & Brand Partnerships",
    description:
      "Transform your content with professional creative services and unlock brand partnership opportunities.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo2.variable}`}>
      <body className="bg-primary-dark text-white font-body antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
