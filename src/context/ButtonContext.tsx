import { createContext, useState } from 'react';
import { buttons } from '../data/Buttons';

const defaultState = {
  style: '',
	copy: '',
	disabled: false,
  changeStyle: (style:string) => {},
	changeDisabled: () => {},
}

export const ButtonCtx = createContext<ButtonContextType>(defaultState);

export const ButtonContextProvider: React.FC<Props> = ({ children }) => {
	const [style, setStyle] = useState(defaultState.style);
	const [copy, setCopy] = useState(defaultState.copy);
	const [disabled, setDisabledAttribute] = useState(defaultState.disabled);

	const changeStyle = (e: any) => {
		setStyle(e.target.id);
		const element:stylesObj | any = buttons.find(button => button.name === e.target.id);
		const { styles } = element;
		setCopy(styles);
	}

	const changeDisabled = () => {
		disabled === false ? setDisabledAttribute(true) : setDisabledAttribute(false);
	}

	return (
		<ButtonCtx.Provider value={{ style, changeStyle, copy, disabled, changeDisabled }}>
			{children}
		</ButtonCtx.Provider>
	)
}


