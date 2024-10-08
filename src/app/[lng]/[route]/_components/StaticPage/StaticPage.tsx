import {
    Block,
    BlockBody,
    BlockContainer,
    Column,
    Image,
    Row,
    TitleStructure
} from '@/components/react-components-library/src/index';
import { useTranslation } from '@/i18n/language/server';

interface IProps {
    lng: string;
}

export default async function ServerPage(props: IProps) {
    const { lng } = props;
    const { t } = await useTranslation(lng, 'translation');

    return (
        <Block color="white">
            <BlockContainer>
                <BlockBody>
                    <Row vertical="center" justify="center">
                        <Column xl={6} lg={6} md={12}>
                            <TitleStructure
                                title={t('server.title')}
                                content="Streamline your business operations and secure your agreements with legally binding electronic signatures. Discover the swiftest and most secure method to seal your business transactions with ease and confidence."
                                buttonsBlock={[
                                    {
                                        iconName: 'eye',
                                        href: `/${lng}`,
                                        linkType: 'btn',
                                        label: t('to-home-page'),
                                    },
                                    {
                                        iconName: 'download',
                                        href: `/${lng}`,
                                        linkType: 'btn-secondary',
                                        label: t('to-home-page'),
                                    },
                                ]}
                            />
                        </Column>
                        <Column xl={6} lg={6} md={6} smVis="none" lgVis="block">
                            <Image src="/assets/test.png" alt="test" />
                        </Column>
                    </Row>
                </BlockBody>
            </BlockContainer>
        </Block>
    );
}
