import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Brain, BriefcaseBusiness, FolderClosed, Home } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jhon Carlo Condy - Website Portfolio',
	description:
		'Full-stack web developer with expertise in Next.js, Tailwind CSS, Laravel, and MySQL. Browse my portfolio to discover my work, technical skills, and growth throughout my development career.',
	icons: {
		icon: [
			{
				url: '/final-logo.png',
				href: '/final-logo.png',
			},
		],
	},
};

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='min-h-screen bg-white text-black dark:bg-black dark:text-white relative overflow-hidden'>
					<BackgroundBeamsWithCollision>
						{children}
					</BackgroundBeamsWithCollision>
					<FloatingNav navItems={navItems} />
				</div>
			</body>
		</html>
	);
}
