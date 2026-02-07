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
			<label className='text-xs text-slate-300 font-semibold' htmlFor={name}>
				{label}
			</label>
			<div className='relative'>
				<select
					name={name}
					onChange={onChange}
					className='w-full px-2 py-1 text-sm text-white border border-white/20 bg-white/5 rounded-lg placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all appearance-none placeholder:hidden'
					{...props}
				>
					{options.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				<svg
					className='absolute top-1/4 right-2 w-5 h-5 touch-none select-none pointer-events-none text-slate-500'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M6 9l6 6 6-6' />
				</svg>
			</div>
		</div>
	);
};

export default InputSelector;
