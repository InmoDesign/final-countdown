import { useEffect, useState } from 'react';

const calculateTimeLeft = date => {
	const today = new Date();

	const timeLeft = {
		valid: true
	};

	const difference = (date - today) / 1000;

	if (difference > 0) {
		timeLeft.days = Math.floor(difference / 86400);
		timeLeft.hours = Math.floor((difference / 3600) % 24);
		timeLeft.minutes = Math.floor((difference / 60) % 60);
		timeLeft.seconds = Math.floor(difference % 60);
	} else {
		timeLeft.valid = false;
	}

	return timeLeft;
};

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
