const calculateTime = ({ second, minute, hour, day, month, year }) => {
	const userDate = [second, minute, hour, day, month, year];

	const today = new Date();

	const curatedUserDate = [
		userDate[0] === null ? 0 : userDate[0],
		userDate[1] === null ? today.getMinutes() : userDate[1],
		userDate[2] === null ? today.getHours() : userDate[2],
		userDate[3] === null ? today.getDate() : userDate[3],
		userDate[4] === null ? today.getMonth() : userDate[4],
		userDate[5] === null ? today.getFullYear() : userDate[5]
	];

	const defaultTime = [0, 0, 0, 1, 0, today.getFullYear()];
	const dateWithDefault = userDate.map((value, index) =>
		value === null ? defaultTime[index] : value
	);

	let tempDate = createDate(dateWithDefault);
	let assigned = false;
	if (tempDate < today) {
		for (let index = 0; index < curatedUserDate.length; index++) {
			const element = userDate[index];

			if (element !== null) {
				assigned = true;
			} else {
				if (!assigned) {
					curatedUserDate[index] = defaultTime[index];
				}
			}

			tempDate = createDate(curatedUserDate);

			if (tempDate < today && element === null && assigned) {
				curatedUserDate[index]++;
				tempDate = createDate(curatedUserDate);
			}
		}
	}
	return tempDate;
};
export default calculateTime;

const createDate = (input = []) => {
	const tempDate = new Date(
		input[5],
		input[4],
		input[3],
		input[2],
		input[1],
		input[0]
	);
	return tempDate;
};
