import { useSearchParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import calculateTime from '../helpers/calculateTime';

const ViewCountdown = () => {
	const [searchParams] = useSearchParams();

	const userDate = {
		year: parseInt(searchParams.get('year')) || false,
		month: parseInt(searchParams.get('month')) || false,
		day: parseInt(searchParams.get('day')) || false,
		hour: parseInt(searchParams.get('hour')) || false,
		minute: parseInt(searchParams.get('minute')) || false,
		second: parseInt(searchParams.get('second')) || false
	};

	const date = calculateTime(userDate);

	console.log('date', date);
	console.log('userdate', userDate);
	return <main>{<Countdown date={date} />}</main>;
};

export default ViewCountdown;
