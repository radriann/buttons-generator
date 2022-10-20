import React from 'react';
import { Button } from './Button';
import { changeTheme } from '../../utils/changeTheme';
import { FaMoon } from 'react-icons/fa';

export const ButtonContainer = (): JSX.Element => {
	return (
		<section className="bg-white dark:bg-zinc-800 w-full grid place-content-center content-center p-12 bg-button-section-bg bg-cover bg-right-bottom lg:bg-center bg-no-repeat relative">
			<i className="absolute top-5 lg:top-10 left-5 lg:left-16 cursor-pointer dark:text-white" onClick={changeTheme}>
				<FaMoon />
			</i>
			<Button />
		</section>
	)
}
