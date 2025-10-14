import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoleProvider, useRole } from "@/context/RoleContext";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fruit. - Professional Creative & Brand Partnerships",
  description:
    "Transform your content with professional creative services and unlock brand partnership opportunities.",
};

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();

  return (
    <>
      {role && <Navigation />}
      <main className="min-h-screen">{children}</main>
      {role && <Footer />}
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo2.variable}`}>
      <body className="bg-primary-dark text-white font-body font-medium antialiased">
        <RoleProvider>
          <LayoutContent>{children}</LayoutContent>
        </RoleProvider>
      </body>
    </html>
  );
}
