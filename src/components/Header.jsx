import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='bg-gray-800 shadow-md'>
			<div className='flex items-center justify-between px-6 py-6 m-auto max-w-7xl'>
				<Link to='/' targer='_blank' className='text-emerald-500'>
					<svg
						fill='#0FB981'
						height='24px'
						width='24px'
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
						xmlSpace='preserve'
						className='inline mr-2 align-sub'
					>
						<g>
							<g>
								<path
									d='M392.09,122.767l15.446-24.272c6.858-10.778,3.681-25.076-7.097-31.935c-10.777-6.86-25.076-3.681-31.935,7.099
			l-15.409,24.215c-22.708-11.316-47.642-18.798-73.962-21.58V46.265h1.448c12.775,0,23.133-10.357,23.133-23.133
			S293.356,0,280.581,0h-49.163c-12.775,0-23.133,10.357-23.133,23.133s10.357,23.133,23.133,23.133h1.45v30.029
			C123.239,87.885,37.535,180.886,37.535,293.535C37.535,413.997,135.538,512,256,512s218.465-98.003,218.465-218.465
			C474.465,224.487,442.259,162.83,392.09,122.767z M256,465.735c-94.951,0-172.2-77.249-172.2-172.2s77.249-172.2,172.2-172.2
			s172.2,77.249,172.2,172.2S350.951,465.735,256,465.735z'
								/>
							</g>
						</g>
						<g>
							<g>
								<path
									d='M333.172,205.084c-9.623-8.397-24.238-7.407-32.638,2.222l-61.964,71.02c-8.399,9.626-7.404,24.24,2.222,32.638
			c9.626,8.399,24.24,7.404,32.638-2.222l61.964-71.02C343.794,228.096,342.798,213.484,333.172,205.084z'
								/>
							</g>
						</g>
					</svg>{' '}
					Timer Frame
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
