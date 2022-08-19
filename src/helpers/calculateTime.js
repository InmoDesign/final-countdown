const calculateTime = ({ second, minute, hour, day, month, year }) => {
	console.log(
		'second',
		second,
		'minute',
		minute,
		'hour',
		hour,
		'day',
		day,
		'month',
		month,
		'year',
		year
	);

	const userDate = [second, minute, hour, day, month, year]; // 26 / 3 / x - xx:20

	for (let index = 0; index < userDate.length; index++) {
		if (userDate[index] === null) {
			userDate[index] = 0;
		} else {
			break;
		}
	}

	console.log('User data', userDate);

	const today = new Date();

	const curatedUserDate = [
		userDate[0] === null ? today.getSeconds() : userDate[0],
		userDate[1] === null ? today.getMinutes() : userDate[1],
		userDate[2] === null ? today.getHours() : userDate[2],
		userDate[3] === null ? today.getDate() : userDate[3],
		userDate[4] === null ? today.getMonth() : userDate[4] - 1,
		userDate[5] === null ? today.getFullYear() : userDate[5]
	];

	let tempDate = new Date(
		curatedUserDate[5],
		curatedUserDate[4],
		curatedUserDate[3],
		curatedUserDate[2],
		curatedUserDate[1],
		curatedUserDate[0],
		0
	);

	const info = ['second', 'minute', 'hour', 'day', 'month', 'year'];

	if (tempDate < today) {
		for (let index = 0; index < curatedUserDate.length; index++) {
			const element = userDate[index];
			const before = curatedUserDate[index];
			if (element !== null) {
				curatedUserDate[index] = element;
			} else {
				if (tempDate > today) continue;
				curatedUserDate[index]++;
			}

			console.log(
				info[index],
				'before =>',
				before,
				'after =>',
				curatedUserDate[index]
			);

			tempDate = new Date(
				curatedUserDate[5],
				curatedUserDate[4],
				curatedUserDate[3],
				curatedUserDate[2],
				curatedUserDate[1],
				curatedUserDate[0]
			);
		}
	}
	console.log('Temp Date', tempDate);

	return tempDate;
};
export default calculateTime;
