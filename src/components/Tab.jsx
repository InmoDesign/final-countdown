import { useState } from 'react';

const Tab = ({ pages }) => {
	const [activeTab, setActiveTab] = useState(pages[0]?.id);

	return (
		<div className='w-full'>
			<div className='flex items-center border-b'>
				{pages.map(page => (
					<button
						type='button'
						className={`tab-button${activeTab === page.id ? ' selected' : ''}`}
						key={page.id}
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
