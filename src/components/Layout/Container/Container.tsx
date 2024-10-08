import './Container.scss';

import { ReactElement } from 'react';

import {
    alignContentOptions,
    displayContentOptions,
    flexDirectionOptions,
    justifyContentOptions,
} from '@/types/layout-types';

type IProps = {
    children: React.ReactNode;
    customStyle?: string;
    width?: string | number;
    height?: string;
    display?: displayContentOptions;
    flexDirection?: flexDirectionOptions;
    justifyContent?: justifyContentOptions;
    alignItems?: alignContentOptions;
    flexWrap?: 'nowrap' | 'wrap';
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    minHeight?: string;
};

const Container = ({
    children,
    customStyle,
    width,
    height,
    flexDirection,
    justifyContent,
    alignItems,
    backgroundColor,
    display,
    padding,
    margin,
    flexWrap = 'nowrap',
    minHeight,
}: IProps): ReactElement => {
    const classNames = ['container-template'];
    if (customStyle) classNames.push(customStyle);

    return (
        <div
            style={{
                width,
                height,
                flexDirection,
                justifyContent,
                alignItems,
                backgroundColor,
                display,
                padding,
                margin,
                flexWrap,
                minHeight,
            }}
            className={classNames.join(' ')}
        >
            {children}
        </div>
    );
};

export default Container;
