'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        return () => {
            router.push('/en/');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
