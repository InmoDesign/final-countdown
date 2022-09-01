const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gray-800 text-gray-100 py-6 px-6'>
			<div className='max-w-7xl m-auto text-center'>
				© Copyright{' '}
				<a
					href='https://isabellatech.com'
					rel='noreferrer'
					target='_blank'
					className='text-emerald-400'
				>
					Isabella Tech
				</a>{' '}
				{currentYear}
			</div>
		</footer>
	);
};

export default Footer;
