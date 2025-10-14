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
      <div className="animate-fade-in-delayed">
        <Navigation />
      </div>

      {children}

      <div className="animate-fade-in-delayed">
        <Footer />
      </div>
    </>
  );
}

