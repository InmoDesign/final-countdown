import useCountdown from '../hooks/useCountdown';
import PrintCountdown from './PrintCountdown';

const Countdown = ({ params, date }) => {
	const timeLeft = useCountdown(date);

	return <PrintCountdown {...params} {...timeLeft} />;
};
export default Countdown;
