'use client';

import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/index';
import { useQuery } from '@tanstack/react-query';
import List from '../List/List';

interface IProps {
    lng?: string;
}

function ReactQueryList(props: IProps) {
    const { lng } = props;

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) throw new Error('Error fetching data');
        return response.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['photos'],
        queryFn: fetchData,
        // refetchInterval: 5000,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message}</div>;

    return (
        <Container display="flex" flexDirection="column" alignItems="center" margin="0 20%">
            <Link type="secondary" href={`/en`} label="back home" />
            <List data={data} error={error} lng={lng} />
        </Container>
    );
}

export default ReactQueryList;
