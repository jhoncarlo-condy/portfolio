import ParticlesBackground from '@/components/ui/particles-background';
import NavBar from './navbar';

export default function Home() {
	return (
		<>
			<ParticlesBackground />
			<NavBar /> 
			<main className='mx-auto max-w-2xl px-4 py-8'></main>
		</>
	);
}
