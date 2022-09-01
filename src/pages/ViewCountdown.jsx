import { useSearchParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import calculateTime from '../helpers/calculateTime';
import themes from '../themes';

const ViewCountdown = () => {
	const [searchParams] = useSearchParams();

	const userDate = {
		year: searchParams.has('year') ? parseInt(searchParams.get('year')) : null,
		month: searchParams.has('month')
			? parseInt(searchParams.get('month')) - 1
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

	const params = {
		fontSize: searchParams.has('fontsize')
			? parseInt(searchParams.get('fontsize'))
			: null,
		theme: themes[searchParams.get('theme') || 'light'],
		msg: searchParams.get('msg')
	};

	const date = calculateTime(userDate);

	return <main>{<Countdown params={params} date={date} />}</main>;
};

export default ViewCountdown;
