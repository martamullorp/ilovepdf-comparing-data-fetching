'use client';

import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src';
import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../_components/List/List';

interface IProps {
    lng: string;
}

function AxiosList(props: IProps) {
    const { lng } = props;

    const [data, setData] = useState(null as any);
    const [error, setError] = useState(false as boolean);

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('Interceptor error:', error);
            return Promise.reject(error);
        },
    );

    const fetchData = async () => {
        const source = axios.CancelToken.source();

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setData(response.data);
        } catch (err: any) {
            if (axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                setError(err.message);
            }
        }

        return () => {
            source.cancel('Request canceled by the user.');
        };
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

export default AxiosList;
