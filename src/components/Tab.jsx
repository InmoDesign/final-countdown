const Tab = ({ pages }) => {
	const open = id => {
		for (let i = 0; i < pages.length; i++) {
			const page = document.getElementById(pages[i].id);
			const button = document.getElementById(`${pages[i].id}_button`);

			if (page) {
				if (page.id === id) {
					page.classList.remove('hidden');
					if (button) {
						button.classList.add('selected');
					}
				} else {
					page.classList.add('hidden');
					if (button) {
						button.classList.remove('selected');
					}
				}
			}
		}
	};

	return (
		<div className='w-full'>
			<div className='flex items-center border-b'>
				{pages.map((page, index) => (
					<button
						type='button'
						className={`tab-button ${index > 0 ? '' : ' selected'}`}
						id={`${page.id}_button`}
						key={page.id}
						onClick={() => open(page.id)}
					>
						{page.title}
					</button>
				))}
			</div>
			<div className='pt-4'>
				{pages.map((page, index) => (
					<div
						id={page.id}
						className={index > 0 ? 'hidden' : undefined}
						key={page.id}
					>
						{page.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tab;
