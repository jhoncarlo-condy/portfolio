'use client';
import React, { useState } from 'react';
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

const Project = () => {
	const [showAll, setShowAll] = useState(false);

	// Assuming projects is your array of projects
	const displayedProjects = showAll ? projects : projects.slice(0, 3);
	return (
		<section id='projects' className='mt-20'>
			<div className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Recent Projects</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					Most of my projects are in the prototyping stage, deployed locally for
					development and testing.
				</p>
			</div>

			<div>
				{displayedProjects.map((project, index) => (
					<Card
						key={index}
						className='
    w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mt-8 relative rounded-md px-5 py-4
    hover:scale-[1.05] transition-transform
  '
					>
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
									<Label>{project.title}</Label>
									<div className='place-items-end'>
										<ExternalLink className='hover:cursor-pointer' />
									</div>
								</div>
							</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent></CardContent>
						<CardFooter>
							<div className='flex flex-wrap gap-4'>
								{project.stacks.map((stack, idx) => (
									<div key={idx} className='flex flex-row items-center gap-2'>
										<Image
											src={stack + '.svg'}
											alt={stack}
											width={20}
											height={20}
										/>
										<p className='text-[12px] sm:text-sm capitalize'>{stack}</p>
									</div>
								))}
							</div>
						</CardFooter>
					</Card>
				))}

				{projects.length > 3 && (
					<div className='flex justify-center mt-2'>
						<button
							onClick={() => setShowAll(!showAll)}
							className='px-4 py-2 bg-white border rounded-xl text-black hover:bg-black hover:text-white hover:cursor-pointer transition-colors'
						>
							{showAll ? 'Show Less' : 'See More'}
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Project;
