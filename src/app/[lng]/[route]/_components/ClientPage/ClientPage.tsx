'use client';

import { useTranslation } from '@/i18n/language/client';
import { useState } from 'react';

import { Text, Title } from '@/components/Atoms';
import { Container } from '@/components/Layout';
import { Button, Link } from '@/components/react-components-library/src/index';

interface IProps {
    lng: string;
}

export default function ClientPage(props: IProps) {
    const { lng } = props;
    const { t } = useTranslation(lng, 'translation');
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Title margin="small" fontSize="small" fontWeight="normal" text={t('client.title')} />
            <Text margin="small" text="Reusable react components library buttons example" />
            <Text dataTestId="client-counter" text={t('client.counter', { count: counter })} />
            <Container
                display="flex"
                justifyContent="space-around"
            >
                <Button secondary label="-" onClick={() => setCounter(Math.max(0, counter - 1))} />
                <Button secondary label="+" onClick={() => setCounter(Math.max(0, counter + 1))} />
                <Button
                    secondary
                    label="Random"
                    iconName="restart"
                    onClick={() => setCounter(Math.max(0, counter + 1))}
                />
                <Button
                    secondary
                    label="Random"
                    iconPosition="right"
                    iconName="restart"
                    onClick={() => setCounter(Math.max(0, counter + 1))}
                />
            </Container>
            <Link type="secondary" href={`/${lng}`} label={t('to-home-page')} />
        </>
    );
}
