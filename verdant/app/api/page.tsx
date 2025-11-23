'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function API() {
  const router = useRouter();

  useEffect(() => {
    router.push('/products-detail#api');
  }, [router]);

  return null;
}
