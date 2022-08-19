const calculateRightTime = ({ second, minute, hour, day, month, year }) => {
	if (year) return new Date(year, month, day, hour, minute, second, 0);

	const currentDate = new Date();
	const date = [
		second,
		minute,
		hour,
		day,
		month - 1,
		year || currentDate.getFullYear()
	]; // 26 / 3 / x - xx:20
	const finalDate = [second, minute, hour, day, month - 1, year]; // 26 / 3 / 2022 - 00:20

	const currentDateArray = [
		currentDate.getSeconds(),
		currentDate.getMinutes(),
		currentDate.getHours(),
		currentDate.getDate(),
		currentDate.getMonth(),
		currentDate.getFullYear()
	];

	let incremented = false;
	for (let index = date.length - 1; index >= 0; index--) {
		const element = date[index];
		if (element) {
			if (!incremented) {
				if (date[index] <= currentDateArray[index]) {
					if (date.length > index + 1) {
						finalDate[index + 1] = currentDateArray[index + 1] + 1;
						incremented = true;
					}
				} else {
					if (date.length > index + 1) {
						finalDate[index + 1] = currentDateArray[index + 1];
						incremented = true;
					}
				}
			}
		} else {
			if (incremented) {
				finalDate[index] = 0;
			} else {
				finalDate[index] = currentDateArray[index];
			}
		}
	}

	return new Date(
		finalDate[5],
		finalDate[4],
		finalDate[3],
		finalDate[2],
		finalDate[1],
		finalDate[0]
	);
};
export default calculateRightTime;
