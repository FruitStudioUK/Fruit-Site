import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import { RoleProvider } from "@/context/RoleContext";
import LayoutContent from "@/components/LayoutContent";

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
  icons: {
    icon: "/logo.png", // now served from /public
  },
};

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
