'use client';

import { useRouter } from 'next/navigation';

export default function RoleSelector() {
  const router = useRouter();

  const handleSelect = (role: 'creator' | 'brand') => {
    localStorage.setItem('userRole', role);

    if (role === 'brand') {
      router.push('/dashboard');
    } else {
      router.push('/creator');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
      <button onClick={() => handleSelect('creator')} className="btn-primary">
        I'm a Creator
      </button>
      <button onClick={() => handleSelect('brand')} className="btn-secondary">
        I'm a Brand
      </button>
    </div>
  );
}
