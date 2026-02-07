import DOMPurify from 'dompurify';

const sanitize = text => {
	return DOMPurify.sanitize(`<p>${text}</p>`, {
		ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'br', 'p'],
		ALLOWED_ATTR: []
	});
};

export default sanitize;
