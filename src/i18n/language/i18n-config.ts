export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es', 'cat', 'ja', 'ar'];
export const defaultNS = 'translation';

// rtl ar
// ltr en

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
