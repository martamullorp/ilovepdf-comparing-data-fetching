import RouteMatcher from './RouteMatcher';

const routesConfig = {
    'first-route': {
        renderPage: jest.fn(),
        exceptions: [
            { lng: 'es', route: 'spanish-route' },
            { lng: 'cat', route: 'catalan-route' },
        ],
    },
    'second-route': {
        renderPage: jest.fn(),
        exceptions: [
            { lng: 'es', route: 'second-spanish-route' },
            { lng: 'cat', route: 'second-catalan-route' },
        ],
    },
    'third-route': {
        renderPage: jest.fn(),
        exceptions: [],
    },
};

describe('RouteMatcher', () => {
    it('should create the routes based on a routesConfig object', () => {
        const routes = new RouteMatcher(routesConfig);

        expect(routes.routesData).toEqual(
            expect.objectContaining({
                'first-route': expect.objectContaining({
                    renderPage: expect.any(Function),
                    exceptions: expect.arrayContaining([
                        expect.objectContaining({
                            lng: expect.any(String),
                            route: expect.any(String),
                        }),
                    ]),
                }),
                'second-route': expect.objectContaining({
                    renderPage: expect.any(Function),
                    exceptions: expect.arrayContaining([
                        expect.objectContaining({
                            lng: expect.any(String),
                            route: expect.any(String),
                        }),
                    ]),
                }),
                'third-route': expect.objectContaining({
                    renderPage: expect.any(Function),
                    exceptions: [],
                }),
            }),
        );
    });

    it('should generate static params with provided customKey and remove the repeated routes', () => {
        const customKey = 'irrelevantKey';
        const routes = new RouteMatcher(routesConfig);
        const staticParams = routes.generateStaticRoutes(customKey, 'es');

        expect(staticParams).toEqual([
            expect.objectContaining({
                [customKey]: 'spanish-route',
            }),
            expect.objectContaining({
                [customKey]: 'second-spanish-route',
            }),
            expect.objectContaining({
                [customKey]: 'third-route',
            }),
        ]);
    });

    it('route is available for a language', () => {
        const routes = new RouteMatcher(routesConfig);
        const availableRoute = routes.getIfRouteIsAvailableForLng('es', 'spanish-route');

        expect(availableRoute).toBe(true);
    });

    it('route is NOT available for a language', () => {
        const routes = new RouteMatcher(routesConfig);
        const availableRoute = routes.getIfRouteIsAvailableForLng('en', 'second-exception');

        expect(availableRoute).toBe(false);
    });

    it('return function component that match to the given route', () => {
        const routes = new RouteMatcher(routesConfig);
        const matchedComponent = routes.getComponentForRoute('first-route');

        expect(typeof matchedComponent).toBe('function');
    });

    it('return function component that match to the exception given route', () => {
        const routes = new RouteMatcher(routesConfig);
        const matchedComponent = routes.getComponentForRoute('spanish-route');

        expect(typeof matchedComponent).toBe('function');
    });

    it('return NULL if the route not match to any Component', () => {
        const routes = new RouteMatcher(routesConfig);
        const matchedComponent = routes.getComponentForRoute('irrelevant');

        expect(matchedComponent).toBe(null);
    });
});
