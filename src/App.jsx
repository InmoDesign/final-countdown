import { useEffect, useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import i18n from '../i18n';
import CreateCountdown from './pages/CreateCoundown';
import Page from './pages/Page';
import ViewCountdown from './pages/ViewCountdown';

const App = () => {
	const app = useRef();

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		if (query.has('lang')) {
			i18n.changeLanguage(query.get('lang'));
		} else {
			i18n.changeLanguage('en');
		}

		if (query.has('theme')) {
			app.current.classList.add(query.get('theme'));
		}
	}, []);

	return (
		<div className='app' ref={app}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Page />}>
							<Route path='' element={<CreateCountdown />} />
						</Route>
						<Route path='/view' element={<ViewCountdown />} />
					</Routes>
				</BrowserRouter>
			</I18nextProvider>
		</div>
	);
};
export default App;
