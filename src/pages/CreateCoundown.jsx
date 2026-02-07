import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import FormField from '../components/FormField';
import InputSelector from '../components/InputSelector';
import Tab from '../components/Tab';
import useClipboard from '../hooks/useClipboard';
import useTimerLink from '../hooks/useTimerLink';

const CreateCountdown = () => {
	const { t } = useTranslation();
	const [{ link, params }, inputChange, inputTimeChange] = useTimerLink(
		`${import.meta.env.VITE_URL}/view/`
	);

	const {
		lang,
		theme,
		fontSize,
		msg,
		time: { date, time, second, minute, hour, day, month, year }
	} = params;

	const { copied, copy } = useClipboard();

	const [debouncedLink, setDebouncedLink] = useState(link);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedLink(link), 500);
		return () => clearTimeout(timer);
	}, [link]);

	return (
		<div className='max-w-7xl w-full mx-auto my-16 px-4'>
			<div className='flex items-start gap-12 flex-row-inverse max-md:flex-col-reverse'>
				<div className='w-full max-w-sm mx-auto overflow-hidden bg-white border rounded-md max-md:max-w-full'>
					<h2 className='p-6 text-2xl border-b text-emerald-500'>
						{t('createTimer')}
					</h2>
					<form className='grid gap-3 mx-6 my-6'>
						<Tab
							pages={[
								{
									id: 'time',
									title: t('time'),
									content: (
										<>
											<FormField
												label={t('date')}
												name='date'
												variant='date'
												value={date}
												onChange={inputTimeChange}
											/>
											<FormField
												label={t('time')}
												name='time'
												variant='time'
												value={time}
												onChange={inputTimeChange}
											/>
										</>
									)
								},
								{
									id: 'advanced',
									title: t('advanced'),
									content: (
										<>
											<p className='mb-4'>
												{t('advancedHelp')}
											</p>
											<FormField
												label='Second'
												name='second'
												type='number'
												min='0'
												max='59'
												value={second}
												onChange={inputTimeChange}
											/>
											<FormField
												label='Minute'
												name='minute'
												type='number'
												min='0'
												max='59'
												value={minute}
												onChange={inputTimeChange}
											/>
											<FormField
												label='Hour'
												name='hour'
												type='number'
												min='0'
												max='23'
												value={hour}
												onChange={inputTimeChange}
											/>
											<FormField
												label='Day'
												name='day'
												type='number'
												min='1'
												max='31'
												value={day}
												onChange={inputTimeChange}
											/>
											<FormField
												label='Month'
												name='month'
												type='number'
												min='1'
												max='12'
												value={month}
												onChange={inputTimeChange}
											/>
											<FormField
												label='Year'
												name='year'
												type='number'
												min='1970'
												value={year}
												onChange={inputTimeChange}
											/>
										</>
									)
								},
								{
									id: 'customization',
									title: t('customization'),
									content: (
										<>
											<InputSelector
												label={t('language')}
												name='lang'
												onChange={inputChange}
												value={lang}
												options={[
													{ label: 'English', value: 'en' },
													{ label: 'Español', value: 'es' }
												]}
											/>
											<InputSelector
												label={t('theme')}
												name='theme'
												value={theme}
												onChange={inputChange}
												options={[
													{ label: t('light'), value: 'light' },
													{ label: t('dark'), value: 'dark' }
												]}
											/>
											<FormField
												label={t('fontSize')}
												name='fontSize'
												type='number'
												subfix='px'
												min='8'
												max='128'
												value={fontSize}
												onChange={inputChange}
											/>
											<FormField
												label={t('finalMessage')}
												name='msg'
												variant='textarea'
												value={msg}
												onChange={inputChange}
											/>
										</>
									)
								}
							]}
						/>
					</form>
				</div>
				<div className='flex-1 w-full md:w-auto'>
					<div className='relative p-5 overflow-hidden font-mono text-sm text-gray-200 bg-gray-800 rounded-md pr-14 mb-8'>
						<span>{link}</span>
						<span className={copied ? 'px-1 text-emerald-400' : 'hidden'}>
							{t('copied')}
						</span>
						<button
							type='button'
							className='absolute top-0 bottom-0 right-0 px-3 text-white bg-emerald-500'
							onClick={() => copy(link)}
							aria-label={t('copyLink')}
						>
							<ClipboardIcon className='w-6 h-6' />
						</button>
					</div>
					<div className='flex flex-col flex-1 p-2 bg-gray-800 aspect-video rounded-md'>
						<div className='flex h-4 gap-2 pb-2'>
							<span className='h-full rounded-full bg-[#ff3b30] aspect-square'></span>
							<span className='h-full rounded-full bg-[#ffcc00] aspect-square'></span>
							<span className='h-full rounded-full bg-[#4cd964] aspect-square'></span>
						</div>
						<iframe className='flex-1 w-full' src={debouncedLink}></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCountdown;
