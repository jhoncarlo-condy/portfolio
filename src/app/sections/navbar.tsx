import { Moon } from 'lucide-react';
import React from 'react';

const NavBar = () => {
	return (
		<div className='p-10'>
			<div className='mx-auto max-w-2xl px-4 py-2'>
				<div className='flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400'>
					<div className='flex items-center gap-3 animate-fade-right'>
						<div className='overflow-hidden py-2 flex'>
							<h1 className='font-mono text-4xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent cursor-pointer transition duration-200'>
								JCondy
							</h1>
						</div>
					</div>
					<div className='cursor-pointer animate-fade-down animate-once animate-ease-in-out'>
						<div className='flex items-center py-2'>
							<Moon/>
						</div>
					</div>
					<div className='cursor-pointer animate-fade-down animate-once animate-ease-in-out'>
						<div className='flex items-center py-2'>
							<span className='h-1.5 w-1.5 rounded-full bg-[#69df69] animate-heartbeat'></span>
							<p className='mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70 animate-shiny-text bg-clip-text bg-no-repeat bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex items-center justify-center px-4 py-1 text-xs'>
								Schedule a call
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
