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

  // If no role chosen, just render the selector (children)
  if (!role) {
    return <>{children}</>;
  }

  // Once role is chosen, fade in header, main, footer
  return (
    <>
      {showSite && (
        <div className="animate-fade-in-delayed">
          <Navigation />
        </div>
      )}
      <main className={showSite ? "animate-fade-in-delayed" : "opacity-0"}>
        {children}
      </main>
      {showSite && (
        <div className="animate-fade-in-delayed">
          <Footer />
        </div>
      )}
    </>
  );
}
