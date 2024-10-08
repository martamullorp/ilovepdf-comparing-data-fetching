'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

interface IProps {
    children: any;
}

const queryClient = new QueryClient();

function ReactQueryWrapper(props: IProps) {
    const { children } = props;

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ReactQueryWrapper;
