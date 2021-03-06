import * as React from 'react';
interface IProps<T> {
    title: string;
    value: T;
    checked: boolean;
    theme: 'default' | 'emphasis';
    onClick: (value: T) => void;
}
export declare class RadioBox<T> extends React.Component<IProps<T>> {
    render(): JSX.Element;
    private renderCheckedRadio;
    private renderUncheckedRadio;
    private onClick;
    private readonly color;
    private readonly radioColor;
}
export {};
