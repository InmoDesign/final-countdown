import { useState } from 'react';

const ToggleContent = ({ data }) => {
	const [show, setShow] = useState(false);

	return (
		<div className='w-full'>
			<div className='mb-4'>
				<button
					type='button'
					onClick={() => setShow(old => !old)}
					className='py-1 px-2 text-sm bg-gray-300 text-gray-800 rounded-md'
				>
					{data.label}
				</button>
			</div>
			{show && (
				<div className='w-full'>
					{data.content}
				</div>
			)}
		</div>
	);
};

export default ToggleContent;
