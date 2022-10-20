import { OptionsList } from './OptionsList';

export const Options = (): JSX.Element => {
	return (
		<nav className="w-full md:w-3/5 lg:w-2/4 h-full p-8 bg-white dark:bg-gray-900 shadow-2xl shadow-black border-2 border-black overflow-auto transition-all duration-300">
			<h1 className="text-3xl md:text-2xl lg:text-3xl font-bold font-display text-black border-b-2 border-b-sky-600 w-fit dark:text-white">
				Buttons Generator
			</h1>
			<h2 className="my-2 text-black dark:text-white font-medium w-fit">
				Click in the "Click Me" button to copy the styles
			</h2>

			<OptionsList />

			<footer className="mt-4">
				<span className="font-bold text-black dark:text-white">
					Coded with ❤ by
					<a
						className="ml-2 text-black dark:text-white border-b-2 border-sky-500 transition-all duration-300 hover:border-transparent hover:text-black dark:hover:text-blue-600"
						href="https://github.com/laindomJS"
						target="_blank">
						lain_ts
					</a>
				</span>
			</footer>
		</nav>
	)
}
