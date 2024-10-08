import { JSX } from 'react';

export type IProps = {
    lng: string;
};

export interface IPropsParams<T> {
    params: T;
}


export type PageType = {
    // eslint-disable-next-line no-unused-vars
    renderPage: (props: IProps) => JSX.Element;
    exceptions: { lng: string; route: string }[];
};

export type RoutesConfig = Record<string, PageType>;
