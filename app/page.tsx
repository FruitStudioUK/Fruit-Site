'use client';

import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

export default function CreatorHome() {
  return (
    <main className="animate-fade-in-delayed">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
