import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Page = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
export default Page;
