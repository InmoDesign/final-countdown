const PrintCountdown = ({ days, hours, minutes, seconds, valid }) => {
	if (!valid) {
		return <div>TIME IS DONE!</div>;
	}
	return (
		<div>
			{days > 0 && <span>{days} dias - </span>} <span>{hours} horas - </span>
			<span>{minutes} minutos - </span> <span>{seconds} segundos </span>
		</div>
	);
};

export default PrintCountdown;
