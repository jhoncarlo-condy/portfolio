import ParticlesBackground from '@/components/ui/particles-background';
import NavBar from './sections/navbar';
import Introduction from './sections/introduction';
import Skills from './sections/skills';
import Experience from './sections/experience';
import Project from './sections/project';

export default function Home() {
	return (
		<>
			<ParticlesBackground />
			<NavBar />
			<main className='mx-auto max-w-5xl px-4 py-8'>
				<section className='relative min-h-screen flex flex-col tex-center items-center justify-center -mt-25'>
					<h1 className='text-[1.1rem] text-light-gray-primary py-[9px] px-8 w-fit font-semibold rounded-3xl bg-[#0001] dark:bg-[#fff1] dark:text-dark-texto-secondary'>
						Hi! <span className='hi inline'>👋</span> I&apos;m Jhon Carlo Condy
					</h1>
					<Introduction />
				</section>
				<Skills />
				<Experience />
				<Project />
			</main>
		</>
	);
}
