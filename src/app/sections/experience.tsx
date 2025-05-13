import { Timeline } from '@/components/ui/timeline';
import React from 'react';
import experience from '@/data/experience.json';

const Experience = () => {
	const experienceData = experience.map((item) => ({
		title: item.title,
		date: item.date,
		image: item.image,
		imageAlt: item.imageAlt,
		content: (
			<div className='space-y-2 text-neutral-700 dark:text-neutral-300'>
				<p>{item.contentTitle}</p>
				<ul className='list-disc pl-5 space-y-1'>
					{item.contentList.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
			</div>
		),
	}));

	return (
		<section id='experience' className='mt-20'>
			<div className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Experience</h2>
			</div>
			<Timeline data={experienceData} />
		</section>
	);
};

export default Experience;
