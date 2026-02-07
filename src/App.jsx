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
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400'>
			<h1 className='text-6xl font-bold mb-4 text-white'>404</h1>
			<p className='text-xl mb-6'>{t('pageNotFound')}</p>
			<Link
				to='/'
				className='px-8 py-4 font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20'
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
