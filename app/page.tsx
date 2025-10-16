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

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');

    if (!savedRole) {
      router.replace('/role'); // first-time → selector
    } else if (savedRole === 'brand') {
      router.replace('/dashboard'); // brand → brand home
    } else {
      setReady(true); // creator → render creator home
    }
  }, [router]);

  if (!ready) return null;

  return (
    <main className="animate-fade-in-delayed">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
