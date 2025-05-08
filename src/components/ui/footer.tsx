import React from 'react';

const Footer = () => {
	return (
		<footer className='flex flex-col border-t-[1px] border-[#0001] dark:border-[#ffffff15] py-10 gap-14'>
			<section className='flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between'>
				<div className='flex gap-2 items-center font-bold text-light-texto-primary dark:text-dark-texto-primary'>
					<span className='h-[27px] w-[27px] aspect-square bg-primary rounded-lg'></span>
					Daniel Gómez
				</div>
				<ul className='flex flex-col sm:flex-row gap-3 sm:gap-8'>
					<li>
						<a
							className='text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline'
							href='#home'
						>
							Inicio
						</a>
					</li>
					<li>
						<a
							className='text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline'
							href='#jobs'
						>
							Experiencia
						</a>
					</li>
					<li>
						<a
							className='text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline'
							href='#projects'
						>
							Proyectos
						</a>
					</li>
					<li>
						<a
							className='text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline'
							href='#education'
						>
							Educación
						</a>
					</li>
					<li>
						<a
							className='text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline'
							href='/DanielGomez_CV.pdf'
							target='_blank'
						>
							Currículum
						</a>
					</li>
				</ul>
			</section>
			<section className='flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between'>
				<div className='flex flex-col gap-2'>
					<small className='text-light-gray-primary dark:text-dark-gray-primary text-[0.75rem]'>
						Descubrimiento musical semanal:
					</small>
					<a
						className='flex items-center gap-3 p-1 hover:bg-[#0001] dark:hover:bg-[#fff1] rounded-2xl'
						href='https://www.youtube.com/watch?v=oAk227xfIVM'
						target='_blank'
					>
						{/* <img src="/music/inperfecto_extrano.jpg" alt="Song thumbnail of the song Tercer tipo by Enjambre" className="flex items-center justify-center text-[0.7rem] text-center h-20 w-20 sm:w-12 sm:h-12 bg-light-gray-secondary dark:bg-dark-gray-secondary rounded-xl" loading="lazy"> */}
						<div className='flex flex-col'>
							<p className='text-light-texto-primary dark:text-dark-texto-primary font-extrabold -mb-1'>
								Tercer tipo
							</p>

							<span className='text-light-gray-primary dark:text-dark-gray-primary text-[0.81rem]'>
								Enjambre
							</span>
						</div>
					</a>
				</div>
				<small className='text-light-gray-primary dark:text-dark-gray-primary text-[0.75rem] max-w-md sm:text-end'>
					Este portfolio es de código abierto. Siéntete libre de usarlo, pero no
					olvides dejar una ⭐ al repo. Puedes encontrar el repositorio{' '}
					<a
						className='text-light-texto-primary dark:text-dark-texto-primary hover:underline'
						href='https://github.com/devenapuros/portfolio'
						target='_blank'
					>
						aquí
					</a>
					.
				</small>
			</section>
		</footer>
	);
};

export default Footer;
