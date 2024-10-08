# Translations i18n Config

This is a brief explanation about the configuration we have used for the internationalization of projects with `i18next` with static pages.

> **Consideration:** We are using the `export:output` feature of Next.js. This means that we cannot use certain options such as `middleware.ts` or some internationalization libraries like `next-translate` or `next-intl` as they require configurations in the `next.config.js` that are not available for this type of export.
>
> [Library Config](https://locize.com/blog/next-app-dir-i18n/)

## `i18n-settings.ts`

This file provides default configurations and a function to obtain configuration options for `i18next` in an application.

Exported Constants:

-   `fallbackLng`: It's the default language to use in case the primary language can't be determined. In this case, it is set to `en` (English).
-   `languages`: It's an array containing the supported languages in the application. In this case, it includes the default language `en` and `es`, `cat`, `ja`.
-   `defaultNS`: It's the default namespace for translations, configured as `translation`.
-   `cookieName`: It's the name of the cookie used to store language configuration.
-   Function `getOptions`: This function returns an options configuration object for `i18next` based on the provided parameters (language and namespace).

## `server.ts`

`initI18next` is an asynchronous function that creates and configures a new instance of `i18next`. It uses the `resourcesToBackend` to load translation files from the locales folder according to the provided language and namespace configuration.

`useTranslation` is an asynchronous function that uses `initI18next` to initialize an instance of `i18next`. It returns an object containing a translation `function (t)` and the `i18next` instance for use in React components.

This code simplifies the use of i18n in a React application and allows for the dynamic loading of translation files as needed.

## `client.ts`

`i18next` Configuration: The `use` method of `i18next` is employed to add additional functionalities:

-   `initReactI18next`: Integrates `i18next` with React.
-   `LanguageDetector`: Automatically detects the user's language based on various sources such as the URL, HTML tag, cookies, and the browser.
-   `resourcesToBackend`: Loads translation files from the `locales` folder according to the provided language and namespace configuration. This function uses dynamic import (`import()`) to asynchronously load translation files.
-   The `init method is used to initialize the i18next` instance with configuration options:

This `useTranslation` function is designed to facilitate the handling of internationalization (i18n) in a React application. Here's a description of what it does:

-   It uses the `useCookies` hook to retrieve and set cookies. Specifically, it fetches the value of the cookie named `cookieName` as defined in the settings.

-   It calls the `useTranslationOrg` function, which is likely an original or unmodified version of the `useTranslation` function from `react-i18next`. It saves the result in the variable ret and extracts the i18n instance from that result.

If `runsOnServerSide` is `true` (indicating that the code is running on the server side) and a language (lng) is provided, and the language resolved by i18n does not match lng, it then changes the language by calling `i18n.changeLanguage(lng)`.

On the client side:

-   It uses the `useState` hook to maintain the state of `activeLng`, initialized with the language resolved by `i18n`.
-   It uses multiple effects `(useEffect)` to handle changes in `activeLng`, lng, and cookies, adjusting the language accordingly by calling `i18n.changeLanguage` and updating the cookies.

In summary, this function extends the functionality of `useTranslationOrg` to include additional logic related to language detection and change, as well as cookie management.
