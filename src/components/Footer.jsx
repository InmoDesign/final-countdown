const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-white/5 text-slate-500 py-6 px-6 backdrop-blur-sm border-t border-white/10'>
			<div className='max-w-7xl m-auto text-center'>
				© Copyright{' '}
				<a
					href='https://isabellatech.com'
					rel='noreferrer'
					target='_blank'
					className='text-purple-400 hover:text-purple-300 transition-colors'
				>
					Isabella Tech
				</a>{' '}
				{currentYear}
			</div>
		</footer>
	);
};

export default Footer;
