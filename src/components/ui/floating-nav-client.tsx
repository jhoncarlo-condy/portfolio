'use client';

import { Brain, BriefcaseBusiness, FolderClosed, Home } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';

const navItems = [
	{
		name: 'Home',
		link: '#home',
		icon: <Home className='h-4 w-4 text-neutral-500 dark:text-white' />,
	},
	{
		name: 'Skills',
		link: '#skills',
		icon: <Brain className='h-4 w-4 text-neutral-500 dark:text-white' />,
	},
	{
		name: 'Experience',
		link: '#experience',
		icon: (
			<BriefcaseBusiness className='h-4 w-4 text-neutral-500 dark:text-white' />
		),
	},
	{
		name: 'Projects',
		link: '#projects',
		icon: <FolderClosed className='h-4 w-4 text-neutral-500 dark:text-white' />,
	},
];

export default function FloatingNavClient() {
	return <FloatingNav navItems={navItems} />;
}

