'use client';

import { useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';

export default function RoleSelector() {
  const router = useRouter();
  const { setRole } = useRole();

  const handleSelect = (role: "creator" | "brand") => {
    setRole(role);
    if (role === "creator") {
      router.push("/");          // stay on main page
    } else {
      router.push("/dashboard"); // go to brand dashboard
    }
  };

  return (
    <div className="flex gap-8">
      <button type="button" onClick={() => handleSelect("creator")}>
        I'm a Creator
      </button>
      <button type="button" onClick={() => handleSelect("brand")}>
        I'm a Brand
      </button>
    </div>
  );
}
