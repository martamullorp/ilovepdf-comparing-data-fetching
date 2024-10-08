import './Text.scss';

import {
    colorStyles,
    fontSizeOptions,
    fontWeightOptions,
    marginOptions,
    textAlignOptions,
    textTransformOptions,
} from '@/types/layout-types';
import { ReactElement } from 'react';

interface IProps {
    text: string;
    customClass?: string;
    color?: colorStyles;
    textTransform?: textTransformOptions;
    textAlign?: textAlignOptions;
    fontSize?: fontSizeOptions;
    fontWeight?: fontWeightOptions;
    margin?: marginOptions;
    width?: string;
    dataTestId?: string;
}

const Text = (props: IProps): ReactElement => {
    const {
        text,
        width,
        color,
        textTransform,
        textAlign,
        fontSize,
        fontWeight,
        margin,
        customClass,
    } = props;

    const classNames = ['text'];

    classNames.push('text-colors-'.concat(color || 'base-color'));
    classNames.push('text__size-'.concat(fontSize || 'medium'));
    classNames.push('text__margin-'.concat(margin || 'medium'));

    if (textTransform) classNames.push('text__transform-'.concat(textTransform));
    if (textAlign) classNames.push('text__align-'.concat(textAlign));
    if (fontWeight) classNames.push('text__weight-'.concat(fontWeight));
    if (customClass) classNames.push(customClass);

    return (
        <p style={{ width }} className={classNames.join(' ')}>
            {text}
        </p>
    );
};

export default Text;
