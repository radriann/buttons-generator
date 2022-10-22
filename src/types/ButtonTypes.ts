export type ButtonContextType = {
    style: string;
    copy: string;
    disabled: boolean;
    changeStyle: Function;
    changeDisabled: any;
}

export type stylesObj = {
    id: number;
    name: string;
    button: string
    styles: string;
}

export type Props = {
    children: React.ReactNode;
}