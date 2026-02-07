import { useEffect, useRef } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import i18n from '../i18n';
import ErrorBoundary from './components/ErrorBoundary';
import CreateCountdown from './pages/CreateCoundown';
import Page from './pages/Page';
import ViewCountdown from './pages/ViewCountdown';

const allowedThemes = ['light', 'dark'];

const NotFound = () => {
	const { t } = useTranslation();
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
			<h1 className='text-6xl font-bold mb-4'>404</h1>
			<p className='text-xl mb-6'>{t('pageNotFound')}</p>
			<Link
				to='/'
				className='px-4 py-2 bg-emerald-500 text-white rounded-md'
			>
				{t('goHome')}
			</Link>
		</div>
	);
};

const App = () => {
	const app = useRef();

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		if (query.has('lang')) {
			i18n.changeLanguage(query.get('lang'));
		} else {
			const browserLang = navigator.language?.split('-')[0];
			const supported = ['en', 'es'];
			i18n.changeLanguage(supported.includes(browserLang) ? browserLang : 'en');
		}

		const theme = query.get('theme');
		if (allowedThemes.includes(theme)) {
			app.current.classList.add(theme);
		}
	}, []);

	return (
		<div className='app' ref={app}>
			<I18nextProvider i18n={i18n}>
				<ErrorBoundary>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Page />}>
								<Route path='' element={<CreateCountdown />} />
							</Route>
							<Route path='/view' element={<ViewCountdown />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</ErrorBoundary>
			</I18nextProvider>
		</div>
	);
};
export default App;
