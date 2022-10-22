import { useContext, useRef } from 'react';
import { ButtonCtx } from '../../context/ButtonContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { copiedAlert } from '../../utils/copiedAlert';
import { ButtonToast } from './ButtonToast';

export const Button = (): JSX.Element => {

	const { copy, style, disabled } = useContext(ButtonCtx);

	return (
		<>
			<CopyToClipboard text={copy}>
				<button disabled={disabled} className={style || 'normal'} onClick={copiedAlert}>
					Click Me!
				</button>
			</CopyToClipboard>
			<ButtonToast />
		</>
	)
}
