# Next.js Template

This template serves as a starting point for developing frontend projects at ILovePDF.

## How to use it:

> [!IMPORTANT]
> Remember that the components and pages there are in the template gives us an example of pages and structure you need to follow, but please remove it for your project and create your own pages and reusable components.


```
git clone git@github.com:ilovepdf/frontend-template.git mynewrepo
```

```
cd mynewrepo
```

```
git remote set-url origin /url/of/new/empty/repo
```

```
git push -u origin main
```

## Template structure:

-   Using prettier, eslint and stylelint.
-   Folders Structure:

```.
    ├── ...
    ├── src
    │   ├── app
    │   │   └── [lng] -- language in route
    │   │   ├── ...
    │   ├── components
    │   │   └── Atoms
    │   │   ├── ...
    │   │   └── Molecules
    │   │   ├── ...
    │   │   └── Layout
    │   │   ├── ...
    │   ├── i18n
    │   │   └── locales
    │   │   │   ├── ...
    │   │   └── routes -- All the config for routes translations
    │   │   │   ├── routes-config.tsx
    │   │   │   └── service
    │   │   └── translations -- All the config for text translations
    │   │   │   ├── i18n-settings.ts
    │   │   │   ├── client.ts
    │   │   │   └── server.ts
    │   ├── context
    │   ├── hooks
    │   ├── styles
    │   └── types
    └── ...
```

-   `i18n-next` library for the internationalization [Check the documentation](./docs/i18n/readme.md)
-   `routes-config` to translate the url based on `lng` [Check the documentation](/docs/routes/readme.md)
-   Added `husky` to the project to check lint and tests in every commit, if you don't want to use it in a commit because for example is a work in progress we can use `git commit <quote> —no-verify`

## Accessibility

-   [Eslint rule](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

## Recommendations:

-   Follow the [React Design Pattern recommendations](https://medium.com/@obrm770/best-practices-and-design-patterns-in-react-js-for-high-quality-applications-6b203be747fb)
-   Use `date-fn` and not `moment.js`, moment for now is only in a maintenance mode.
-   NOT use a `Redux Toolkit` as a standard.
-   Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   More about [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

## Testing strategy:

-   Testing Strategy [Check the documentation](https://docs.google.com/presentation/d/1chNRaawNRfcovzel6lISccK8gZsQg1mwps5yCNnpjW0/edit#slide=id.g15116050b24_0_90)
-   Testing Recommendation [to mock API requests](https://mswjs.io/)

## Related interesting POCS (Proof of Concept):

-   [Atomic Components VS HTML tags bundle size](https://github.com/martamullorp/ilovepdf-atomic-components-and-html-tags-bundle-size)
-   [Render and Rerender Elements](https://github.com/martamullorp/ilovepdf-rerender-elements)
-   [A webkitdirectory attribute POC](https://github.com/martamullorp/ilovepdf-webkitdirectory-atttribute)
