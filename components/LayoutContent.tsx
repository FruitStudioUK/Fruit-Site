'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (role) {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [role]);

  if (!role) {
    return <>{children}</>;
  }

  return (
    <>
      <div className={visible ? "animate-fade-in-delayed" : "opacity-0"}>
        <Navigation />
      </div>

      <main className={visible ? "animate-fade-in-delayed" : "opacity-0"}>
        {children}
      </main>

      <div className={visible ? "animate-fade-in-delayed" : "opacity-0"}>
        <Footer />
      </div>
    </>
  );
}
