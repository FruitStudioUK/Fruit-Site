'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();
  const pathname = usePathname();

  if (pathname === "/role") {
    return <>{children}</>;
  }

  // Wait until role is loaded
  if (!role) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navigation className="animate-fade-in-delayed" />
      <main className="pt-16 md:pt-24">{children}</main>
      <Footer className="animate-fade-in-delayed" />
    </>
  );
}
