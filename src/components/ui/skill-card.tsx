'use client';
import React, { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { skillType } from '@/types/skills';

interface SkillCardProps {
	skill: skillType;
}

const SkillCard = memo(({ skill }: SkillCardProps) => {
	return (
		<Card
			className='w-full h-[100px] bg-white dark:bg-black shadow-md rounded-lg flex items-center justify-center text-center hover:cursor-pointer hover:scale-[1.05] transition-transform'
			role='button'
			tabIndex={0}
			aria-label={`${skill.skillName} skill`}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					// Could add skill detail modal here
				}
			}}
		>
			<CardContent className='flex flex-col items-center justify-center gap-y-2 p-2'>
				{' '}
				<div className='relative w-[30px] h-[30px]'>
					<Image
						src={skill.skillPicture}
						alt={`${skill.skillName} logo`}
						width={30}
						height={30}
						className='object-contain'
						loading='lazy'
					/>
				</div>
				<Label className='text-xs sm:text-sm font-medium'>
					{skill.skillName}
				</Label>
			</CardContent>
		</Card>
	);
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
