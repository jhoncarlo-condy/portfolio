import { Suspense } from 'react';
import ParticlesBackground from '@/components/ui/particles-background';
import ErrorBoundary from '@/components/ui/error-boundary';
import LoadingSpinner from '@/components/ui/loading-spinner';
import PortfolioLoader from '@/components/ui/portfolio-loader';
import NavBar from './sections/navbar';
import Introduction from './sections/introduction';
import Skills from './sections/skills';
import Experience from './sections/experience';
import Project from './sections/project';
import Footer from './sections/footer';

export default function Home() {
	return (
		<PortfolioLoader>
			<ErrorBoundary>
				<ParticlesBackground />
			</ErrorBoundary>

			<NavBar />

			<main className='mx-auto max-w-5xl px-4 py-8'>
				<section className='relative min-h-screen flex flex-col text-center items-center justify-center -mt-25'>
					<div className='text-[1.1rem] text-muted-foreground py-[9px] px-8 w-fit font-semibold rounded-3xl bg-muted/10 backdrop-blur-sm border border-muted/20'>
						Hi!{' '}
						<span className='hi inline' role='img' aria-label='waving hand'>
							👋
						</span>{' '}
						I&apos;m Jhon Carlo Condy
					</div>
					<ErrorBoundary>
						<Introduction />
					</ErrorBoundary>
				</section>

				<ErrorBoundary>
					<Suspense fallback={<LoadingSpinner text='Loading skills...' />}>
						<Skills />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary>
					<Suspense fallback={<LoadingSpinner text='Loading experience...' />}>
						<Experience />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary>
					<Suspense fallback={<LoadingSpinner text='Loading projects...' />}>
						<Project />
					</Suspense>
				</ErrorBoundary>
			</main>

			<ErrorBoundary>
				<Footer />
			</ErrorBoundary>
		</PortfolioLoader>
	);
}
