'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import ReactQueryList from '../_components/ReactQueryList/ReactQueryList';

const queryClient = new QueryClient();

function ReactQueryWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryList />
        </QueryClientProvider>
    );
}

export default ReactQueryWrapper;
