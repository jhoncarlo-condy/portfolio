import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full justify-center text-center items-center bg-gray-100 dark:bg-gray-900 py-6 mt-10'>
			<div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 dark:text-gray-400'>
				<span>
					&copy; {new Date().getFullYear()} Jhon Carlo Condy. All rights
					reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
