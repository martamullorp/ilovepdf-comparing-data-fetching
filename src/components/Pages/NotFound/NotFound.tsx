import { useTranslation } from '@/i18n/language/server';

import { Title } from '@/components/Atoms';
import { Link } from '@/components/react-components-library/src';

interface IProps {
    lng: string;
}

export default async function NotFountPage(props: IProps) {
    const { lng } = props;
    const { t } = await useTranslation(lng, 'translation');

    return (
        <>
            <Title fontSize="small" fontWeight="normal" text={`${t('not-found')}`} />
            <Link label={t('to-home-page')} href={`/${lng}`} />
        </>
    );
}
