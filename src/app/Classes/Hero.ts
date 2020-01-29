import { HeroClass } from './HeroClass.enum';
import { Skill } from './skill';

export class Hero {
    id: number;
    name: string;
    heroClass: HeroClass;
    isEvil: boolean;
    alterEgo?: string;
    skills: Skill[];
}
