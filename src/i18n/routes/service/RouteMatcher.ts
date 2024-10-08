import { RoutesConfig } from '@/types/routes-types';

export default class RouteMatcher {
    routesData: RoutesConfig;

    constructor(routesData: RoutesConfig) {
        this.routesData = routesData;
    }

    generateStaticRoutes(dynamicRouteKey: string, lng: string) {
        type RouteArray = Array<string>;
        const routes: RouteArray = [];
        // Iterate over the configuration object
        for (const pageRoute in this.routesData) {
            const exceptions = this.routesData[pageRoute].exceptions;
            exceptions?.forEach((exception) => {
                if (this.getIfRouteIsAvailableForLng(lng, exception.route)) {
                    routes.push(exception.route);
                }
            });

            if (this.getIfRouteIsAvailableForLng(lng, pageRoute)) {
                routes.push(pageRoute);
            }
        }

        const uniqueRoutesSet: Set<string> = new Set(routes);
        const uniqueRoutesArray: string[] = [...uniqueRoutesSet];

        return uniqueRoutesArray.map((route) => ({ [dynamicRouteKey]: route }));
    }

    getIfRouteIsAvailableForLng(lng: string, route: string) {
        const routesAvailable: string[] = [];

        for (const pageRoute in this.routesData) {
            const exceptions = this.routesData[pageRoute].exceptions;
            // Find the exception for the specified lng
            const exception = exceptions.find((ex) => ex.lng === lng);
            // If the exception exists, add its route to the result array
            // Otherwise, use the page type as a fallback
            const route = exception ? exception.route : pageRoute;
            routesAvailable.push(route);
        }
        return routesAvailable.includes(route);
    }

    getComponentForRoute(route: string) {
        for (const pageRoute in this.routesData) {
            const pageConfig = this.routesData[pageRoute];
            if (pageRoute === route) {
                return pageConfig.renderPage;
            }
            const exception = pageConfig.exceptions.find((ex) => ex.route === route);
            if (exception) {
                return pageConfig.renderPage;
            }
        }
        return null;
    }
}
