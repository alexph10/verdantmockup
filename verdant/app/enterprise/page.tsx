'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Enterprise() {
  const router = useRouter();

  useEffect(() => {
    router.push('/products-detail#enterprise');
  }, [router]);

  return null;
}
