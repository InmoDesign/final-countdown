import { useTranslation } from 'react-i18next';
import sanitize from '../helpers/sanitize';
import themes from '../themes';

const PrintCountdown = ({
	theme = themes.light,
	fontSize,
	msg,
	days,
	hours,
	minutes,
	seconds,
	valid
}) => {
	const { t } = useTranslation();

	return (
		<div
			className='h-screen p-6 flex justify-center items-center'
			style={{
				fontSize: `${fontSize || 24}px`,
				backgroundColor: theme.bg,
				color: theme.text
			}}
		>
			<div>
				{(valid && (
					<>
						{days > 0 && (
							<span>{`${days} ${t('day', {
								count: days
							})}`}</span>
						)}{' '}
						{hours > 0 && (
							<span>{`${hours} ${t('hour', { count: hours })}`}</span>
						)}{' '}
						{minutes > 0 && (
							<span>{`${minutes} ${t('minute', { count: minutes })}`}</span>
						)}{' '}
						<span>{`${seconds} ${t('second', { count: seconds })}`}</span>
					</>
				)) || (
					<span className=''>
						{(msg && sanitize(msg)) || t('Time is done')}
					</span>
				)}
			</div>
		</div>
	);
};

export default PrintCountdown;
