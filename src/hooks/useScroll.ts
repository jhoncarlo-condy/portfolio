'use client';
import { useEffect, useRef, useState } from 'react';

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
	// Ref tracks previous position — avoids stale closure and
	// prevents the effect from re-registering the listener on every scroll
	const prevScrollY = useRef(0);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const handleScroll = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				const currentScrollY = window.scrollY;
				const scrollingDown = currentScrollY > prevScrollY.current;

				prevScrollY.current = currentScrollY;
				setScrollY(currentScrollY);
				setIsScrollingDown(scrollingDown);
				setIsVisible(currentScrollY <= threshold ? true : !scrollingDown);
			}, debounceMs);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(timeoutId);
		};
	}, [threshold, debounceMs]); // stable deps only — no stale-closure re-registration

	return { scrollY, isScrollingDown, isVisible };
};

export default useScroll;
