// components/RoleLayout.tsx (client)
'use client';
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function RoleLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
  }, []);

  return (
    <>
      {role && <Navigation />}
      <main className="min-h-screen">{children}</main>
      {role && <Footer />}
    </>
  );
}
