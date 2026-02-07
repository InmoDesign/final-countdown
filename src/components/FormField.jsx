const FormField = ({ label, name, type, variant = 'input', subfix, onChange, ...props }) => {
	const inputClassName =
		'w-full p-2 border border-gray-300 shadow-sm rounded-md appearance-text placeholder:hidden';

	const renderInput = () => {
		switch (variant) {
			case 'textarea':
				return (
					<textarea
						name={name}
						onChange={onChange}
						{...props}
						className={inputClassName}
					/>
				);
			case 'date':
				return (
					<input
						name={name}
						type='date'
						required
						pattern='\d{4}-\d{2}-\d{2}'
						onChange={onChange}
						{...props}
						className={inputClassName}
					/>
				);
			case 'time':
				return (
					<input
						name={name}
						type='time'
						step='2'
						onChange={onChange}
						{...props}
						className={inputClassName}
					/>
				);
			default:
				return (
					<input
						name={name}
						type={type || 'text'}
						onChange={onChange}
						{...props}
						className={inputClassName}
					/>
				);
		}
	};

	return (
		<div className='grid md:grid-cols-2 items-center gap-2 py-1'>
			<label className='text-sm text-gray-400' htmlFor={name}>
				{label}
			</label>
			<div className='relative'>
				{renderInput()}
				{subfix && (
					<div className='absolute top-1/4 right-2 text-gray-400 pointer-events-none'>
						{subfix}
					</div>
				)}
			</div>
		</div>
	);
};

export default FormField;
