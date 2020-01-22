import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../Classes/Hero';
import { Injectable } from '@angular/core';
import { HeroClass } from '../Classes/HeroClass.enum';
import { Skill } from '../Classes/Skill';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const skills = [
      { id: 11, naming: 'Punch', description: 'Hitting enemy with all strength', level: 1 },
      { id: 12, naming: 'Shot', description: 'Shot enemy from long range' },
    ];
    const heroes = [
      { id: 11, name: 'Dr Nice', heroClass: HeroClass.Warrior, isEvil: false, alterEgo: "Dr.Dre", skills: [skills[0]] },
      { id: 12, name: 'Narco', heroClass: HeroClass.Archer, isEvil: false },
      { id: 13, name: 'Bombasto', heroClass: HeroClass.Mage, isEvil: false },
      { id: 14, name: 'Celeritas', heroClass: HeroClass.Mage, isEvil: true, alterEgo: "Mistress" },
      { id: 15, name: 'Magneta', heroClass: HeroClass.Assassin, isEvil: true },
      { id: 16, name: 'RubberMan', heroClass: HeroClass.Priest, isEvil: false },
      { id: 17, name: 'Dynama', heroClass: HeroClass.Warrior, isEvil: true, alterEgo: "Shari" },
      { id: 18, name: 'Dr IQ', heroClass: HeroClass.Archer, isEvil: false },
      { id: 19, name: 'Magma', heroClass: HeroClass.Warrior, isEvil: false, alterEgo: "Ice3" },
      { id: 20, name: 'Tornado', heroClass: HeroClass.Archer, isEvil: true }
    ];
    return { heroes, skills };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Hero | Skill>(values: T[]): number {
    return values.length > 0 ? Math.max(...values.map(hero => hero.id)) + 1 : 11;
  }
}
