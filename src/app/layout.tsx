import '@/styles/_theme.scss';

import { languages } from '@/i18n/language/i18n-config';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
    icons: {
        icon: '/img/favicon.svg',
        shortcut: '/img/favicon.svg',
    },
};

type Props = {
    children: React.ReactNode;
    params: { lng: string };
};

export default function RootLayout({ children, params: { lng } }: Props) {
    return (
        <html lang={lng}>
            <body>{children}</body>
        </html>
    );
}
