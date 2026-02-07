import { useState, useEffect } from 'react';
import calculateTimeLeft from '../helpers/calculateTimeLeft';

const useCountdown = targetDate => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);
		return () => clearInterval(timer);
	}, [targetDate]);

	return timeLeft;
};

export default useCountdown;
