'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

export default function CreatorHomeGuarded() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');

    if (!savedRole) {
      router.replace('/role');
    } else if (savedRole === 'brand') {
      router.replace('/dashboard');
    } else {
      // creator → allow fade‑in
      setReady(true);
      const timer = setTimeout(() => setSiteVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [router]);

  if (!ready) return null;

  return (
    <main className={siteVisible ? 'animate-fade-in-delayed' : 'opacity-0'}>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
