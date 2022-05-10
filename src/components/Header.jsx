import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/' targer='_blank'>
				Final Countdown
			</Link>
			<nav>
				<Link to='/' targer='_blank'>
					home
				</Link>
			</nav>
		</header>
	);
};

export default Header;
