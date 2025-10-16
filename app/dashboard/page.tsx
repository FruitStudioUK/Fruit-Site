'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/HeroBrand';
import { Services } from '@/components/ServicesBrand';
import { Portfolio } from '@/components/PortfolioBrand';
import { Contact } from '@/components/ContactBrand';

export default function BrandHome() {
  const [siteVisible, setSiteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSiteVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={siteVisible ? 'animate-fade-in-delayed' : 'opacity-0'}>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
