import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import React from 'react';

const Introduction = () => {
	const words = [
		{
			text: 'Full Stack Developer',
		},
		{
			text: 'with expertise in',
		},
		{
			text: 'Backend Development.',
			className: 'text-blue-500 dark:text-blue-500',
		},
	];
	return (
		<div className='flex flex-col items-center justify-center h-[rem] w-1'>
			<TypewriterEffectSmooth words={words} />
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4'>
				<button className='w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm'>
					Join now
				</button>
				<button className='w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm'>
					Signup
				</button>
			</div>
		</div>
	);
};

export default Introduction;
