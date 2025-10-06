'use client';
import { useEffect, useState, useCallback } from 'react';

interface UseScrollOptions {
	threshold?: number;
	debounceMs?: number;
}

export const useScroll = ({
	threshold = 0,
	debounceMs = 100,
}: UseScrollOptions = {}) => {
	const [scrollY, setScrollY] = useState(0);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	const handleScroll = useCallback(() => {
		const currentScrollY = window.pageYOffset;
		const scrollingDown = currentScrollY > scrollY;

		setScrollY(currentScrollY);
		setIsScrollingDown(scrollingDown);

		// Show/hide based on scroll direction and position
		if (currentScrollY <= threshold) {
			setIsVisible(true);
		} else {
			setIsVisible(!scrollingDown);
		}
	}, [scrollY, threshold]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const debouncedHandleScroll = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(handleScroll, debounceMs);
		};

		window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', debouncedHandleScroll);
			clearTimeout(timeoutId);
		};
	}, [handleScroll, debounceMs]);

	return {
		scrollY,
		isScrollingDown,
		isVisible,
	};
};

export default useScroll;
