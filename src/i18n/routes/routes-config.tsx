
import { ClientPage, StaticPage } from '@/app/[lng]/[route]/_components';
import { IProps, RoutesConfig } from '@/types/routes-types';

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
};
