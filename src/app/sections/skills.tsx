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

const Skills = () => {
	return (
		<section id='skills' className='p-10'>
			<div>
				<h2 className='text-3xl font-bold'>Skills & Expertise</h2>
				<p className='text-muted-foreground'>
					A comprehensive overview of my technical abilities and soft skills
					that enable me to deliver excellent results.
				</p>
			</div>

			<div className='p-10'>
				<Tabs defaultValue='frontend' className='w-[400px]'>
					<TabsList>
						<TabsTrigger value='frontend'>Frontend</TabsTrigger>
						<TabsTrigger value='backend'>Backend</TabsTrigger>
						<TabsTrigger value='other'>Other</TabsTrigger>
					</TabsList>
					<TabsContent value='frontend'>
						<AnimatedGroup
							className='grid grid-cols-2 gap-4 p-12 md:grid-cols-3 lg:grid-cols-4 gap-x-30'
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
										},
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
							{frontendSkills.map((skill: skillType) => (
								<Card
									key={1}
									className='w-[100px] h-[100px] bg-white dark:bg-black shadow-md rounded-lg overflow-hidden items-center justify-center text-center'
								>
									<CardContent className='flex flex-col items-center justify-center gap-y-2'>
										<Image
											src={skill.skillPicture}
											alt={skill.skillName}
											width={30}
											height={30}
										/>
										<Label className='text-sm'>{skill.skillName}</Label>
									</CardContent>
								</Card>
							))}
						</AnimatedGroup>
					</TabsContent>
					<TabsContent value='backend'>
						<AnimatedGroup
							className='grid grid-cols-2 gap-4 p-12 md:grid-cols-3 lg:grid-cols-4 gap-x-30'
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
										},
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
							{backendSkills.map((skill: skillType) => (
								<Card
									key={1}
									className='w-[100px] h-[100px] bg-white dark:bg-black shadow-md rounded-lg overflow-hidden items-center justify-center text-center'
								>
									<CardContent className='flex flex-col items-center justify-center gap-y-2'>
										<Image
											src={skill.skillPicture}
											alt={skill.skillName}
											width={30}
											height={30}
										/>
										<Label className='text-sm'>{skill.skillName}</Label>
									</CardContent>
								</Card>
							))}
						</AnimatedGroup>
					</TabsContent>
					<TabsContent value='other'></TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Skills;
