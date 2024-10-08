import { NotFound } from '@/components/Pages';
import { useTranslation } from '@/i18n/language/server';
import { routesConfig } from '@/i18n/routes/routes-config';
import RouteMatcher from '@/i18n/routes/service/RouteMatcher';
import { IPropsParams } from '@/types/routes-types';
import { IPropLan } from '../page';

type IProps = IPropsParams<{ lng: string; route: string }>;

const routeMatcher = new RouteMatcher(routesConfig);

export async function generateStaticParams(props: IPropsParams<IPropLan>) {
    return routeMatcher.generateStaticRoutes('route', props.params.lng);
}

export async function generateMetadata({ params: { lng, route } }: IProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'translation');
    return {
        title: t(`metadata.${route}`),
        icons: {
            icon: '/img/favicon.svg',
            shortcut: '/img/favicon.svg',
        },
    };
}

export default async function PublicPages(props: IProps) {
    const { lng, route } = props.params;
    await useTranslation(lng, 'translation');

    const isPageAvailableInThisLanguage = routeMatcher.getIfRouteIsAvailableForLng(lng, route);
    const MatchedComponent = routeMatcher.getComponentForRoute(route);

    return (
        <>
            {isPageAvailableInThisLanguage && MatchedComponent ? (
                <MatchedComponent lng={lng} />
            ) : (
                <NotFound lng={lng} />
            )}
        </>
    );
}
