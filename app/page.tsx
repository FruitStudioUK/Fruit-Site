'use client';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { useRole } from '@/context/RoleContext';
import { useState } from 'react';

export default function HomePage() {
  const { role, setRole } = useRole();
  const [animating, setAnimating] = useState(false);
  const [selected, setSelected] = useState<'creator' | 'brand' | null>(null);

  const handleSelect = (selectedRole: 'creator' | 'brand') => {
    setSelected(selectedRole);
    setAnimating(true);

    setTimeout(() => {
      setRole(selectedRole);
      setAnimating(false);
    }, 1000);
  };

  if (!role) {
    return (
      <div
        className={`flex flex-col md:flex-row items-center justify-center h-screen gap-8 transition-opacity duration-700 ${
          animating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <button
  onClick={() => handleSelect('creator')}
  className="btn-primary btn-ripple btn-ripple-orange text-2xl py-5 px-10"
>
  I'm a Creator
</button>

<button
  onClick={() => handleSelect('brand')}
  className="btn-secondary btn-ripple btn-ripple-green text-2xl py-5 px-10"
>
  I'm a Brand
</button>

      </div>
    );
  }

  return (
    <main className="animate-fade-in-delayed">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
