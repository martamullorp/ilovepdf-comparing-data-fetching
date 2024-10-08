'use client';

import './Loading.scss';

import { ReactElement } from 'react';
import {
    colorStyles,
    textAlignOptions,
    textTransformOptions,
    fontSizeOptions,
    fontWeightOptions,
    marginOptions,
} from '@/types/layout-types';
import { useTranslation } from '@/i18n/language/client';

interface IProps {
    lng: string;
    customClass?: string;
    color?: colorStyles;
    textTransform?: textTransformOptions;
    textAlign?: textAlignOptions;
    fontSize?: fontSizeOptions;
    fontWeight?: fontWeightOptions;
    margin?: marginOptions;
    width?: string;
}

const Loading = (props: IProps): ReactElement => {
    const {
        lng,
        width,
        color,
        textTransform,
        textAlign,
        fontSize,
        fontWeight,
        margin,
        customClass,
    } = props;

    const classNames = ['loading'];
    classNames.push('loading-colors-'.concat(color || 'base-color'));
    classNames.push('loading__size-'.concat(fontSize || 'medium'));
    classNames.push('loading__margin-'.concat(margin || 'medium'));

    if (textTransform) classNames.push('loading__transform-'.concat(textTransform));
    if (textAlign) classNames.push('loading__align-'.concat(textAlign));
    if (fontWeight) classNames.push('loading__weight-'.concat(fontWeight));
    if (customClass) classNames.push(customClass);
    const { t } = useTranslation(lng, 'translation');

    return (
        <h1 style={{ width }} className={classNames.join(' ')}>
            {`${t('loading')}`}
        </h1>
    );
};

export default Loading;
