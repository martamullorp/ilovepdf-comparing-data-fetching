'use client';

import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/index';
import useQueryParam from '@/hooks/useQueryParam';
import { useTranslation } from '@/i18n/language/client';
import { useQuery } from 'react-query';
import List from './_components/List/List';
import ListElement from './_components/ListElement/ListElement';

interface IProps {
    lng: string;
}

function ReactQueryList(props: IProps) {
    const { lng } = props;
    const { t } = useTranslation(lng, 'translation');
    const { pathname, param, createQueryString } = useQueryParam('post');

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Error fetching data');
        return response.json();
    };

    const { data, error, isLoading } = useQuery('dataKey', fetchData);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message}</div>;

    return (
        <Container display="flex" flexDirection="column" alignItems="center" margin="0 20%">
            {param ? (
                <ListElement
                    dataTestId="list-element-container"
                    itemID={param}
                    lng={lng}
                    pathname={pathname}
                />
            ) : (
                <List
                    data={data}
                    error={error}
                    lng={lng}
                    pathname={pathname}
                    createQueryString={createQueryString}
                />
            )}
            <Link type="secondary" href={`/${lng}`} label={t('to-home-page')} />
        </Container>
    );
}

export default ReactQueryList;
