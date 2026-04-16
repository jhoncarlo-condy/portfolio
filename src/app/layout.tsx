import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FloatingNavClient from '@/components/ui/floating-nav-client';
import type { ReactNode } from 'react';

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

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='min-h-screen bg-white text-black dark:bg-black dark:text-white relative overflow-hidden'>
					{children}
					<FloatingNavClient />
				</div>
			</body>
		</html>
	);
}
