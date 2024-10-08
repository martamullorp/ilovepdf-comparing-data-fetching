import './Title.scss';

import {
    colorStyles,
    fontSizeOptions,
    fontWeightOptions,
    marginOptions,
    textTransformOptions,
} from '@/types/layout-types';

interface IProps {
    text: string;
    customClass?: string;
    color?: colorStyles;
    titleTransform?: textTransformOptions;
    fontSize?: fontSizeOptions;
    fontWeight?: fontWeightOptions;
    margin?: marginOptions;
}

const Title = (props: IProps) => {
    const { text, color, fontSize, titleTransform, fontWeight, customClass, margin } =
        props;
    const classNames = ['title'];

    classNames.push('title-colors-'.concat(color || 'base-color'));
    classNames.push('title__size-'.concat(fontSize || 'medium'));
    classNames.push('title__margin-'.concat(margin || 'medium'));

    if (titleTransform) classNames.push('title__transform-'.concat(titleTransform));
    if (fontWeight) classNames.push('title__weight-'.concat(fontWeight));

    if (customClass) classNames.push(customClass);

    return <h2 className={classNames.join(' ')}>{text}</h2>;
};

export default Title;
