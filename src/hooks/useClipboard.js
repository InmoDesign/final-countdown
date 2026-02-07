import { useState, useCallback, useRef, useEffect } from 'react';

const useClipboard = (duration = 2000) => {
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef(null);

	const copy = useCallback(
		async text => {
			try {
				await navigator.clipboard.writeText(text);
				setCopied(true);
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(() => setCopied(false), duration);
				return true;
			} catch (error) {
				console.error('Failed to copy:', error);
				return false;
			}
		},
		[duration]
	);

	useEffect(() => () => clearTimeout(timeoutRef.current), []);

	return { copied, copy };
};

export default useClipboard;
