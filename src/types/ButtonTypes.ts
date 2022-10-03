export type ButtonContextType = {
    style: string;
    copy: string;
    changeStyle: Function;
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