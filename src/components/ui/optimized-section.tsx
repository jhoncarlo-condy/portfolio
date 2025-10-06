import { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import LoadingSpinner from '@/components/ui/loading-spinner';
import Image from 'next/image';

interface OptimizedSectionProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
	errorFallback?: React.ReactNode;
	className?: string;
}

export function OptimizedSection({
	children,
	fallback = <LoadingSpinner />,
	errorFallback,
	className,
}: OptimizedSectionProps) {
	return (
		<ErrorBoundary fallback={errorFallback}>
			<Suspense fallback={fallback}>
				<section className={className}>{children}</section>
			</Suspense>
		</ErrorBoundary>
	);
}

// Optimized Image component with lazy loading and error handling
export function OptimizedImage({
	src,
	alt,
	className,
	priority = false,
	...props
}: {
	src: string;
	alt: string;
	className?: string;
	priority?: boolean;
	[key: string]: string | number | boolean | undefined;
}) {
	return (
		<Image
			src={src}
			alt={alt}
			className={className}
			loading={priority ? 'eager' : 'lazy'}
			decoding='async'
			onError={(e) => {
				// Handle image load errors gracefully
				e.currentTarget.style.display = 'none';
			}}
			{...props}
		/>
	);
}
