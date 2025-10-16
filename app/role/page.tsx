// app/role/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RolePage() {
  const router = useRouter();
  const [animating, setAnimating] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // Skip if role already chosen
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole === 'creator') router.replace('/');
    if (savedRole === 'brand') router.replace('/overview');
  }, [router]);

  const handleSelect = (role: 'creator' | 'brand', e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setDisabled(true); // block second clicks

    // 1) Ripple first
    createRipple(e, role === 'creator' ? 'ripple-orange' : 'ripple-green');

    // 2) Persist role (context will pick it up on destination)
    localStorage.setItem('userRole', role);

    // 3) Next frame: start fade-out (ensures ripple paints first)
    requestAnimationFrame(() => {
      setAnimating(true);

      // 4) Navigate after fade duration
      setTimeout(() => {
        if (role === 'brand') router.push('/overview');
        else router.push('/');
      }, 700); // match CSS duration-700
    });
  };

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
      className={`fixed inset-0 flex flex-col md:flex-row items-center justify-center gap-8 transition-opacity duration-700 ${
        animating ? 'opacity-0' : 'opacity-100'
      }`}
      // fixed inset-0 ensures the selector fully covers the screen until fade-out completes
    >
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={(e) => handleSelect('creator', e)}
          className="btn-primary text-2xl py-5 px-10 relative z-10 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          I'm a Creator
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={(e) => handleSelect('brand', e)}
          className="btn-secondary text-2xl py-5 px-10 relative z-10 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          I'm a Brand
        </button>
      </div>
    </div>
  );
}
