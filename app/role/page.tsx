'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';

export default function RolePage() {
  const router = useRouter();
  const { setRole } = useRole();

  // Auto-skip selector if role already chosen
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole === 'creator') router.replace('/');
    if (savedRole === 'brand') router.replace('/dashboard');
  }, [router]);

  const handleSelect = (role: 'creator' | 'brand') => {
    localStorage.setItem('userRole', role);
    setRole(role);

    if (role === 'brand') {
      router.push('/dashboard');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
      <div className="relative">
        <button
          type="button"
          onClick={() => handleSelect('creator')}
          className="btn-primary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Creator
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => handleSelect('brand')}
          className="btn-secondary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Brand
        </button>
      </div>
    </div>
  );
}
