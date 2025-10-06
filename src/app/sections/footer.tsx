import Image from 'next/image';
import React, { memo, useMemo } from 'react';

const Footer = memo(() => {
	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<footer className='w-full bg-gray-100 dark:bg-gray-900 py-8 mt-16 border-t border-gray-200 dark:border-gray-800'>
			<div className='max-w-screen-xl mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400'>
					<div className='flex items-center gap-2'>
						<div className='relative w-6 h-6'>
							<Image
								src='/final-logo.png'
								alt='Jhon Carlo Condy Logo'
								fill
								className='object-contain'
								priority
							/>
						</div>
						<span className='font-medium text-gray-900 dark:text-gray-100'>
							Jhon Carlo Condy
						</span>
					</div>

					<div className='text-center md:text-right'>
						<p>&copy; {currentYear} Jhon Carlo Condy. All rights reserved.</p>
						<p className='text-xs mt-1 text-gray-500 dark:text-gray-500'>
							Built with Next.js, TypeScript & Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
});

Footer.displayName = 'Footer';

export default Footer;
