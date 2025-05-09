'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedGroup } from '../../../components/motion-primitives/animated-group';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { skillType } from '@/types/skills';
import frontendSkills from '@/data/skills/frontendSkills.json';
import backendSkills from '@/data/skills/backendSkills.json';
import otherSkills from '@/data/skills/otherSkills.json';

const Skills = () => {
	return (
		<section id='skills' className='px-4 py-10 sm:px-6 md:px-10'>
			<div className='space-y-2 text-center sm:text-left'>
				<h2 className='text-2xl sm:text-3xl font-bold'>Skills & Expertise</h2>
				<p className='text-sm sm:text-base text-muted-foreground max-w-xl mx-auto sm:mx-0'>
					A comprehensive overview of my technical abilities and soft skills
					that enable me to deliver excellent results.
				</p>
			</div>

			<div className='mt-8 flex justify-center sm:justify-start'>
				<Tabs defaultValue='frontend' className='w-full max-w-md sm:max-w-2xl'>
					<TabsList className='flex flex-wrap justify-center sm:justify-start gap-2'>
						<TabsTrigger value='frontend' className='hover:cursor-pointer'>Frontend</TabsTrigger>
						<TabsTrigger value='backend' className='hover:cursor-pointer'>Backend</TabsTrigger>
						<TabsTrigger value='other' className='hover:cursor-pointer'>Other</TabsTrigger>
					</TabsList>

					<TabsContent value='frontend'>
						<AnimatedGroup
							className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8'
							variants={{
								container: {
									visible: {
										transition: { staggerChildren: 0.05 },
									},
								},
								item: {
									hidden: {
										opacity: 0,
										filter: 'blur(12px)',
										y: -60,
										rotateX: 90,
									},
									visible: {
										opacity: 1,
										filter: 'blur(0px)',
										y: 0,
										rotateX: 0,
										transition: {
											type: 'spring',
											bounce: 0.3,
											duration: 1,
										},
									},
								},
							}}
						>
							{frontendSkills.map((skill: skillType, idx) => (
								<Card
									key={idx}
									className='w-full h-[100px] bg-white dark:bg-black shadow-md rounded-lg flex items-center justify-center text-center hover:cursor-pointer hover:scale-[1.05] transition-transform'
								>
									<CardContent className='flex flex-col items-center justify-center gap-y-2'>
										<Image
											src={skill.skillPicture}
											alt={skill.skillName}
											width={30}
											height={30}
										/>
										<Label className='text-xs sm:text-sm'>
											{skill.skillName}
										</Label>
									</CardContent>
								</Card>
							))}
						</AnimatedGroup>
					</TabsContent>

					<TabsContent value='backend'>
						<AnimatedGroup
							className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8'
							variants={{
								container: {
									visible: {
										transition: { staggerChildren: 0.05 },
									},
								},
								item: {
									hidden: {
										opacity: 0,
										filter: 'blur(12px)',
										y: -60,
										rotateX: 90,
									},
									visible: {
										opacity: 1,
										filter: 'blur(0px)',
										y: 0,
										rotateX: 0,
										transition: {
											type: 'spring',
											bounce: 0.3,
											duration: 1,
										},
									},
								},
							}}
						>
							{backendSkills.map((skill: skillType, idx) => (
								<Card
									key={idx}
									className='w-full h-[100px] bg-white dark:bg-black shadow-md rounded-lg flex items-center justify-center text-center hover:cursor-pointer hover:scale-[1.05] transition-transform'
								>
									<CardContent className='flex flex-col items-center justify-center gap-y-2'>
										<Image
											src={skill.skillPicture}
											alt={skill.skillName}
											width={30}
											height={30}
										/>
										<Label className='text-xs sm:text-sm'>
											{skill.skillName}
										</Label>
									</CardContent>
								</Card>
							))}
						</AnimatedGroup>
					</TabsContent>

					<TabsContent value='other'>
						<AnimatedGroup
							className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8'
							variants={{
								container: {
									visible: {
										transition: { staggerChildren: 0.05 },
									},
								},
								item: {
									hidden: {
										opacity: 0,
										filter: 'blur(12px)',
										y: -60,
										rotateX: 90,
									},
									visible: {
										opacity: 1,
										filter: 'blur(0px)',
										y: 0,
										rotateX: 0,
										transition: {
											type: 'spring',
											bounce: 0.3,
											duration: 1,
										},
									},
								},
							}}
						>
							{otherSkills.map((skill: skillType, idx) => (
								<Card
									key={idx}
									className='w-full h-[100px] bg-white dark:bg-black shadow-md rounded-lg flex items-center justify-center text-center hover:cursor-pointer hover:scale-[1.05] transition-transform'
								>
									<CardContent className='flex flex-col items-center justify-center gap-y-2'>
										<Image
											src={skill.skillPicture}
											alt={skill.skillName}
											width={30}
											height={30}
										/>
										<Label className='text-xs sm:text-sm'>
											{skill.skillName}
										</Label>
									</CardContent>
								</Card>
							))}
						</AnimatedGroup>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Skills;
