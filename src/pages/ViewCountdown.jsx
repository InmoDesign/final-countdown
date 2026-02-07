import { useSearchParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import calculateTime from '../helpers/calculateTime';
import { getDate, getTime } from '../helpers/getTime';
import themes from '../themes';

const ViewCountdown = () => {
	const [searchParams] = useSearchParams();

	const getUserDate = () => {
		const time = getTime(searchParams.get('time'));
		const date = getDate(searchParams.get('date'));

		const response = {
			year: date.year
				? parseInt(date.year)
				: searchParams.has('year')
				? parseInt(searchParams.get('year'))
				: null,
			month: date.month
				? parseInt(date.month) - 1
				: searchParams.has('month')
				? parseInt(searchParams.get('month')) - 1
				: null,
			day: date.day
				? parseInt(date.day)
				: searchParams.has('day')
				? parseInt(searchParams.get('day'))
				: null,
			hour: time.hour
				? parseInt(time.hour)
				: searchParams.has('hour')
				? parseInt(searchParams.get('hour'))
				: null,
			minute: time.minute
				? parseInt(time.minute)
				: searchParams.has('minute')
				? parseInt(searchParams.get('minute'))
				: null,
			second: time.second
				? parseInt(time.second)
				: searchParams.has('second')
				? parseInt(searchParams.get('second'))
				: null
		};

		return response;
	};

	const params = {
		fontSize: searchParams.has('fontsize')
			? parseInt(searchParams.get('fontsize'))
			: null,
		theme: themes[searchParams.get('theme')] || themes.light,
		msg: searchParams.get('msg')
	};

	const date = calculateTime(getUserDate());

	return <main>{<Countdown params={params} date={date} />}</main>;
};

export default ViewCountdown;
