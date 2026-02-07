import { useState, useCallback } from 'react';

const useClipboard = (duration = 2000) => {
	const [copied, setCopied] = useState(false);

	const copy = useCallback(
		async text => {
			try {
				await navigator.clipboard.writeText(text);
				setCopied(true);
				setTimeout(() => setCopied(false), duration);
				return true;
			} catch (error) {
				console.error('Failed to copy:', error);
				return false;
			}
		},
		[duration]
	);

	return { copied, copy };
};

export default useClipboard;
