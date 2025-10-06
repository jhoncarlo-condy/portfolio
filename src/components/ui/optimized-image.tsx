'use client';
import Image, { ImageProps } from 'next/image';
import { useState, memo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
	fallbackSrc?: string;
	showFallback?: boolean;
	className?: string;
	containerClassName?: string;
}

const OptimizedImage = memo(
	({
		src,
		alt,
		fallbackSrc,
		showFallback = true,
		className,
		containerClassName,
		...props
	}: OptimizedImageProps) => {
		const [imageSrc, setImageSrc] = useState(src);
		const [isLoading, setIsLoading] = useState(true);
		const [hasError, setHasError] = useState(false);

		const handleError = () => {
			setIsLoading(false);
			setHasError(true);
			if (fallbackSrc && imageSrc !== fallbackSrc) {
				setImageSrc(fallbackSrc);
				setHasError(false);
			}
		};

		const handleLoad = () => {
			setIsLoading(false);
			setHasError(false);
		};

		if (hasError && !fallbackSrc && showFallback) {
			return (
				<div
					className={cn(
						'flex items-center justify-center bg-muted rounded-md',
						containerClassName
					)}
				>
					<div className='text-muted-foreground text-xs text-center p-2'>
						<svg
							className='w-6 h-6 mx-auto mb-1'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
						Image not found
					</div>
				</div>
			);
		}

		return (
			<div className={cn('relative overflow-hidden', containerClassName)}>
				{isLoading && (
					<div className='absolute inset-0 bg-muted animate-pulse rounded-md' />
				)}
				<Image
					src={imageSrc}
					alt={alt}
					className={cn(
						'transition-opacity duration-300',
						isLoading ? 'opacity-0' : 'opacity-100',
						className
					)}
					onError={handleError}
					onLoad={handleLoad}
					{...props}
				/>
			</div>
		);
	}
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
