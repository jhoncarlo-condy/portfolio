'use client';
import React, { memo, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillsGrid from '@/components/ui/skills-grid';
import { skillType } from '@/types/skills';
import frontendSkills from '@/data/skills/frontendSkills.json';
import backendSkills from '@/data/skills/backendSkills.json';
import otherSkills from '@/data/skills/otherSkills.json';

interface SkillCategory {
	value: string;
	label: string;
	skills: skillType[];
	description?: string;
}

const Skills = memo(() => {
	// Memoize skill categories to prevent unnecessary re-renders
	const skillCategories: SkillCategory[] = useMemo(
		() => [
			{
				value: 'frontend',
				label: 'Frontend',
				skills: frontendSkills as skillType[],
				description: 'Frontend technologies and frameworks',
			},
			{
				value: 'backend',
				label: 'Backend',
				skills: backendSkills as skillType[],
				description: 'Backend technologies and databases',
			},
			{
				value: 'other',
				label: 'Other',
				skills: otherSkills as skillType[],
				description: 'Tools, DevOps, and other technologies',
			},
		],
		[]
	);

	return (
		<section id='skills' className='scroll-mt-20'>
			<header className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Skills & Expertise</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					A comprehensive overview of my technical abilities and tools that
					enable me to deliver excellent results.
				</p>
			</header>

			<div className='mt-8 flex justify-center sm:justify-start xl:ml-30'>
				<Tabs defaultValue='frontend' className='w-full max-w-md sm:max-w-2xl'>
					<TabsList
						className='flex flex-wrap justify-center sm:justify-start gap-2'
						role='tablist'
						aria-label='Skills categories'
					>
						{skillCategories.map((category) => (
							<TabsTrigger
								key={category.value}
								value={category.value}
								className='transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
								aria-controls={`${category.value}-panel`}
								title={category.description}
							>
								{category.label}
							</TabsTrigger>
						))}
					</TabsList>

					{skillCategories.map((category) => (
						<TabsContent
							key={category.value}
							value={category.value}
							id={`${category.value}-panel`}
							role='tabpanel'
							aria-labelledby={`${category.value}-tab`}
							className='mt-6'
						>
							<SkillsGrid skills={category.skills} />
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
});

Skills.displayName = 'Skills';

export default Skills;
