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
					className='p-2 text-sm font-medium bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10 rounded-lg transition-all'
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
