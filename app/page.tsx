'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/role');
  }, [router]);

  return null; // nothing renders, just redirects
}
