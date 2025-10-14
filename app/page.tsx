'use client';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services'; 
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { useRole } from '@/context/RoleContext';

export default function HomePage() {
  const { role, setRole } = useRole();

  const handleSelect = (selectedRole: 'creator' | 'brand') => {
    setRole(selectedRole);
  };

  if (!role) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
        <button
          onClick={() => handleSelect('creator')}
          className="btn-primary text-2xl py-5 px-10"
        >
          I'm a Creator
        </button>

        <h2 className="text-3xl md:text-4xl font-extrabold">Who are you?</h2>

        <button
          onClick={() => handleSelect('brand')}
          className="btn-secondary text-2xl py-5 px-10"
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

      {role === 'creator' ? (
        <p className="text-center mb-10 text-lg">
          Let’s help you monetize, collaborate, and grow.
        </p>
      ) : (
        <p className="text-center mb-10 text-lg">
          Let’s help you find creators and run powerful campaigns.
        </p>
      )}

      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
