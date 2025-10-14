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
        <div className="relative">
  <button
    onClick={(e) => {
      createRipple(e, "ripple-orange");
      handleSelect("creator");
    }}
    className="btn-primary text-2xl py-5 px-10 relative z-10"
  >
    I'm a Creator
  </button>
</div>

<div className="relative">
  <button
    onClick={(e) => {
      createRipple(e, "ripple-green");
      handleSelect("brand");
    }}
    className="btn-secondary text-2xl py-5 px-10 relative z-10"
  >
    I'm a Brand
  </button>
</div>



      </div>
    );
  }
  
  function createRipple(
  event: React.MouseEvent<HTMLButtonElement>,
  colorClass: string
) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight) * 2;
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple", colorClass);

  // Remove old ripple if present
  const ripple = button.parentElement?.querySelector(".ripple");
  if (ripple) {
    ripple.remove();
  }

  // Append ripple to the button’s parent container so it can overflow
  button.parentElement?.appendChild(circle);

  // Clean up after animation
  setTimeout(() => {
    circle.remove();
  }, 600);
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
