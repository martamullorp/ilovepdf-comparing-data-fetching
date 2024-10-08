# Routes i18n Config

This is a brief explanation of the configuration we have used to dynamically translate paths based on language and display the corresponding page according to the available route.

## `routes-config.tsx`

This code defines a configuration `routesConfig` to manage routes in a Next.js application using internationalization (i18n).

An object named `routesConfig` is defined, containing configurations for different pages in the application.

Each page has a key (e.g., 'client-page', 'static-page', etc.) and an associated object with information on how to render that page and route `exceptions` for different languages and specific routes. Exceptions indicate alternative routes for certain languages.

## `RouteMatcher.ts`

`Constructor`: The class has a constructor that receives the route configuration (routesData) when instantiated.

`generateStaticRoutes` function takes a dynamic route key (dynamicRouteKey) and generates unique static routes based on exceptions defined in the route configuration.

It iterates over the route configuration and adds both the original route and exceptions to the set of routes. It returns an array of objects where each object has the key passed to the function (dynamicRouteKey) and the value corresponding to a unique route.

`getIfRouteIsAvailableForLng` function checks if a specific route is available for a given language.

It iterates over the route configuration and compares exceptions for the specified language. If an exception exists, it adds the exception route; otherwise, it uses the original route.

`getComponentForRoute` function iterates over the route configuration and looks for a match with the provided route. If a match is found, it returns the associated `renderPage` function.

It also checks exceptions to find matches and returns the corresponding `renderPage` function if an exception exists.
If no match is found, it returns null.

⭐️⭐️ **You have an example that uses the class in the `[route]` folder within the `page.tsx` file.**
