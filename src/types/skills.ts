export interface SkillType {
	skillName: string;
	skillPicture: string;
	category?: 'frontend' | 'backend' | 'other';
	proficiencyLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Keep the old interface for backward compatibility
export type skillType = SkillType;
