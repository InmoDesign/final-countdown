export const getTime = time => {
	if (!time) return {};

	const positions = time.split(':');
	const hour = positions.length > 0 ? positions[0] : undefined;
	const minute = positions.length > 1 ? positions[1] : undefined;
	const second = positions.length > 2 ? positions[2] : undefined;

	return {
		hour,
		minute,
		second
	};
};
export const getDate = date => {
	if (!date) return {};

	const positions = date.split('-');
	const year = positions.length > 0 ? positions[0] : undefined;
	const month = positions.length > 1 ? positions[1] : undefined;
	const day = positions.length > 2 ? positions[2] : undefined;

	return {
		year,
		month,
		day
	};
};
