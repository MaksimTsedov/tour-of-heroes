import { HeroClass } from './HeroClass.enum';

export class Hero {
    id: number;
    name: string;
    heroClass: HeroClass;
    isEvil: boolean;
    alterEgo?: string;
}
