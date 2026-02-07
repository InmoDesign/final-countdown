import useCountdown from '../hooks/useCountdown';
import PrintCountdown from './PrintCountdown';

const Countdown = ({ params, date }) => {
	const timeLeft = useCountdown(date);

	return (
		<div>
			<PrintCountdown {...params} {...timeLeft} />
		</div>
	);
};
export default Countdown;
