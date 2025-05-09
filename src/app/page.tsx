import ParticlesBackground from '@/components/ui/particles-background';
import NavBar from './sections/navbar';
import Introduction from './sections/introduction';

export default function Home() {
	return (
		<>
			<ParticlesBackground />
			<NavBar />
			<main className='mx-auto max-w-2xl px-4 py-8'>
				<div className='text-center items-center justify-center flex flex-col mt-20'>
					<h1 className='text-[1.1rem] text-light-gray-primary py-[9px] px-8 w-fit font-semibold rounded-3xl bg-[#0001] dark:bg-[#fff1] dark:text-dark-texto-secondary'>
						Hi! <span className='hi inline'>👋</span> I&apos;m Jhon Carlo Condy
					</h1>
					<Introduction/>
				</div>
			</main>
		</>
	);
}
