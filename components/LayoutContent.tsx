'use client';

import { useRole } from "@/context/RoleContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { role } = useRole();

  if (!role) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Header = Navigation (logo + menus) */}
      <Navigation className="animate-fade-in-delayed" />

      {/* Main content fades in separately via siteVisible in page.tsx */}
      {children}

      <Footer className="animate-fade-in-delayed" />
    </>
  );
}


