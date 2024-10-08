import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/components/Atoms/Link/Link';
import { languages } from '@/i18n/language/i18n-config';
import { useTranslation } from '@/i18n/language/server';
import { IPropsParams } from '@/types/routes-types';
import { Metadata } from 'next';

export interface IPropLan {
    lng: string;
}

export const metadata: Metadata = {
    icons: {
        icon: '/img/favicon.svg',
        shortcut: '/img/favicon.svg',
    },
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default async function Home(props: IPropsParams<IPropLan>) {
    const { lng } = props.params;
    const { t } = await useTranslation(lng, 'translation');

    return (
        <>
            <Container width="30vw" display="flex" flexWrap="wrap" justifyContent="space-around">
                <Link type="secondary" href="fetch" label="Fetch" />
                <Link type="secondary" href="axios" label="Axios" />
                <Link type="secondary" href="react-query" label="React Query" />
            </Container>
        </>
    );
}
