'use client';
import { ArrowDown, FileText, MessageCircleMore } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
const Introduction = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const isScrollingDown = currentScrollPos > prevScrollPos;

			if (currentScrollPos === 0 || !isScrollingDown) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	return (
		<div className='flex flex-col items-center justify-center w-full px-4 py-10 sm:w-1'>
			<div className='flex flex-col sm:flex-row sm:space-x-1 my-6'>
				<div className='overflow-hidden pb-2'>
					<div className='text-[2.5rem] sm:text-[3.3rem] md:text-[4.2rem] font-black leading-[3rem] sm:leading-[4rem] text-[#111] dark:text-[#f3f3f3] sm:whitespace-nowrap items-center justify-center text-center'>
						<span style={{ color: 'blue', fontWeight: 'bold' }}>
							<Typewriter
								words={[
									'Backend Developer',
									'Software Developer',
									'Web Developer',
									'Full Stack Developer',
								]}
								loop={0}
								cursor
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-20'>
				<button className='flex flex-row items-center justify-center w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-lg hover:cursor-pointer hover:scale-[1.05] transition-transform'>
					<FileText />
					<span>Resume</span>
				</button>
				<button className='flex flex-row items-center justify-center w-40 h-10 rounded-xl bg-white border dark:border-white border-black text-black text-lg hover:cursor-pointer hover:scale-[1.05] transition-transform'>
					<MessageCircleMore />
					<span>Contact</span>
				</button>
			</div>

			<div
				id='scroll-arrow'
				className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
			>
				<a
					href='#about'
					className='flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors'
				>
					<span className='text-sm font-medium mb-2'>Scroll Down</span>
					<ArrowDown className='h-5 w-5 animate-bounce' />
				</a>
			</div>
		</div>
	);
};

export default Introduction;
