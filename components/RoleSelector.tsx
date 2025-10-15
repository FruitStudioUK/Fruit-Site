'use client';

import { useRouter } from 'next/navigation';

export default function RoleSelector() {
  const router = useRouter();

  function createRipple(
    event: React.MouseEvent<HTMLButtonElement>,
    colorClass: string
  ) {
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

    setTimeout(() => {
      circle.remove();
    }, 1200);
  }

  const handleSelect = (role: 'creator' | 'brand') => {
    localStorage.setItem('userRole', role);
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
          onClick={(e) => {
            createRipple(e, 'ripple-orange');
            handleSelect('creator');
          }}
          className="btn-primary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Creator
        </button>
      </div>

      <div className="relative">
        <button
          onClick={(e) => {
            createRipple(e, 'ripple-green');
            handleSelect('brand');
          }}
          className="btn-secondary text-2xl py-5 px-10 relative z-10"
        >
          I'm a Brand
        </button>
      </div>
    </div>
  );
}
