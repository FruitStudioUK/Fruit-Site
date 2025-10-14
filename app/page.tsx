'use client';
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services'; 
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    setRole(storedRole);
  }, []);

  const handleSelect = (selectedRole: 'creator' | 'brand') => {
    localStorage.setItem('userRole', selectedRole);
    setRole(selectedRole);
  };

  if (!role) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-6">
      <button
        onClick={() => handleSelect('creator')}
        className="btn-primary"
      >
        I'm a Creator
      </button>

      <h2 className="text-2xl font-bold">Who are you?</h2>

      <button
        onClick={() => handleSelect('brand')}
        className="btn-secondary"
      >
        I'm a Brand
      </button>
    </div>
  );
}



  return (
    <main>
      <h1 className="text-center text-3xl font-bold mb-6">
        Welcome, {role === 'creator' ? 'Creator' : 'Brand'}!
      </h1>

      <button
    onClick={() => {
      localStorage.removeItem('userRole');
      setRole(null);
    }}
    className="btn-outline mt-4"
  >
    Switch Role
  </button>

      {role === 'creator' ? (
        <p className="text-center mb-10 text-lg">
          Let’s help you monetize, collaborate, and grow.
        </p>
      ) : (
        <p className="text-center mb-10 text-lg">
          Let’s help you find creators and run powerful campaigns.
        </p>
      )}

      {/* Shared site sections */}
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
