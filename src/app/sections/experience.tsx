import { Timeline } from '@/components/ui/timeline';
import React from 'react';

const Experience = () => {
	return (
		<section id='experience' className='mt-20'>
			<div className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Experience</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					A comprehensive overview of my technical abilities and soft skills
					that enable me to deliver excellent results.
				</p>
			</div>
			<div className='relative w-full overflow-clip'>
				<Timeline
					data={[
						{
							title: 'ADEC Innovations',
							date: 'November 2024 - March 2025',
							image: 'nextjs.svg',
							imageAlt: 'ADEC Innovations office',
							content: (
								<div className='space-y-2 text-neutral-700 dark:text-neutral-300'>
									<p>
										Led frontend development for sustainability analytics
										platform.
									</p>
									<ul className='list-disc pl-5 space-y-1'>
										<li>Implemented React with TypeScript and Next.js</li>
										<li>
											Improved performance by 40% through code optimization
										</li>
									</ul>
								</div>
							),
						},
						{
							title: 'Grapelabs Technologies Corp.',
							date: 'March 2022 - August 2024',
							image: 'github.svg',
							imageAlt: 'Grapelabs development team',
							content: (
								<div className='space-y-2 text-neutral-700 dark:text-neutral-300'>
									<p>
										Full-stack developer working on AI-powered analytics tools.
									</p>
									<ul className='list-disc pl-5 space-y-1'>
										<li>Built REST APIs with Node.js and Express</li>
										<li>Designed database architecture for high scalability</li>
									</ul>
								</div>
							),
						},
						{
							title: 'Grapelabs Technologies Corp.',
							date: 'March 2022 - August 2024',
							image: 'aws.svg',
							imageAlt: 'Grapelabs development team',
							content: (
								<div className='space-y-2 text-neutral-700 dark:text-neutral-300'>
									<p>
										Full-stack developer working on AI-powered analytics tools.
									</p>
									<ul className='list-disc pl-5 space-y-1'>
										<li>Built REST APIs with Node.js and Express</li>
										<li>Designed database architecture for high scalability</li>
									</ul>
								</div>
							),
						},
						// ... more entries
					]}
				/>
			</div>
		</section>
	);
};

export default Experience;
