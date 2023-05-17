/* eslint-disable no-case-declarations */
import { useCallback, useEffect, useState } from 'react';

const useTimerLink = (baseurl = '') => {
	const [data, setData] = useState({
		link: baseurl,
		params: {
			lang: 'en',
			theme: 'light',
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
			query.push(`lang=${data.params.lang}`);
		}
		if (data.params.theme && data.params.theme !== 'light') {
			query.push(`theme=${data.params.theme}`);
		}
		if (data.params.fontSize && data.params.fontSize !== '24') {
			query.push(`fontsize=${data.params.fontSize}`);
		}
		if (data.params.msg) {
			query.push(`msg=${data.params.msg}`);
		}
		for (const key in data.params.time) {
			const element = data.params.time[key];
			if (element) {
				switch (key) {
					case 'date':
						const dateTime = new Date(element);
						query.push(
							`${key}=${dateTime.getFullYear()}-${(dateTime.getMonth() + 1)
								.toString()
								.padStart(2, '0')}-${dateTime
								.getDate()
								.toString()
								.padStart(2, '0')}`
						);
						break;
					default:
						query.push(`${key}=${element}`);
						break;
				}
			}
		}

		const url = `${baseurl}${query.length > 0 ? `?${query.join('&')}` : ''}`;

		return url;
	}, [data.params, baseurl]);

	useEffect(() => {
		setData(old => ({ ...old, link: buildURL() }));
	}, [data.params, buildURL]);

	return [data, inputChange, inputTimeChange];
};

export default useTimerLink;
