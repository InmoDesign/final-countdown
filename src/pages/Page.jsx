import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Page = () => {
	return (
		<>
			<div className='flex flex-col justify-between min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};
export default Page;
