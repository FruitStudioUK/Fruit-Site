// app/layout.tsx (server)
import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import RoleLayout from "@/components/RoleLayout";

export const metadata: Metadata = {
  title: "Fruit. - Professional Creative & Brand Partnerships",
  description: "Transform your content with professional creative services...",
};

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-baloo2" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo2.variable}`}>
      <body className="bg-primary-dark text-white font-body font-medium antialiased">
        <RoleLayout>{children}</RoleLayout>
      </body>
    </html>
  );
}
