'use client';
import React, { memo } from 'react';
import { AnimatedGroup } from '../../../components/motion-primitives/animated-group';
import { skillType } from '@/types/skills';
import SkillCard from './skill-card';

interface SkillsGridProps {
	skills: skillType[];
	gridClassName?: string;
}

// Shared animation variants to reduce bundle size
const skillsAnimationVariants = {
	container: {
		visible: {
			transition: { staggerChildren: 0.05 },
		},
	},
	item: {
		hidden: {
			opacity: 0,
			filter: 'blur(12px)',
			y: -60,
			rotateX: 90,
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			y: 0,
			rotateX: 0,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 1,
			},
		},
	},
};

const SkillsGrid = memo(
	({
		skills,
		gridClassName = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8',
	}: SkillsGridProps) => {
		return (
			<AnimatedGroup
				className={gridClassName}
				variants={skillsAnimationVariants}
			>
				{skills.map((skill: skillType, idx) => (
					<SkillCard key={`${skill.skillName}-${idx}`} skill={skill} />
				))}
			</AnimatedGroup>
		);
	}
);

SkillsGrid.displayName = 'SkillsGrid';

export default SkillsGrid;
