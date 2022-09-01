import DOMPurify from 'dompurify';

const sanitize = text => {
	return DOMPurify.sanitize(`<p>${text}</p>`, {
		USE_PROFILES: { html: false }
	});
};

export default sanitize;
