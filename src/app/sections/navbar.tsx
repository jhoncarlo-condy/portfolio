import Image from 'next/image';
import React, { memo } from 'react';

const NavBar = memo(() => {
	return (
		<header className='flex justify-center mt-6' id='home'>
			<nav className='items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
				<div className='animate-fade-down animate-once animate-ease-in-out'>
					<a
						href='#home'
						className='relative h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform hover:scale-105 block'
						aria-label='Scroll to top'
						title='Back to top'
					>
						<Image
							src='/final-logo.png'
							alt='Jhon Carlo Condy Logo'
							fill
							className='object-contain'
							priority
							sizes='40px'
						/>
					</a>
				</div>
			</nav>
		</header>
	);
});

NavBar.displayName = 'NavBar';

export default NavBar;
