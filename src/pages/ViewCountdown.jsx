import { useSearchParams } from 'react-router-dom';
import Countdown from '../components/Countdown';

const ViewCountdown = () => {
	const [searchParams] = useSearchParams();

	const year = searchParams.get('year');
	const month = searchParams.get('month') && searchParams.get('month') - 1;
	const day = searchParams.get('day');
	const hour = searchParams.get('hour');
	const minute = searchParams.get('minute');
	const second = searchParams.get('second');

	const date = new Date(year, month, day, hour, minute, second, 0);

	console.log('date', date);
	console.log('month', month);
	console.log('day', day);

	return <main>{<Countdown date={date} />}</main>;
};

export default ViewCountdown;
