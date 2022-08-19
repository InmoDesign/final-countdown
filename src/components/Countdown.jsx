import { useEffect, useState } from 'react';
import calculateTimeLeft from '../helpers/calculateTimeLeft';
import PrintCountdown from './PrintCountdown';

const Countdown = ({ date }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(date));
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<div>
			<PrintCountdown {...timeLeft} />
		</div>
	);
};
export default Countdown;
