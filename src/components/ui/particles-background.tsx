'use client';
import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import particlesConfig from '../config/particles-config';

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		// console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);
	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={particlesConfig}
		/>
	);
};

export default ParticlesBackground;
