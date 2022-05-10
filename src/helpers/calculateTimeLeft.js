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

export default calculateTimeLeft;
