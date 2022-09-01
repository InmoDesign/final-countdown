const InputArea = ({ label, name, type, subfix, onChange, ...props }) => {
	return (
		<div className='grid md:grid-cols-2 items-center gap-2 py-1'>
			<label className='text-sm text-gray-400' htmlFor={name}>
				{label}
			</label>
			<div className='relative'>
				<textarea
					name={name}
					type={type || 'text'}
					onChange={onChange}
					{...props}
					className='w-full p-2 border border-gray-300 shadow-sm rounded-md appearance-text placeholder:hidden'
				/>
				{subfix && (
					<div className='absolute top-1/4 right-2 text-gray-400 pointer-events-none'>
						{subfix}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputArea;
