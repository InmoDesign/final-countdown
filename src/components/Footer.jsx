const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			© Copyright{' '}
			<a href='https://isabellatech.com' targer='_blank'>
				Isabella Tech
			</a>{' '}
			{currentYear}
		</footer>
	);
};

export default Footer;
