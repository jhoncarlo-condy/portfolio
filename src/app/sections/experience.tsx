import { Timeline } from '@/components/ui/timeline';
import React, { memo } from 'react';
import experience from '@/data/experience.json';

interface ExperienceItem {
	title: string;
	date: string;
	image: string;
	imageAlt: string;
	contentList: string[];
}

// Derived once at module load — data is static JSON, no need for useMemo
const experienceData = experience.map((item: ExperienceItem) => ({
	title: item.title,
	date: item.date,
	content: (
		<div className='space-y-2 text-neutral-700 dark:text-neutral-300'>
			<ul className='list-disc pl-5 space-y-1' role='list'>
				{item.contentList.map((point, index) => (
					<li key={`${item.title}-${index}`} className='leading-relaxed'>
						{point}
					</li>
				))}
			</ul>
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
