import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '@/i18n/language/i18n-config';

const LanguageChange = ({ t, lng }: any) => {
    return (
        <footer>
            <Trans i18nKey="languageSwitcher" t={t}>
                Switch from <strong>{{ lng } as any}</strong> to:{' '}
            </Trans>
            {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                    return (
                        <span key={l}>
                            {index > 0 && ' or '}
                            <Link href={`/${l}`}>{l}</Link>
                        </span>
                    );
                })}
        </footer>
    );
};

export default LanguageChange;
