import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='bg-gray-800 shadow-md'>
			<div className='max-w-7xl m-auto py-6 px-6 flex items-center justify-between'>
				<Link to='/' targer='_blank' className='text-emerald-500'>
					Final Countdown
				</Link>
				<nav className='flex gap-4 text-gray-200'>
					<Link to='/' targer='_blank'>
						Home
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
