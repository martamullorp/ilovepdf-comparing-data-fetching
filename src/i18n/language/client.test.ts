import { act, renderHook } from '@testing-library/react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useTranslation } from './client';

jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: jest.fn(),
}));

describe('useTranslation', () => {
    it('should change language and set cookie when runsOnServerSide is true', () => {
        const i18n = {
            resolvedLanguage: 'en',
            changeLanguage: jest.fn((newLanguage) => {
                i18n.resolvedLanguage = newLanguage;
                return Promise.resolve();
            }),
        };

        const useTranslationOrgReturnValue = {
            i18n,
        };

        (useTranslationOrg as jest.Mock).mockReturnValue(useTranslationOrgReturnValue);
        i18next.use = jest.fn().mockImplementation(initReactI18next as any);

        const { result } = renderHook(() => useTranslation('en'));

        expect(useTranslationOrg).toHaveBeenCalledWith(undefined, undefined);
        expect(result.current.i18n.resolvedLanguage).toBe('en');

        act(() => {
            result.current.i18n.changeLanguage('cat');
        });
        expect(result.current.i18n.resolvedLanguage).toBe('cat');
    });
});
