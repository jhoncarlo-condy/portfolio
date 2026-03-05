import { Timeline } from '@/components/ui/timeline';
import React, { memo } from 'react';
import Image from 'next/image';
import experience from '@/data/experience.json';

interface TechStackItem {
	name: string;
	icon: string;
}

interface ExperienceItem {
	title: string;
	date: string;
	image: string;
	imageAlt: string;
	techStack: TechStackItem[];
	contentList: string[];
}

// Derived once at module load — data is static JSON, no need for useMemo
const experienceData = experience.map((item: ExperienceItem) => ({
	title: item.title,
	date: item.date,
	content: (
		<div className='space-y-4 text-neutral-700 dark:text-neutral-300'>
			<ul className='list-disc pl-5 space-y-1' role='list'>
				{item.contentList.map((point, index) => (
					<li key={`${item.title}-${index}`} className='leading-relaxed'>
						{point}
					</li>
				))}
			</ul>
			{item.techStack?.length > 0 && (
				<div className='pt-2'>
					<p className='text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2'>
						Tech Stack
					</p>
					<div className='flex flex-wrap gap-2'>
						{item.techStack.map((tech, techIndex) => (
							<div
								key={`${item.title}-tech-${tech.name}-${techIndex}`}
								className='flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300'
							>
								<Image
									src={`/${tech.icon}`}
									alt={tech.name}
									width={14}
									height={14}
									className='object-contain'
								/>
								{tech.name}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	),
}));

const Experience = memo(() => {
	return (
		<section id='experience' className='mt-20 scroll-mt-20'>
			<header className='space-y-2 text-center sm:text-left mb-8'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Experience</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					My professional journey and key achievements in software development.
				</p>
			</header>
			<Timeline data={experienceData} />
		</section>
	);
});

Experience.displayName = 'Experience';

export default Experience;
