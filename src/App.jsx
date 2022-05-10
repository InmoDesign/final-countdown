import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCountdown from './pages/CreateCoundown';
import Page from './pages/Page';
import ViewCountdown from './pages/ViewCountdown';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Page />}>
					<Route path='' element={<CreateCountdown />} />
				</Route>
				<Route path='/view' element={<ViewCountdown />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
