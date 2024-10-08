import { Loading } from '@/components/Atoms';
import { Container } from '@/components/Layout';
import { languages } from '@/i18n/language/i18n-config';
import { useTranslation } from '@/i18n/language/server';
import { dir } from 'i18next';
import { Suspense } from 'react';

type Props = {
    children: React.ReactNode;
    params: { lng: string };
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'translation');
    return {
        title: t('title'),
        icons: {
            icon: '/img/favicon.svg',
            shortcut: '/img/favicon.svg',
        },
    };
}

export default function Layout({ children, params: { lng } }: Props) {
    return (
        <html dir={dir(lng)} lang={lng}>
            <body className={dir(lng)}>
                <Container
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Suspense fallback={<Loading lng={lng} />}>{children}</Suspense>
                </Container>
            </body>
        </html>
    );
}
