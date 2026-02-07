import { useState, useEffect } from 'react';
import calculateTimeLeft from '../helpers/calculateTimeLeft';

const useCountdown = targetDate => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);
		return () => clearTimeout(timer);
	}, [targetDate, timeLeft]);

	return timeLeft;
};

export default useCountdown;
