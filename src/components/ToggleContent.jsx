import { useEffect, useRef, useState } from 'react';

const ToggleContent = ({ data }) => {
	const [show, setShow] = useState(false);
	const box = useRef();

	useEffect(() => {
		if (show) {
			box.current.classList.remove('hidden');
		} else {
			box.current.classList.add('hidden');
		}
	}, [show, box]);

	const toggle = () => {
		setShow(old => !old);
	};

	return (
		<div className='w-full'>
			<div className='mb-4'>
				<button
					type='button'
					onClick={() => toggle()}
					className='py-1 px-2 text-sm bg-gray-300 text-gray-800 rounded-md'
				>
					{data.label}
				</button>
			</div>
			<div className='hidden w-full' ref={box}>
				{data.content}
			</div>
		</div>
	);
};

export default ToggleContent;
