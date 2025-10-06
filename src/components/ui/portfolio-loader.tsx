'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface PortfolioLoaderProps {
	onLoadingComplete?: () => void;
	children: React.ReactNode;
}

const loadingSteps = [
	'Initializing portfolio...',
	'Loading components...',
	'Preparing experience...',
	'Finalizing setup...',
];

// Pre-generate particle positions to ensure consistency
const generateParticleData = () => {
	return [...Array(20)].map((_, i) => ({
		id: i,
		x: (i * 47 + 23) % 1920, // Deterministic position
		y: (i * 73 + 37) % 1080, // Deterministic position
		duration: (i % 3) + 2, // Deterministic duration (2-4 seconds)
		delay: (i % 4) * 0.5, // Deterministic delay (0-1.5 seconds)
	}));
};

const particleData = generateParticleData();

const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({
	onLoadingComplete,
	children,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadingText, setLoadingText] = useState('');
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);

		let currentStep = 0;

		const typeText = (text: string, callback?: () => void) => {
			let currentChar = 0;
			setLoadingText('');

			const typeInterval = setInterval(() => {
				if (currentChar < text.length) {
					setLoadingText(text.substring(0, currentChar + 1));
					currentChar++;
				} else {
					clearInterval(typeInterval);
					if (callback) {
						setTimeout(callback, 500);
					}
				}
			}, 50);
		};

		const nextStep = () => {
			if (currentStep < loadingSteps.length) {
				typeText(loadingSteps[currentStep], () => {
					currentStep++;
					if (currentStep < loadingSteps.length) {
						setTimeout(nextStep, 800);
					} else {
						// Final step - complete loading
						setTimeout(() => {
							setIsLoading(false);
							onLoadingComplete?.();
						}, 1000);
					}
				});
			}
		};
		// Start the loading sequence
		setTimeout(nextStep, 500);
	}, [onLoadingComplete]);

	return (
		<>
			<AnimatePresence mode='wait'>
				{isLoading && (
					<motion.div
						key='loader'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='fixed inset-0 z-[9999] flex items-center justify-center bg-background'
					>
						{/* Background gradient */}
						<div className='absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90' />

						{/* Animated particles background - only render on client */}
						{isClient && (
							<div className='absolute inset-0 overflow-hidden'>
								{particleData.map((particle) => (
									<motion.div
										key={particle.id}
										className='absolute h-1 w-1 bg-primary/30 rounded-full'
										initial={{
											x: particle.x,
											y: particle.y,
											opacity: 0,
										}}
										animate={{
											y: [null, particle.y - 100],
											opacity: [0, 1, 0],
										}}
										transition={{
											duration: particle.duration,
											repeat: Infinity,
											delay: particle.delay,
										}}
									/>
								))}
							</div>
						)}

						{/* Main loading content */}
						<div className='relative z-10 flex flex-col items-center gap-8'>
							{/* Logo with pulse animation */}
							<motion.div
								initial={{ scale: 0.5, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								className='relative'
							>
								<motion.div
									animate={{
										boxShadow: [
											'0 0 0 0 rgb(var(--primary) / 0.4)',
											'0 0 0 20px rgb(var(--primary) / 0)',
											'0 0 0 0 rgb(var(--primary) / 0)',
										],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									className='rounded-full'
								>
									<div className='relative h-20 w-20 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center overflow-hidden'>
										<Image
											src='/final-logo.png'
											alt='Jhon Carlo Condy Logo'
											fill
											className='object-contain p-2'
											priority
										/>
									</div>
								</motion.div>
							</motion.div>

							{/* Loading text with typewriter effect */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className='text-center'
							>
								<p className='text-lg font-medium text-foreground min-h-[1.5rem]'>
									{loadingText}
									<motion.span
										animate={{ opacity: [0, 1, 0] }}
										transition={{ duration: 1, repeat: Infinity }}
										className='inline-block w-0.5 h-5 bg-primary ml-1'
									/>
								</p>
							</motion.div>

							{/* Progress bar */}
							<motion.div
								initial={{ width: 0, opacity: 0 }}
								animate={{ width: '200px', opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.5 }}
								className='relative h-1 bg-muted rounded-full overflow-hidden'
							>
								<motion.div
									initial={{ x: '-100%' }}
									animate={{ x: '100%' }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									className='absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent'
								/>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence mode='wait'>
				{!isLoading && (
					<motion.div
						key='content'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default PortfolioLoader;
