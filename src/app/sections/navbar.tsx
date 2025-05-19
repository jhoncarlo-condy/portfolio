import Image from 'next/image';
import React from 'react';

const NavBar = () => {
	return (
		<div className='flex justify-center mt-6'>
			<div className='items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
				<div className='animate-fade-down animate-once animate-ease-in-out'>
					<div className='relative h-10 w-10'>
						<Image
							src='/final-logo.png'
							alt='logo'
							fill
							className='object-contain hover:cursor-pointer'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
