import { useRef, useState } from 'react';

const Tab = ({ pages }) => {
	const [activeTab, setActiveTab] = useState(pages[0]?.id);
	const tabsRef = useRef([]);

	const handleKeyDown = e => {
		const currentIndex = pages.findIndex(p => p.id === activeTab);
		let newIndex;

		if (e.key === 'ArrowRight') {
			newIndex = (currentIndex + 1) % pages.length;
		} else if (e.key === 'ArrowLeft') {
			newIndex = (currentIndex - 1 + pages.length) % pages.length;
		} else {
			return;
		}

		e.preventDefault();
		setActiveTab(pages[newIndex].id);
		tabsRef.current[newIndex]?.focus();
	};

	return (
		<div className='w-full'>
			<div className='flex items-center border-b' role='tablist' onKeyDown={handleKeyDown}>
				{pages.map((page, index) => (
					<button
						type='button'
						role='tab'
						id={`tab-${page.id}`}
						aria-selected={activeTab === page.id}
						aria-controls={`tabpanel-${page.id}`}
						tabIndex={activeTab === page.id ? 0 : -1}
						className={`tab-button${activeTab === page.id ? ' selected' : ''}`}
						key={page.id}
						ref={el => (tabsRef.current[index] = el)}
						onClick={() => setActiveTab(page.id)}
					>
						{page.title}
					</button>
				))}
			</div>
			<div className='pt-4'>
				{pages.map(page => (
					<div
						key={page.id}
						role='tabpanel'
						id={`tabpanel-${page.id}`}
						aria-labelledby={`tab-${page.id}`}
						className={activeTab !== page.id ? 'hidden' : undefined}
					>
						{page.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tab;
