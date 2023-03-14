type ButtonContextType = {
  style: string;
  copy: string;
  disabled: boolean;
  changeStyle: Function;
  changeDisabled: any;
}

type stylesObj = {
  id: number;
  name: string;
  button: string
  styles: string;
}

type Props = {
  children: React.ReactNode;
}