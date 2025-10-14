'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();

  return (
    <>
      {role && <Navigation />}
      <main className="min-h-screen">{children}</main>
      {role && <Footer />}
    </>
  );
}
