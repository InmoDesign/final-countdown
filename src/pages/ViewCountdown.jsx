import { useSearchParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import calculateTime from '../helpers/calculateTime';

const ViewCountdown = () => {
	const [searchParams] = useSearchParams();

	const userDate = {
		year: searchParams.has('year') ? parseInt(searchParams.get('year')) : null,
		month: searchParams.has('month')
			? parseInt(searchParams.get('month'))
			: null,
		day: searchParams.has('day') ? parseInt(searchParams.get('day')) : null,
		hour: searchParams.has('hour') ? parseInt(searchParams.get('hour')) : null,
		minute: searchParams.has('minute')
			? parseInt(searchParams.get('minute'))
			: null,
		second: searchParams.has('second')
			? parseInt(searchParams.get('second'))
			: null
	};

	const date = calculateTime(userDate);

	console.log('date', date);
	console.log('userdate', userDate);
	return <main>{<Countdown date={date} />}</main>;
};

export default ViewCountdown;
