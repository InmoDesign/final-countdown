import { useEffect, useState } from 'react';
import calculateTimeLeft from '../helpers/calculateTimeLeft';

const Countdown = ({ date }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(date));
		}, 1000);
		return () => clearTimeout(timer);
	});

	const { days, hours, minutes, seconds, valid } = timeLeft;

	return (
		<div>
			{(valid && (
				<div>
					{days > 0 && <span>{days} dias - </span>}{' '}
					<span>{hours} horas - </span>
					<span>{minutes} minutos - </span> <span>{seconds} segundos </span>
				</div>
			)) ||
				'TIME IS DONE!'}
		</div>
	);
};
export default Countdown;
