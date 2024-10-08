'use client';

import { Loading, Text, Title } from '@/components/Atoms';
import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/index';
import { useTranslation } from '@/i18n/language/client';
import { useEffect, useState } from 'react';

interface IProps {
    lng: string;
    pathname: string;
    itemID: string;
    dataTestId?: string;
}

export default function ListElement(props: IProps) {
    const { lng, pathname, itemID, dataTestId } = props;
    const { t } = useTranslation(lng, 'translation');
    const [item, setItem] = useState(null as any);
    const [error, setError] = useState(false as boolean);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemID}`);

            const result = await response.json();
            setItem(result);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container dataTestId={dataTestId}>
            {item ? (
                <Container key={item.id} display="flex" flexDirection="column" alignItems="center">
                    <Container display="flex">
                        <Title fontSize="small" fontWeight="normal" text={item.id} />
                        <Title fontSize="small" fontWeight="normal" text={item.title} />
                    </Container>
                    <Text textAlign="center" fontWeight="normal" text={item.body} />
                    <Container margin='10px 0'>
                        <Link type='btn' size="sm" href={pathname} label={t('to-dashboard')} />
                    </Container>
                </Container>
            ) : error ? (
                <Title text="Error" />
            ) : (
                <Loading lng={lng} />
            )}
        </Container>
    );
}
