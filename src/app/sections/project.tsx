'use client';
import React, { useState, useCallback, useMemo, memo } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { ExternalLink } from 'lucide-react';
import { BorderTrail } from '../../../components/motion-primitives/border-trail';
import projects from '@/data/projects.json';

interface ProjectData {
	title: string;
	description: string;
	link?: string;
	stacks: string[];
}

const INITIAL_PROJECTS_COUNT = 3;

const Project = memo(() => {
	const [showAll, setShowAll] = useState(false);

	const toggleShowAll = useCallback(() => {
		setShowAll((prev) => !prev);
	}, []);

	const displayedProjects = useMemo(() => {
		return showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
	}, [showAll]);

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
				{' '}
				<div className='grid gap-6'>
					{displayedProjects.map((project: ProjectData, index) => {
						const cardContent = (
							<>
								<BorderTrail
									style={{
										boxShadow:
											'0 0 60px 30px rgba(138, 43, 226, 0.5), 0 0 100px 60px rgba(75, 0, 130, 0.5), 0 0 140px 90px rgba(47, 0, 82, 0.3)',
									}}
									size={100}
								/>
								<CardHeader>
									<CardTitle>
										<div className='flex flex-row justify-between items-center'>
											<Label className='text-base font-semibold'>
												{project.title}
											</Label>
											{project.link && (
												<div className='place-items-end'>
													<ExternalLink
														className='hover:cursor-pointer hover:scale-110 transition-transform'
														size={20}
														aria-hidden='true'
													/>
												</div>
											)}
										</div>
									</CardTitle>
									<CardDescription className='text-sm leading-relaxed'>
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className='py-2' />
								<CardFooter>
									<div className='flex flex-wrap gap-3'>
										{project.stacks.map((stack, idx) => (
											<div
												key={`${stack}-${idx}`}
												className='flex flex-row items-center gap-2 p-1.5 rounded-md bg-muted/50'
											>
												<div className='relative w-[18px] h-[18px]'>
													<Image
														src={`/${stack}.svg`}
														alt={`${stack} logo`}
														width={18}
														height={18}
														className='object-contain'
														loading='lazy'
													/>
												</div>
												<p className='text-[11px] sm:text-xs capitalize font-medium text-muted-foreground'>
													{stack}
												</p>
											</div>
										))}
									</div>
								</CardFooter>
							</>
						);

						if (project.link) {
							return (
								<a
									key={`${project.title}-${index}`}
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md'
									aria-label={`Open ${project.title} project`}
								>
									<Card className='w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mt-8 relative rounded-md px-5 py-4 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg cursor-pointer'>
										{cardContent}
									</Card>
								</a>
							);
						}

						return (
							<Card
								key={`${project.title}-${index}`}
								className='w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mt-8 relative rounded-md px-5 py-4'
							>
								{cardContent}
							</Card>
						);
					})}
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
