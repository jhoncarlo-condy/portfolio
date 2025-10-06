export interface ProjectType {
	title: string;
	description: string;
	stacks: string[];
	link?: string;
	githubUrl?: string;
	liveUrl?: string;
	status?: 'completed' | 'in-progress' | 'prototype' | 'maintenance';
	featured?: boolean;
	technologies?: string[];
	startDate?: string;
	endDate?: string;
}
