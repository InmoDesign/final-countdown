import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCountdown from './pages/CreateCoundown';
import ViewCountdown from './pages/ViewCountdown';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ViewCountdown />} />
				<Route path='create' element={<CreateCountdown />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
