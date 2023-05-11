import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import InputArea from '../components/InputArea';
import InputField from '../components/InputField';
import InputSelector from '../components/InputSelector';
import useTimerLink from '../hooks/useTimerLink';

const CreateCountdown = () => {
	const [{ link, params }, inputChange, inputTimeChange] = useTimerLink(
		'http://localhost:3000/view/'
	);

	const {
		lang,
		theme,
		fontSize,
		msg,
		time: { second, minute, hour, day, month, year }
	} = params;

	const copyAlert = useRef();

	const copy = () => {
		navigator.clipboard.writeText(link);
		copyAlert.current.classList.remove('hidden');
		setTimeout(() => {
			copyAlert.current.classList.add('hidden');
		}, 2000);
	};

	return (
		<div className='flex items-center gap-12 mx-auto flex-row-inverse max-w-7xl'>
			<div className='mx-auto my-16 overflow-hidden bg-white border md:max-w-lg md:rounded-md md:shadow-md'>
				<h2 className='p-6 text-2xl border-b text-emerald-500'>
					Create your countdown
				</h2>

				<div className='relative p-5 mx-6 my-6 overflow-hidden font-mono text-sm text-gray-200 bg-gray-800 rounded-md pr-14'>
					<span>{link}</span>
					<span className='hidden px-1 text-emerald-400' ref={copyAlert}>
						Copied!
					</span>
					<button
						type='button'
						className='absolute top-0 bottom-0 right-0 px-3 text-white bg-emerald-500'
						onClick={copy}
					>
						<ClipboardIcon className='w-6 h-6' />
					</button>
				</div>
				<form className='grid gap-3 mx-6 my-6'>
					<InputField
						label='Second'
						name='second'
						type='number'
						min='0'
						max='59'
						value={second}
						onChange={inputTimeChange}
					/>
					<InputField
						label='Minute'
						name='minute'
						type='number'
						min='0'
						max='59'
						value={minute}
						onChange={inputTimeChange}
					/>
					<InputField
						label='Hour'
						name='hour'
						type='number'
						min='0'
						max='23'
						value={hour}
						onChange={inputTimeChange}
					/>
					<InputField
						label='Day'
						name='day'
						type='number'
						min='1'
						max='31'
						value={day}
						onChange={inputTimeChange}
					/>
					<InputField
						label='Month'
						name='month'
						type='number'
						min='1'
						max='12'
						value={month}
						onChange={inputTimeChange}
					/>
					<InputField
						label='Year'
						name='year'
						type='number'
						min='1970'
						value={year}
						onChange={inputTimeChange}
					/>
					<hr />
					<h3 className='my-4 text-gray-500'>Settings</h3>
					<InputSelector
						label='Language'
						name='lang'
						onChange={inputChange}
						value={lang}
						options={[
							{ label: 'English', value: 'en' },
							{ label: 'Español', value: 'es' }
						]}
					/>
					<InputSelector
						label='Theme'
						name='theme'
						value={theme}
						onChange={inputChange}
						options={[
							{ label: 'Light', value: 'light' },
							{ label: 'Dark', value: 'dark' }
						]}
					/>
					<InputField
						label='Font size'
						name='fontSize'
						type='number'
						subfix='px'
						min='8'
						max='128'
						value={fontSize}
						onChange={inputChange}
					/>
					<InputArea
						label='Final message'
						name='msg'
						type='text'
						value={msg}
						onChange={inputChange}
					/>
				</form>
			</div>
			<div className='flex flex-col flex-1 p-2 bg-gray-800 aspect-video'>
				<div className='flex h-4 gap-2 pb-2'>
					<span className='h-full rounded-full bg-[#ff3b30] aspect-square'></span>
					<span className='h-full rounded-full bg-[#ffcc00] aspect-square'></span>
					<span className='h-full rounded-full bg-[#4cd964] aspect-square'></span>
				</div>
				<iframe className='flex-1 w-full' src={link}></iframe>
			</div>
		</div>
	);
};

export default CreateCountdown;
