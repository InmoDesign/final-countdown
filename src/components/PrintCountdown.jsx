const PrintCountdown = ({ days, hours, minutes, seconds, valid }) => {
	if (!valid) {
		return <div className='countdown'>TIME IS DONE!</div>;
	}
	return (
		<div className='countdown'>
			Quedan: {days > 0 && <span>{days} dias</span>}
			<span>{hours} horas</span>
			<span>{minutes} minutos</span>
			<span>{seconds} segundos</span>
		</div>
	);
};

export default PrintCountdown;
