import { HeroClass } from './HeroClass.enum';
import { Skill } from './Skill';

export class Hero {
    id: number;
    name: string;
    heroClass: HeroClass;
    isEvil: boolean;
    alterEgo?: string;
    skills: Skill[];
}
