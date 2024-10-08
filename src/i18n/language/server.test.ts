import { initI18next, useTranslation } from './server';

describe('initI18next', () => {
    it('initializes i18nInstance with fallback options', async () => {
        const i18nInstance = await initI18next();
        expect(i18nInstance).toBeDefined();
        expect(i18nInstance.language).toBe('en');
        expect(i18nInstance.options.ns).toContain('translation');
    });

    it('initializes i18nInstance with provided options', async () => {
        const lng = 'es';
        const ns = 'irrelevant namespace';

        const i18nInstance = await initI18next(lng, ns);
        expect(i18nInstance).toBeDefined();
        expect(i18nInstance.language).toBe('es');
        expect(i18nInstance.options.ns).toContain('irrelevant namespace');
    });
});

describe('useTranslation', () => {
    it('returns translation and i18n instance', async () => {
        const lng = 'cat';
        const ns = 'translation';
        const { t, i18n } = await useTranslation(lng, ns);

        expect(t).toBeDefined();
        expect(i18n).toBeDefined();
    });
});
