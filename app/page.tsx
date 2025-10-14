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
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Who are you?</h2>
        <button onClick={() => handleSelect('creator')}>I'm a Creator</button>
        <button onClick={() => handleSelect('brand')}>I'm a Brand</button>
      </div>
    );
  }

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>
        Welcome, {role === 'creator' ? 'Creator' : 'Brand'}!
      </h1>

      {/* Optional: role-specific intro */}
      {role === 'creator' ? (
        <p style={{ textAlign: 'center' }}>
          Let’s help you monetize, collaborate, and grow.
        </p>
      ) : (
        <p style={{ textAlign: 'center' }}>
          Let’s help you find creators and run powerful campaigns.
        </p>
      )}

      {/* Shared components */}
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
