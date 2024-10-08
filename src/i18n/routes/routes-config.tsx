import dynamic from 'next/dynamic';

import { ClientPage, StaticPage } from '@/app/[lng]/[route]/_components';
import AxiosList from '@/app/[lng]/[route]/_components/ListWrapper/AxiosList';
import ReactQueryList from '@/app/[lng]/[route]/_components/ListWrapper/ReactQueryList';
import ReactQueryWrapper from '@/app/[lng]/[route]/_components/ListWrapper/ReactQueryWrapper';
import { IProps, RoutesConfig } from '@/types/routes-types';
import FetchList from '../../app/[lng]/[route]/_components/ListWrapper/FetchList';

// Check if dynamic import really work for output export
const ListWrapper = dynamic(
    () => import('../../app/[lng]/[route]/_components/ListWrapper/FetchList'),
);

export const routesConfig: RoutesConfig = {
    'client-page': {
        renderPage: (props: IProps) => <ClientPage lng={props.lng} />,
        exceptions: [
            { lng: 'es', route: 'pagina-cliente' },
            { lng: 'cat', route: 'pagina-client' },
        ],
    },
    'static-page': {
        renderPage: (props: IProps) => <StaticPage lng={props.lng} />,
        exceptions: [
            { lng: 'es', route: 'pagina-estatica' },
            { lng: 'cat', route: 'pagina-estatica' },
        ],
    },
    'axios-page': {
        renderPage: (props: IProps) => <AxiosList lng={props.lng} />,
        exceptions: [
            { lng: 'es', route: 'pagina-con-lista' },
            { lng: 'cat', route: 'pagina-amb-llista' },
        ],
    },
    'fetch-page': {
        renderPage: (props: IProps) => <FetchList lng={props.lng} />,
        exceptions: [
            { lng: 'es', route: 'pagina-con-lista' },
            { lng: 'cat', route: 'pagina-amb-llista' },
        ],
    },
    'react-query-page': {
        renderPage: (props: IProps) => (
            <ReactQueryWrapper>
                <ReactQueryList lng={props.lng} />
            </ReactQueryWrapper>
        ),
        exceptions: [
            { lng: 'es', route: 'pagina-con-lista' },
            { lng: 'cat', route: 'pagina-amb-llista' },
        ],
    },
};
