'use client';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';
import React, { memo, useMemo } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/useScroll';

interface SocialLink {
	href: string;
	alt: string;
	src: string;
}

const Introduction = memo(() => {
	const { isVisible } = useScroll({ threshold: 100 }); // Memoize social links to prevent unnecessary re-renders
	const socialLinks: SocialLink[] = useMemo(
		() => [
			{
				href: 'https://github.com/jhoncarlo-condy',
				alt: 'GitHub Profile',
				src: '/github.svg',
			},
			{
				href: 'https://www.linkedin.com/in/jhon-carlo-condy/',
				alt: 'LinkedIn Profile',
				src: '/linkedin.svg',
			},
			{
				href: 'mailto:jhoncarlo.condy@example.com',
				alt: 'Email Contact',
				src: '/mail.svg',
			},
		],
		[]
	);

	const typewriterWords = useMemo(
		() => [
			'Backend Developer',
			'Software Developer',
			'Web Developer',
			'Full Stack Developer',
		],
		[]
	);
	return (
		<div className='flex flex-col items-center justify-center w-full px-4 py-10 sm:w-1'>
			<div className='flex flex-col sm:flex-row sm:space-x-1 my-6'>
				<div className='overflow-hidden pb-2'>
					<h1 className='text-[2.5rem] sm:text-[3.3rem] md:text-[4.2rem] font-black leading-[3rem] sm:leading-[4rem] text-[#111] dark:text-[#f3f3f3] sm:whitespace-nowrap items-center justify-center text-center'>
						<span className='text-blue-600 dark:text-blue-400 font-bold'>
							<Typewriter
								words={typewriterWords}
								loop={0}
								cursor
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</h1>
				</div>
			</div>

			<div className='flex flex-row space-x-4'>
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.href}
						target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
						rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
						className='relative h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
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
					</a>
				))}
			</div>

			<div className='flex flex-col md:flex-row md:space-y-0 space-x-0 md:space-x-4 mt-8'>
				<Button
					asChild
					size='lg'
					className='animate-subtle-pulse bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200'
				>
					<a
						href='/JC_CONDY_RESUME.pdf'
						download
						className='flex items-center gap-2'
						aria-label='Download resume PDF'
					>
						<FileText className='h-4 w-4' aria-hidden='true' />
						<span>Resume</span>
					</a>
				</Button>
			</div>

			<div
				className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				aria-hidden={!isVisible}
			>
				<a
					href='#skills'
					className='flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded'
					aria-label='Scroll down to skills section'
				>
					<span className='text-sm font-medium mb-2'>Scroll Down</span>
					<ArrowDown className='h-5 w-5 animate-bounce' aria-hidden='true' />
				</a>
			</div>
		</div>
	);
});

Introduction.displayName = 'Introduction';

export default Introduction;
