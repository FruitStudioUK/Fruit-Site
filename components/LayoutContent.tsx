'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();

  // If no role is chosen yet, just render the children (RoleSelector, etc.)
  if (!role) {
    return <>{children}</>;
  }

  // Once a role is set, always render Navigation + Footer around the page content
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
