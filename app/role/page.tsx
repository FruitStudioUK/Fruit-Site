'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';

export default function RolePage() {
  const router = useRouter();
  const { setRole } = useRole();
  const [animating, setAnimating] = useState(false);

  // Auto-skip if role already chosen
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole === 'creator') router.replace('/');
    if (savedRole === 'brand') router.replace('/dashboard');
  }, [router]);

  const handleSelect = (role: 'creator' | 'brand', e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e, role === 'creator' ? 'ripple-orange' : 'ripple-green');
    setAnimating(true);
    localStorage.setItem('userRole', role);
    setRole(role);

    // Delay navigation until after fade-out animation
    setTimeout(() => {
      if (role === 'brand') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    }, 700); // match CSS transition duration
  };

  // Ripple effect
  function createRipple(event: React.MouseEvent<HTMLButtonElement>, colorClass: string) {
    const button = event.currentTarget;
    const wrapper = button.parentElement as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight) * 3;
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - wrapper.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - wrapper.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple', colorClass);

    const ripple = wrapper.querySelector('.ripple');
    if (ripple) ripple.remove();

    wrapper.appendChild(circle);
    setTimeout(() => circle.remove(), 1200);
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center h-screen gap-8 transition-opacity duration-700 ${
        animating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <button
          type="button"
          onClick={(e) => handleSelect('creator', e)}
          className="btn-primary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Creator
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={(e) => handleSelect('brand', e)}
          className="btn-secondary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Brand
        </button>
      </div>
    </div>
  );
}
