'use client';

import './Loading.scss';

import {
    colorStyles,
    fontSizeOptions,
    fontWeightOptions,
    marginOptions,
    textAlignOptions,
    textTransformOptions,
} from '@/types/Layout-types';
import { ReactElement } from 'react';

interface IProps {
    lng?: string;
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
    const { width, color, textTransform, textAlign, fontSize, fontWeight, margin, customClass } =
        props;

    const classNames = ['loading'];
    classNames.push('loading-colors-'.concat(color || 'base-color'));
    classNames.push('loading__size-'.concat(fontSize || 'medium'));
    classNames.push('loading__margin-'.concat(margin || 'medium'));

    if (textTransform) classNames.push('loading__transform-'.concat(textTransform));
    if (textAlign) classNames.push('loading__align-'.concat(textAlign));
    if (fontWeight) classNames.push('loading__weight-'.concat(fontWeight));
    if (customClass) classNames.push(customClass);

    return (
        <h1 style={{ width }} className={classNames.join(' ')}>
            Client loading
        </h1>
    );
};

export default Loading;
