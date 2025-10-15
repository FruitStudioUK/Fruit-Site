'use client';

import { Hero } from '@/components/HeroBrand';
import { Services } from '@/components/ServicesBrand';
import { Portfolio } from '@/components/PortfolioBrand';
import { Contact } from '@/components/ContactBrand';

export default function BrandHome() {
  return (
    <main className="animate-fade-in-delayed">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
