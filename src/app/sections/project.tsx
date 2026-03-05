'use client';
import React, { useState, useCallback, useMemo, memo } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ui/project-card';
import projects from '@/data/projects.json';

const INITIAL_PROJECTS_COUNT = 3;

const Project = memo(() => {
	const [showAll, setShowAll] = useState(false);

	const toggleShowAll = useCallback(() => {
		setShowAll((prev) => !prev);
	}, []);

	const displayedProjects = useMemo(
		() => (showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT)),
		[showAll]
	);

	const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

	return (
		<section id='projects' className='mt-20 scroll-mt-20'>
			<header className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Recent Projects</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					Most of my projects are in the prototyping stage, deployed locally for
					development and testing. Click to explore the repositories.
				</p>
			</header>

			<div className='space-y-6'>
				<div className='grid gap-6' id='projects-list'>
					{displayedProjects.map((project, index) => (
						<ProjectCard key={`${project.title}-${index}`} project={project} />
					))}
				</div>
				{hasMoreProjects && (
					<div className='flex justify-center mt-8'>
						<Button
							onClick={toggleShowAll}
							variant='outline'
							className='px-6 py-2 transition-all duration-200'
							aria-expanded={showAll}
							aria-controls='projects-list'
						>
							{showAll
								? 'Show Less'
								: `See More (${projects.length - INITIAL_PROJECTS_COUNT} more)`}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
});

Project.displayName = 'Project';

export default Project;
