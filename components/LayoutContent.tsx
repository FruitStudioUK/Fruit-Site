'use client';

import { useEffect, useState } from 'react';
import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    if (role) {
      const timer = setTimeout(() => setShowSite(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowSite(false);
    }
  }, [role]);

  if (!role) {
    return <>{children}</>; // just the selector
  }

  return (
    <div className={`${showSite ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
