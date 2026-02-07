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
				<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
					<h1 className='text-3xl font-bold mb-4'>{t('errorTitle')}</h1>
					<p className='mb-6 text-lg'>{t('errorMessage')}</p>
					<a
						href='/'
						className='px-4 py-2 bg-emerald-500 text-white rounded-md'
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
