'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();

  if (!role) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Header = Navigation (logo + menus) */}
      <Navigation className="animate-fade-in-delayed" />

      {/* Main content wrapper with top padding to clear fixed nav */}
      <main className="pt-16 md:pt-24">
        {children}
      </main>

      <Footer className="animate-fade-in-delayed" />
    </>
  );
}
