import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/locales/en.json';
import es from './src/locales/es.json';

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	supportedLngs: ['en', 'es'],
	returnEmptyString: false,
	resources: {
		en: {
			translation: en
		},
		es: {
			translation: es
		}
	},
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
