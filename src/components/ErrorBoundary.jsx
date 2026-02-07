import { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			const { t } = this.props;
			return (
				<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400'>
					<h1 className='text-3xl font-bold mb-4 text-white'>{t('errorTitle')}</h1>
					<p className='mb-6 text-lg'>{t('errorMessage')}</p>
					<a
						href='/'
						className='px-8 py-4 font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20'
					>
						{t('goHome')}
					</a>
				</div>
			);
		}

		return this.props.children;
	}
}

export default withTranslation()(ErrorBoundary);
