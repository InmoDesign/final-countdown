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
		<div className='md:max-w-lg mx-auto my-16 bg-white border md:rounded-md md:shadow-md overflow-hidden'>
			<h2 className='text-2xl border-b text-emerald-500 p-6'>
				Create your countdown
			</h2>
			<iframe className='w-full' src={link}></iframe>
			<div className='relative p-5 my-6 mx-6 pr-14 rounded-md overflow-hidden bg-gray-800 text-gray-200 text-sm font-mono'>
				<span>{link}</span>
				<span className='hidden px-1 text-emerald-400' ref={copyAlert}>
					Copied!
				</span>
				<button
					type='button'
					className='absolute top-0 right-0 bottom-0 px-3 bg-emerald-500 text-white'
					onClick={copy}
				>
					<ClipboardIcon className='h-6 w-6' />
				</button>
			</div>
			<form className='my-6 mx-6 grid gap-3'>
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
				<h3 className='text-gray-500 my-4'>Settings</h3>
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
	);
};

export default CreateCountdown;
