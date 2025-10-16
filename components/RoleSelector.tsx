'use client';

import { useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';

export default function RoleSelector() {
  const router = useRouter();
  const { setRole } = useRole();

  const handleSelect = (role: 'creator' | 'brand') => {
    localStorage.setItem('userRole', role);
    setRole(role);

    if (role === 'brand') {
      router.push('/dashboard'); // only redirect for Brand
    }
    // if Creator, do nothing — you’re already on `/`
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
      <button
        onClick={() => handleSelect('creator')}
        className="btn-primary text-2xl py-5 px-10"
      >
        I'm a Creator
      </button>
      <button
        onClick={() => handleSelect('brand')}
        className="btn-secondary text-2xl py-5 px-10"
      >
        I'm a Brand
      </button>
    </div>
  );
}
