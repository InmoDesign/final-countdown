import { useId, useState } from 'react';

const ToggleContent = ({ data }) => {
	const [show, setShow] = useState(false);
	const contentId = useId();

	return (
		<div className='w-full'>
			<div className='mb-4'>
				<button
					type='button'
					onClick={() => setShow(old => !old)}
					aria-expanded={show}
					aria-controls={contentId}
					className='py-1 px-2 text-sm bg-gray-300 text-gray-800 rounded-md'
				>
					{data.label}
				</button>
			</div>
			{show && (
				<div className='w-full' id={contentId}>
					{data.content}
				</div>
			)}
		</div>
	);
};

export default ToggleContent;
