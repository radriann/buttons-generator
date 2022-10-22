import { useContext }from 'react';
import { ButtonCtx } from '../../context/ButtonContext';
import { Button } from './Button';
import { changeTheme } from '../../utils/changeTheme';
import { FaMoon } from 'react-icons/fa';

export const ButtonContainer = (): JSX.Element => {
	
	const { changeDisabled } = useContext(ButtonCtx);

	return (
		<section className="bg-white dark:bg-zinc-800 w-full grid place-content-center content-center p-12 bg-button-section-bg bg-cover bg-right-bottom lg:bg-center bg-no-repeat relative">
			<div className="absolute w-full my-12 px-12 flex items-center justify-center space-x-12">
				<i className="cursor-pointer dark:text-white" onClick={changeTheme}>
					<FaMoon />
				</i>
				<button className="w-36 h-8 bg-blue-400 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-blue-400" onClick={changeDisabled}>Disabled Styles</button>
			</div>
			<Button />
		</section>
	)
}
