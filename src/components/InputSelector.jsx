import { ChevronDownIcon } from '@heroicons/react/24/outline';

const InputSelector = ({
	label,
	name,
	type,
	options = {},
	onChange,
	...props
}) => {
	return (
		<div className='grid md:grid-cols-2 items-center gap-2 py-1'>
			<label className='text-sm text-gray-400' htmlFor={name}>
				{label}
			</label>
			<div className='relative'>
				<select
					name={name}
					onChange={onChange}
					className='w-full p-2 border border-gray-300 shadow-sm rounded-md appearance-none placeholder:hidden'
					{...props}
				>
					{options.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				<ChevronDownIcon className='absolute top-1/4 right-2 h-5 touch-none select-none pointer-events-none text-gray-400' />
			</div>
		</div>
	);
};

export default InputSelector;
