import { useCallback, useEffect, useState } from 'react';

const useTimerLink = (baseurl = '') => {
	const [data, setData] = useState({
		link: baseurl,
		params: {
			lang: 'en',
			theme: 'dark',
			fontSize: '24',
			msg: '',
			time: {
				second: '',
				minute: '',
				hour: '',
				day: '',
				month: '',
				year: ''
			}
		}
	});

	const inputChange = e => {
		setData(old => ({
			...old,
			params: { ...old.params, [e.target.name]: e.target.value }
		}));
	};

	const inputTimeChange = e => {
		setData(old => ({
			...old,
			params: {
				...old.params,
				time: { ...old.params.time, [e.target.name]: e.target.value }
			}
		}));
	};

	const buildURL = useCallback(() => {
		const query = [];
		if (data.params.lang && data.params.lang !== 'en') {
			query.push(`lang=${encodeURIComponent(data.params.lang)}`);
		}
		if (data.params.theme && data.params.theme !== 'dark') {
			query.push(`theme=${encodeURIComponent(data.params.theme)}`);
		}
		if (data.params.fontSize && data.params.fontSize !== '24') {
			query.push(`fontsize=${encodeURIComponent(data.params.fontSize)}`);
		}
		if (data.params.msg) {
			query.push(`msg=${encodeURIComponent(data.params.msg)}`);
		}
		for (const key in data.params.time) {
			const element = data.params.time[key];
			if (element) {
				if (key === 'date') {
					const dateTime = new Date(element);
					query.push(
						`${key}=${dateTime.getFullYear()}-${(dateTime.getMonth() + 1)
							.toString()
							.padStart(2, '0')}-${dateTime
							.getDate()
							.toString()
							.padStart(2, '0')}`
					);
				} else {
					query.push(`${key}=${encodeURIComponent(element)}`);
				}
			}
		}

		const url = `${baseurl}${query.length > 0 ? `?${query.join('&')}` : ''}`;

		return url;
	}, [data.params, baseurl]);

	useEffect(() => {
		setData(old => ({ ...old, link: buildURL() }));
	}, [buildURL]);

	return [data, inputChange, inputTimeChange];
};

export default useTimerLink;
