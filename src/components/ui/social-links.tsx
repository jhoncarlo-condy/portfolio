'use client';
import React, { memo, useCallback } from 'react';
import Image from 'next/image';

interface SocialLink {
	href: string;
	alt: string;
	src: string;
}

interface SocialLinksProps {
	links: SocialLink[];
}

const SocialLinks = memo(({ links }: SocialLinksProps) => {
	const handleSocialClick = useCallback((link: SocialLink) => {
		if (link.href.startsWith('mailto:')) {
			window.location.href = link.href;
		} else {
			window.open(link.href, '_blank', 'noopener,noreferrer');
		}
	}, []);

	return (
		<nav className='flex flex-row space-x-4' aria-label='Social media links'>
			{links.map((link, index) => (
				<button
					key={index}
					className='relative h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
					onClick={() => handleSocialClick(link)}
					aria-label={link.alt}
					title={link.alt}
				>
					<Image
						src={link.src}
						alt={link.alt}
						fill
						className='object-contain'
						loading='eager'
						priority
					/>
				</button>
			))}
		</nav>
	);
});

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
