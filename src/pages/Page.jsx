import { Outlet } from 'react-router-dom';

const Page = () => {
	return (
		<>
			<div className='flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>

				<Outlet />
			</div>
		</>
	);
};
export default Page;
