const calculateTime = ({ second, minute, hour, day, month, year }) => {
	console.log('year', year);

	const userDate = [second, minute, hour, day, month - 1, year]; // 26 / 3 / x - xx:20

	const today = new Date();

	const curatedUserDate = [
		today.getSeconds(),
		today.getMinutes(),
		today.getHours(),
		today.getDate(),
		today.getMonth(),
		today.getFullYear()
	];

	const tempDate = new Date(year, month, day, hour, minute, second, 0);

	userDate.forEach((element, index) => {
		if (!element) {
			if (tempDate > today) {
				return tempDate;
			}
			userDate[index]++;
		}
	});

	return tempDate;
};
export default calculateTime;
