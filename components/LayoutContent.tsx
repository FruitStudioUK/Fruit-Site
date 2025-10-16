'use client';

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // On the role selector page, never show nav/footer
  if (pathname === "/role") {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation className="animate-fade-in-delayed" />
      <main className="pt-16 md:pt-24">{children}</main>
      <Footer className="animate-fade-in-delayed" />
    </>
  );
}
