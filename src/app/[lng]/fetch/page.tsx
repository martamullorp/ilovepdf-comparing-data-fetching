'use client';

import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/index';
import { useEffect, useState } from 'react';
import List from '../_components/List/List';

interface IProps {
    lng: string;
}

function FetchList(props: IProps) {
    const { lng } = props;

    const [data, setData] = useState(null as any);
    const [error, setError] = useState(false as boolean);
    const [loading, setLoading] = useState(false as boolean);

    const fetchData = async () => {
        const controller = new AbortController();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
                signal: controller.signal,
            });
            //? You don't need this validation in Axios
            if (!response.ok) throw new Error('Error fetching data');
            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message);
            console.error(err.message);
        } finally {
            setLoading(false);
        }

        return () => controller.abort();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container display="flex" flexDirection="column" alignItems="center" margin="0 20%">
            <Link type="secondary" href={`/en`}  label="back home" />
            <List data={data} error={error} lng={lng} />
        </Container>
    );
}

export default FetchList;
